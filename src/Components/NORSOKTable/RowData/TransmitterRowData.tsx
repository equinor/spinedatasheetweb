import { InstrumentTagData } from "../../../Models/InstrumentTagData"
import { TableRow } from "../../JIP33Table/RowData/TableRow"

export const transmitterRowData = (datasheet: InstrumentTagData): TableRow[] => [
        {
            refClause: "",
            description: "Manufacturer model no",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterModelNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Mounting",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterMounting,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Max distance meter/trans",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maxDistanceMeterTrans,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Cable connection",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterCableConnection,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Cable entry",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.cableEntry,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Dimension",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterDimension,
            purchaserReqUOM: "mm",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Material",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterEnclosureMaterial,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Enclosure protection",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterEnclosureProtection,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Ex. classification",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterExClassification,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Protective coating",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterProtectiveCoating,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Indicator",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterIndicator,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Output signal",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterOutputSignal,
            purchaserReqUOM: "mA",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Communication",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.communicationProtocol,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Supply voltage",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.supplyVoltage,
            purchaserReqUOM: "V DC",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Consumption",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterConsumption,
            purchaserReqUOM: "V",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Load limitation",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterLoadLimitation,
            purchaserReqUOM: "Ohm",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Flow range",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.transmitterFlowRange,
            purchaserReqUOM: "kg/h",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
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
