import { ColDef } from "@ag-grid-community/core"
import { getPropertyName } from "../../../utils/helpers"

export const comparisonReviewColumnDefs = (): ColDef[] => [
    {
        headerName: "Assigned reviewer",
        field: getPropertyName<Components.Schemas.ReviewerDto>("displayName"),
        hide: true,
    },
]
