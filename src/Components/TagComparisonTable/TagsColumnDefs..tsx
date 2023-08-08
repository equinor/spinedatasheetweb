import { ColDef, ColGroupDef } from "@ag-grid-community/core"
import { TagData } from "../../Models/TagData"

function getPropertyName<T>(property: keyof T): keyof T {
    return property
}

export const comparisonTagsColumnDefs = (): ColDef[] => [
    {
        headerName: "Tag number",
        field: getPropertyName<TagData>("tagNo"),
        pinned: "left",
    },
]
