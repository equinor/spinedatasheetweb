import {
    ColDef, SideBarDef,
} from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import React, {
    useCallback, useEffect, useMemo, useRef, useState, useContext,
} from "react"
import { Button, Icon, Typography } from "@equinor/eds-core-react"
import { view_column } from "@equinor/eds-icons"
import { styled } from "styled-components"
import TextInput from "@equinor/fusion-react-textinput"
import { InstrumentTagData } from "../../Models/InstrumentTagData"
import { comparisonGeneralColumnDefs } from "./ColumnDefs/GeneralColumnDefs"
import { comparisonTR3111ColumnDefs } from "./ColumnDefs/TR3111ColumnDefs"
import { comparisonTagsColumnDefs } from "./ColumnDefs/TagsColumnDefs."
import { comparisonEquipmentConditionsColumnDefs } from "./ColumnDefs/EquipmentConditionColumnDefs"
import { comparisonOperatingConditionsColumnDefs } from "./ColumnDefs/OperatingConditionsColumnDefs"
import CommentFilterToolPanel from "./FilterTabs/CommentFilterToolPanel"
import IconFilterToolPanel from "./FilterTabs/IconFilterToolPanel"
import TagPropertySideSheet from "../SideSheet/TagPropertySideSheet"
import TagSideSheet from "../SideSheet/TagSideSheet"
import { ViewContext } from "../../Context/ViewContext"
import { comparisonReviewColumnDefs } from "./ColumnDefs/ReviewColumnDefs"
import {
    resetFilters, restoreFilterModel, saveFilterModel, showActiveFilters,
} from "../../utils/AgGridFilterFunctions"
import { GetTagReviewerService } from "../../api/TagReviewerService"

const TableContainer = styled.div`
    flex: 1 1 auto;
    width: 100%; 
    height: calc(100vh - 325px);
`
const ResizableTableContainer = styled.div<{ $sheetWidth: number }>`
    width: calc(100% - ${(props) => props.$sheetWidth}px);
`
const FilterBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
    gap: 15px;
