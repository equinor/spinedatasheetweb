import { useMemo } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useAgGridStyles } from "@equinor/fusion-react-ag-grid-addons"
import "../../AgGridTable.css"
import { ColDef } from '@ag-grid-community/core'
function DatasheetListTable({
}) {
    useAgGridStyles()
    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
    }), [])
    const columns = [
        { field: "tagNo", headerName: "Tag number" },
        { field: "datasheet", headerName: "Datasheet", width: 400 },
    ]
    const rowData = [
        { tagNo: "4568snf875", datasheet: "Datasheet 1"},
        { tagNo: "268fp875", datasheet: "Datasheet 2"},
        { tagNo: "enfu785648", datasheet: "Datasheet 3"},
        { tagNo: "ilu78548-45", datasheet: "Datasheet 4"},
    ]
    return (
        <>
            <div className="ag-theme-alpine ag-theme-datasheetTable" style={{ flex: "1 1 auto", marginTop: 20, width: "90%" }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    animateRows
                    domLayout="autoHeight"
                    enableCellChangeFlash
                    rowSelection="multiple"
                    suppressMovableColumns
                    headerHeight={48}
                    rowHeight={35}
                    modules={[ClientSideRowModelModule]}
                    pagination
                    paginationPageSize={20}
                />
            </div>
        </>
    )
}
export default DatasheetListTable
