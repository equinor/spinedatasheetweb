import { InstrumentTagData } from "../../../Models/InstrumentTagData"
import { TableRow } from "../../JIP33Table/RowData/TableRow"

export const generalRowData = (datasheet: InstrumentTagData): TableRow[] => [
        {
            refClause: "",
            description: "Tag number",
            purchaserReq: datasheet.tagNo,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "tagNo",
        },
        {
            refClause: "",
            description: "Service description",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.serviceDescription,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "serviceDescription",
        },
        {
            refClause: "",
            description: "P&ID",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.pidNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "pidNumber",
        },
        {
            refClause: "",
            description: "Line/equipment no",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.lineOrEquipmentNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "lineOrEquipmentNumber",
        },
        {
            refClause: "",
            description: "Pipe class sheet",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.pipeClassSheet,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "pipeClassSheet",
        },
        {
            refClause: "",
            description: "Set/alarm point",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.setAlarmPoint,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "setalarmPoint",
        },
        {
            refClause: "",
            description: "Area",
            purchaserReq: datasheet.area,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "area",
        },
        {
            refClause: "",
            description: "P.O. number",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.poNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "poNumber",
        },
        {
            refClause: "",
            description: "Type",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.type,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "type",
        },
        {
            refClause: "",
            description: "Manufacturer",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.manufacturer,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "manufacturer",
        },
        {
            refClause: "",
            description: "Operating Temp Limits",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.operatingTemperatureLimits,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "operatingTemperatureLimits",
        },
        {
            refClause: "",
            description: "Operating Press. Limit",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.operatingPressureLimit,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "operatingPressureLimit",
        },
        {
            refClause: "",
            description: "Press. loss at full range",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.pressureLossAtFullRange,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "pressureLossAtFullRange",
        },
        {
            refClause: "",
            description: "Mounting",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.mounting,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "mounting",
        },
        {
            refClause: "",
            description: "Weight",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.weight,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "weight",
        },
        {
            refClause: "",
            description: "Other",
            purchaserReq: "NA",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
    ]