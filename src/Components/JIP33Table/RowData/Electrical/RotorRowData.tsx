import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TagData } from "../../../../Models/TagData"
import { TableRow } from "../TableRow"

export const generateRotorRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Maximum vibration magnitude:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.maximumVibrationMagnitude,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.maximumVibrationMagnitude,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
