import { useMemo } from "react"
import { AgGridReact } from "@ag-grid-community/react"
import { tokens } from "@equinor/eds-tokens"
import { TagData } from "../Models/TagData"
import { Icon } from "@equinor/eds-core-react"
import { tag } from "@equinor/eds-icons"
import styled from "styled-components"
import { ColDef } from "@ag-grid-community/core"
import { Link, useLocation } from "react-router-dom"

interface Props {
    tags: TagData[],
}

const TagIcon = styled(Icon)`
    position: relative;
    top: 4px;
    padding-right: 9px;
`

function EquipmentListTable({ tags }: Props) {
    const location = useLocation()

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: "agMultiColumnFilter",
        resizable: true,
        editable: false,
    }), [])

    const typeOfJIP33 = (params: any) => {
        const discipline = params.data.discipline
        if (discipline === "Mechanical") {
            return "JIP33Mechanical"
        }
        if (discipline === "Electrical") {
            return "JIP33Electrical"
        }
        return "JIP33Instrument"
    }

    const getTagLink = (params: any) => {
        const lastChar = location.pathname.charAt(location.pathname.length - 1)
        if (lastChar === "/") {
            const result = ({ ...location, pathname: `${location.pathname}${typeOfJIP33(params)}/${params.data.id}` })
            return result
        }
        const result = ({ ...location, pathname: `${location.pathname}/${typeOfJIP33(params)}/${params.data.id}` })
        return result
    }

    const linkToDocument = (params: any) => {
        return (
            <Link
                to={getTagLink(params)}
                style={{ color: tokens.colors.text.static_icons__default.rgba }}
            >
                <TagIcon data={tag} color={'green'} size={18} />
                {params.value}
            </Link>
        )
    }

    const columns = [
        {
            headerName: "Tag info",
            children: [
                { field: "tagNo", headerName: "Tag number", cellRenderer: (params: any) => linkToDocument(params) },
                { field: "contractNo", headerName: "ContractNo" },
                { field: "description", headerName: "Description", flex: 1, minWidth: 100 },
                { field: "category", headerName: "Category" },
                { field: "area", headerName: "Area", flex: 1, maxWidth: 100, minWidth: 80 },
                { field: "discipline", headerName: "Discipline" },
            ]

        },
        {
            headerName: "Review info",
            children: [
                { field: "requirementMatch", headerName: "Requirement match" },
                { field: "commentResponsible", headerName: "Comment responsible" },
                { field: "reviewers", headerName: "Reviewers" },
                { field: "reviewDeadline", headerName: "Review deadline" },
                { field: "reviewStatus", headerName: "Review status" },
            ]
        }
    ]

    return (
        <div
            className="ag-theme-alpine ag-theme-datasheetTable"
            style={{ flex: "1 1 auto", width: "100%" }}
        >
            <AgGridReact
                rowData={tags}
                columnDefs={columns}
                defaultColDef={defaultColDef}
                animateRows
                domLayout="autoHeight"
                enableCellChangeFlash
                rowSelection="multiple"
                suppressMovableColumns
                headerHeight={48}
                rowHeight={35}
                enableRangeSelection
                suppressCopySingleCellRanges
            />
        </div>
    )
}
export default EquipmentListTable
