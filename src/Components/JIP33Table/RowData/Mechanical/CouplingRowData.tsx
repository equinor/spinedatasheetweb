import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TagData } from "../../../../Models/TagData"
import { TableRow } from "../TableRow"

export const generateCouplingRowData = (datasheet: MechanicalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Coupling specification:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingSpecification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingSpecification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling manufacturer:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingManufacturer,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingManufacturer,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling type/model/size:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingTypeModelSize,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingTypeModelSize,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling rating (power/100 rpm):",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingRatingPowerPer100Rpm,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingRatingPowerPer100Rpm,
            supplierOfferedValUOM: "kW/100 rpm",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling components balance grade:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingComponentsBalanceGrade,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingComponentsBalanceGrade,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling with hydraulic fit:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingWithHydraulicFit,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingWithHydraulicFit,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling with proprietary clamping device:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingWithProprietaryClampingDevice,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingWithProprietaryClampingDevice,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling guard specification:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingGuardSpecification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingGuardSpecification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coupling and exposed shaft guard material:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.couplingAndExposedShaftGuardMaterial,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.couplingAndExposedShaftGuardMaterial,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
