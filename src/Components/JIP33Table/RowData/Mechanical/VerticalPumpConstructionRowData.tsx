import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateVerticalPumpConstructionRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "Head maximum allowable working pressure:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.headMaximumAllowableWorkingPressure,
        purchaserReqUOM: "bar g",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.headMaximumAllowableWorkingPressure,
        supplierOfferedValUOM: "bar g",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Column maximum allowable working pressure:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.columnMaximumAllowableWorkingPressure,
        purchaserReqUOM: "bar g",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.columnMaximumAllowableWorkingPressure,
        supplierOfferedValUOM: "bar g",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Bowl maximum allowable working pressure:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.bowlMaximumAllowableWorkingPressure,
        purchaserReqUOM: "bar g",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.bowlMaximumAllowableWorkingPressure,
        supplierOfferedValUOM: "bar g",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Suction barrel or can maximum allowable working pressure:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.suctionBarrelOrCanMaximumAllowableWorkingPressure,
        purchaserReqUOM: "bar g",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.suctionBarrelOrCanMaximumAllowableWorkingPressure,
        supplierOfferedValUOM: "bar g",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Pump thrust bearing location:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.pumpThrustBearingLocation,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.pumpThrustBearingLocation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Suction strainer type:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.suctionStrainerType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.suctionStrainerType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Level control by:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.levelControlBy,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.levelControlBy,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Line shaft connection:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.lineShaftConnection,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.lineShaftConnection,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Line shaft configuration:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.lineShaftConfiguration,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.lineShaftConfiguration,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Line shaft bearing lube:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.lineShaftBearingLube,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.lineShaftBearingLube,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Line shaft bearing quantity:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.lineShaftBearingQuantity,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.lineShaftBearingQuantity,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Hardened sleeves under line shaft bearings:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.hardenedSleevesUnderLineShaftBearings,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.hardenedSleevesUnderLineShaftBearings,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
