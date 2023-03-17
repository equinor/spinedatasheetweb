import { useMemo } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"

import "../../AgGridTable.css"

import {
    ColDef,
  } from '@ag-grid-community/core'
import { ColorLegendEnum } from './JIP33ColorLegendEnums'

function JIP33LegendModal({
}) {
    useAgGridStyles()

    const red = "#e6b8b7"
    const lightBlue = "#b7dee8"
    const grey = "#aeaaaa"
    const lightGreen = "#d8e4bc"
    const green = "#a2fc82"
    const lightOrange = "#fcd5b4"

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])

    const reqColor = (params: any) => {
        if (params.data.color === ColorLegendEnum.SelectPurComDropDown) {
            return { backgroundColor: red }
        }
        if (params.data.color === ColorLegendEnum.InputDataPurCom) {
            return { backgroundColor: red }
        }
        if (params.data.color === ColorLegendEnum.SelectSupComDropDown) {
            return { backgroundColor: lightBlue }
        }
        if (params.data.color === ColorLegendEnum.InputDataSupCom) {
            return { backgroundColor: lightBlue }
        }
        if (params.data.color === ColorLegendEnum.SelectEitherPurOrSupComDropDown) {
            return { backgroundColor: lightGreen }
        }
        if (params.data.color === ColorLegendEnum.InputDataEitherPurOrSupCom) {
            return { backgroundColor: lightGreen }
        }
        if (params.data.color === ColorLegendEnum.SelectUnitsOfDropDown) {
            return { backgroundColor: lightOrange }
        }
        if (params.data.color === ColorLegendEnum.SelectNoInputExp) {
            return { backgroundColor: grey }
        }
        if (params.data.color === ColorLegendEnum.InputDataNoInputExp) {
            return { backgroundColor: grey }
        }
        if (params.data.color === ColorLegendEnum.UOMFixedUnitGrey) {
            return { backgroundColor: grey }
        }
        if (params.data.color === ColorLegendEnum.UOMFixedUnitWhite) {
            return { backgroundColor: "white" }
        }
        if (params.data.color === ColorLegendEnum.SpineModification) {
            return { backgroundColor: green }
        }
        return { backgroundColor: "white" }
    }

    const rowData = [
        { legend: "select", color: ColorLegendEnum.SelectPurComDropDown, description: "Purchaser completed, drop-down list of pre-defined values (may be prepopulated with a default value)" },
        { legend: "input data", color: ColorLegendEnum.InputDataPurCom, description: "Purchaser completed data entry" },
        { legend: "select", color: ColorLegendEnum.SelectSupComDropDown, description: "Supplier completed, drop-down list of pre-defined values" },
        { legend: "input data", color: ColorLegendEnum.InputDataSupCom, description: "Supplier completed data entry" },
        { legend: "select", color: ColorLegendEnum.SelectEitherPurOrSupComDropDown, description: "Either supplier or purchaser completed, drop-down list of predefined values (may be prepopulated with a default value)" },
        { legend: "input data", color: ColorLegendEnum.InputDataEitherPurOrSupCom, description: "Either supplier or purchaser completed data entry" },
        { legend: "select", color: ColorLegendEnum.SelectUnitsOfDropDown, description: "Selection of units from a pre-defined drop-down list" },
        { legend: "select", color: ColorLegendEnum.SelectNoInputExp, description: "No input expected" },
        { legend: "input data", color: ColorLegendEnum.InputDataNoInputExp, description: "No input expected" },
        { legend: "UOM", color: ColorLegendEnum.UOMFixedUnitGrey, description: "Fixed unit of measure" },
        { legend: "UOM", color: ColorLegendEnum.UOMFixedUnitWhite, description: "Fixed unit of measure" },
        { legend: "", description: "No unit of measure (null)" },
        { legend: "", color: ColorLegendEnum.SpineModification, description: "Spine modification - Supplier must confirm required value or better if posible " }

    ]

    const columns = [
        { field: "legend", headerName: "Legend", cellStyle: (params:any) => reqColor(params) },
        { field: "description", headerName: "Description", width: 800 },
    ]

    return (
        <>
            <div className="ag-theme-alpine ag-theme-datasheetTable" style={{ flex: "1 1 auto", marginTop: 20, width: "1000px" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    animateRows
                    domLayout="autoHeight"
                    enableCellChangeFlash
                    rowSelection="multiple"
                    suppressMovableColumns
                    suppressHorizontalScroll
                    headerHeight={48}
                    rowHeight={35}
                    modules={[ClientSideRowModelModule]}
                />
            </div>
        </>
    )
}

export default JIP33LegendModal
