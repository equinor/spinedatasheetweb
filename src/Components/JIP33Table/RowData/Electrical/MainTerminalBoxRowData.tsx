import { ElectricalTagData } from "../../../../Models/ElectricalTagData"
import { TagData } from "../../../../Models/TagData"
import { TableRow } from "../TableRow"

export const generateMainTerminalBoxRowData = (datasheet: ElectricalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Position:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.position,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.position,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Location:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.terminalBoxLocation,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.terminalBoxLocation,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Ingress protection of terminal box(es):",
            purchaserReq: datasheet.electricalPurchaserRequirement?.ingressProtectionOfTerminalBoxes,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.ingressProtectionOfTerminalBoxes,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Line conductor terminal box cable gland entries:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.lineConductorTerminalBoxCableGlandEntries,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.lineConductorTerminalBoxCableGlandEntries,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Line conductor cross-section area:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.lineConductorCrossSectionArea,
            purchaserReqUOM: "mm²",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.lineConductorCrossSectionArea,
            supplierOfferedValUOM: "mm²",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Main terminal box cable entry hole size and number:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.mainTerminalBoxCableEntryHoleSizeAndNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.mainTerminalBoxCableEntryHoleSizeAndNumber,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Large terminal box:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.largeTerminalBox,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.largeTerminalBox,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Oversized terminal box:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.oversizedTerminalBox,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.oversizedTerminalBox,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Main terminal box material:",
            purchaserReq: datasheet.electricalPurchaserRequirement?.mainTerminalBoxMaterial,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.electricalSupplierOfferedProduct?.mainTerminalBoxMaterial,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