`

interface ActiveTagData {
    description: string;
    tagNo: string;
}

interface Props {
    tags: InstrumentTagData[]
}

function TagComparisonTable({ tags }: Props) {
    const styles = useStyles()
    const gridRef = useRef<AgGridReact>(null)
    const {
        setSideSheetOpen,
        sheetWidth,
        setCurrentProperty,
        activeTagData,
        setActiveTagData,
    } = useContext(ViewContext)
    const [FilterSidebarIsOpen, SetFilterSidebarIsOpen] = useState<boolean>(false)
    const [showTagSideSheet, setShowTagSideSheet] = useState<boolean>(false)
    const [tagReviews, setTagReviews] = useState<Components.Schemas.TagReviewerDto[]>()
    const [savedFilterModel, setSavedFilterModel] = useState<object>(() => JSON.parse(localStorage.getItem("savedFilters") || "{}"))
    const [propFilters, setPropFilters] = useState<string[]>([])
    const [filterButtons, setFilterButtons] = useState<JSX.Element[]>([])
    const [hasActiveFilters, setHasActiveFilters] = useState<boolean>(false)

    const toggleFilterSidebar = () => SetFilterSidebarIsOpen(!FilterSidebarIsOpen)
    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: true,
            filter: "agMultiColumnFilter",
            resizable: true,
            editable: false,
            cellDataType: false,
        }),
        [],
    )

    useEffect(() => {
        (async () => {
            try {
                const result = await (await GetTagReviewerService()).getTagReviewers()
                setTagReviews(result.data)
            } catch (error) {
                console.error(`Couldn't get tag reviews: ${error}`)
            }
        })()
    }, [])

    // Opens side sheet when tag is clicked
    useEffect(() => {
        if (activeTagData !== undefined) {
            setSideSheetOpen(true)
        }
    }, [activeTagData])

    useEffect(() => {
        if (propFilters !== Object.keys(savedFilterModel)) {
            setPropFilters(Object.keys(savedFilterModel))
        }
    }, [savedFilterModel])

    useEffect(() => {
        showActiveFilters(propFilters, setHasActiveFilters, setFilterButtons)
    }, [propFilters])

    const getReviewerNamesFromReviews = (tag: InstrumentTagData) => {
        const reviewers: string[] = []
        tagReviews?.forEach((tagReview: Components.Schemas.TagReviewerDto) => {
            if (tag.tagNo !== tagReview.tagNo) { return }
            if (tagReview.displayName) {
                reviewers.push(tagReview?.displayName)
            }
        })
        return reviewers.toString()
    }

    const newColumns = [...comparisonReviewColumnDefs(),
    ...comparisonTagsColumnDefs(),
    ...comparisonTR3111ColumnDefs(),
    ...comparisonGeneralColumnDefs(),
    ...comparisonEquipmentConditionsColumnDefs(),
    ...comparisonOperatingConditionsColumnDefs(),
    ]

    const tagRows = tags.map((tag) => ({
        ...tag.instrumentPurchaserRequirement,
        ...tag,
        tagNumber: tag.tagNo,
        displayName: getReviewerNamesFromReviews(tag),
    }))

    const columnSideBar = useMemo<
        SideBarDef | string | string[] | boolean | null
    >(() => ({
        toolPanels: [
            {
                id: "columns",
                labelDefault: "Columns",
                labelKey: "columns",
                iconKey: "columns",
                toolPanel: "agColumnsToolPanel",
                toolPanelParams: {
                    suppressRowGroups: true,
                    suppressValues: true,
                    suppressPivots: true,
                    suppressPivotMode: true,
                    suppressColumnSelectAll: true,
                    suppressColumnExpandAll: true,
                },
                minWidth: 250,
                maxWidth: 250,
            },
            {
                id: "filters",
                labelDefault: "Row Data",
                labelKey: "filters",
                iconKey: "filter",
                toolPanel: "agFiltersToolPanel",
                minWidth: 250,
                maxWidth: 250,
            },
            {
                id: "commentFilters",
                labelDefault: "Comments",
                labelKey: "commentFilters",
                iconKey: "filter",
                toolPanel: CommentFilterToolPanel,
                minWidth: 250,
                maxWidth: 250,

            },
            {
                id: "iconFilters",
                labelDefault: "Icons",
                labelKey: "iconFilters",
                iconKey: "filter",
                toolPanel: IconFilterToolPanel,
                minWidth: 250,
                maxWidth: 250,
            },
        ],
        defaultToolPanel: "columns",
    }), [])

    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current?.api.setQuickFilter(
            (document.getElementById("filter-text-box") as HTMLInputElement).value,
        )
    }, [])

    const toggleSideBar = () => {
        if (FilterSidebarIsOpen) {
            return columnSideBar
        }
        return undefined
    }

    const closeSideSheet = () => {
        setSideSheetOpen(false)
        setActiveTagData(undefined)
    }

    const handleCellClicked = (event: any) => {
        const shouldOpenTaggSideSheet = event.colDef.field === "tagNo"
        if (shouldOpenTaggSideSheet) {
            setShowTagSideSheet(true)
            setCurrentProperty("")
        } else {
            setShowTagSideSheet(false)
            setCurrentProperty(event.data.description)
        }
        setActiveTagData({ description: event.data.description, tagNo: event.data.tagNo })
    }

    const hideColumnsWithNoData = useCallback((params: any) => {
        const comparisonColumns = params.columnApi?.getColumns()
        const renderedRowNodes = params.api?.getRenderedNodes()
        comparisonColumns?.forEach((column: any) => {
            const columnHasNoData = !renderedRowNodes?.some((rowNode: any) => {
                const nodeValue = params.api?.getValue(column, rowNode)
                return typeof nodeValue !== "undefined" && nodeValue !== null && nodeValue !== ""
            })
            params.columnApi.setColumnVisible(column, !columnHasNoData)
        })
    }, [])

    const onFilterChanged = (params: any) => {
        saveFilterModel(params, setSavedFilterModel)
    }

    const onGridReady = (params: any) => {
        hideColumnsWithNoData(params)
        restoreFilterModel(gridRef, savedFilterModel)
    }

    return (
        <>
            {showTagSideSheet ? (
                <TagSideSheet
                    key={activeTagData?.tagNo}
                    onClose={closeSideSheet}
                />
            ) : (
                <TagPropertySideSheet
                    key={activeTagData?.tagNo}
                    onClose={closeSideSheet}
                />
            )}
            <ResizableTableContainer $sheetWidth={sheetWidth}>
                <FilterBar>
                    <Wrapper>
                        {hasActiveFilters && (
                            <>
                                <Typography>
                                    Active filters:
                                    {" "}
                                    {filterButtons}
                                </Typography>
                                <Button
                                    variant="ghost"
                                    style={{ borderRadius: 40, height: 30 }}
                                    onClick={() => resetFilters(
                                        gridRef,
                                        setFilterButtons,
                                        setPropFilters,
                                        setHasActiveFilters,
                                    )}
                                >
                                    Clear filters
                                </Button>

                            </>
                        )}
                    </Wrapper>
                    <Wrapper>
                        <TextInput
                            icon="search"
                            size={30}
                            dense
                            type="text"
                            id="filter-text-box"
                            placeholder="Search all properties"
                            onInput={onFilterTextBoxChanged}
                        />
                        <Button
                            variant={FilterSidebarIsOpen ? "contained" : "outlined"}
                            onClick={toggleFilterSidebar}
                        >
                            <Icon data={view_column} color={FilterSidebarIsOpen ? "white" : "#007079"} />
                            Filters
                        </Button>
                    </Wrapper>
                </FilterBar>
                <div className={styles.root}>
                    <TableContainer
                        className="ag-theme-alpine-fusion"
                    >
                        <AgGridReact
                            ref={gridRef}
                            rowData={tagRows}
                            columnDefs={newColumns}
                            defaultColDef={defaultColDef}
                            animateRows
                            domLayout="normal"
                            enableCellChangeFlash
                            rowSelection="multiple"
                            suppressMovableColumns
                            headerHeight={48}
                            rowHeight={35}
                            enableRangeSelection
                            sideBar={toggleSideBar()}
                            onCellClicked={handleCellClicked}
                            onGridReady={onGridReady}
                            onFilterChanged={onFilterChanged}
                        />
                    </TableContainer>
                </div>
            </ResizableTableContainer>
        </>
    )
}

export default TagComparisonTable
