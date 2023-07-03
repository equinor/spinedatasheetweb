import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateDriverAndGearRowData = (datasheet: MechanicalTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Driver type:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver specification:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverSpecification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverSpecification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver manufacturer:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverManufacturer,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverManufacturer,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver rating:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverRating,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverRating,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver sized for testing on water:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverSizedForTestingOnWater,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverSizedForTestingOnWater,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver frame or model:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverFrameOrModel,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverFrameOrModel,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver nameplate power:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverNameplatePower,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverNameplatePower,
            supplierOfferedValUOM: "kW",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver nominal speed:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverNominalSpeed,
            purchaserReqUOM: "rpm",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverNominalSpeed,
            supplierOfferedValUOM: "rpm",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver rated load speed:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverRatedLoadSpeed,
            purchaserReqUOM: "rpm",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverRatedLoadSpeed,
            supplierOfferedValUOM: "rpm",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver lubrication method:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverLubricationMethod,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverLubricationMethod,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver radial bearing type:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverRadialBearingType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverRadialBearingType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Driver thrust bearing type:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.driverThrustBearingType,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.driverThrustBearingType,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Motor starting method:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.motorStartingMethod,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.motorStartingMethod,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Adjustable speed drive:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.adjustableSpeedDrive,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.adjustableSpeedDrive,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Source of adjustable speed drive:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.sourceOfAdjustableSpeedDrive,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.sourceOfAdjustableSpeedDrive,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Required trip speed:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.requiredTripSpeed,
            purchaserReqUOM: "rpm",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.requiredTripSpeed,
            supplierOfferedValUOM: "rpm",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Gear:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.gear,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.gear,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Gear specification:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.gearSpecification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.gearSpecification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Gear/adjustable speed drive manufacturer:",
            purchaserReq: datasheet.mechanicalPurchaserRequirement?.gearAdjustableSpeedDriveManufacturer,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.mechanicalSupplierOfferedProduct?.gearAdjustableSpeedDriveManufacturer,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
