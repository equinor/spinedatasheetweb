import { Datasheet } from "../../../Models/Datasheet"
import { ColorLegendEnum } from "../JIP33ColorLegendEnums"
import { TableRow } from "./TableRow"

export const bodyElementSensorRowData = [
    {
        refClause: "",
        description: "Body/element/sensor manufacturer model number:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "",
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Body material:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
        purchaserReqUOM: "",
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Coriolis tube material:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "",
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Coriolis tube type:",
        purchaserReq: "select",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "",
        supplierOfferedVal: "select",
        supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Flange material:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "",
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Body size:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "select",
        purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
        supplierOfferedValUOM: "select",
        supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "End connection size:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "select",
        purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
        supplierOfferedValUOM: "select",
        supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "End connection flange type:",
        purchaserReq: "ASME B16.5 RF",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "",
        supplierOfferedVal: "ASME B16.5 RF",
        supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "End connection flange rating:",
        purchaserReq: "select",
        purchaserReqColor: ColorLegendEnum.SelectNoInputExp,
        purchaserReqUOM: "",
        supplierOfferedVal: "select",
        supplierOfferedValColor: ColorLegendEnum.SelectSupComDropDown,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Coriolis outer casing material:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
        purchaserReqUOM: "",
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Coriolis outer casing burst pressure:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "select",
        purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.SelectSupComDropDown,
        supplierOfferedValUOM: "select",
        supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Rupture disc burst pressure:",
        purchaserReq: "input data",
        purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
        purchaserReqUOM: "select",
        purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
        supplierOfferedVal: "input data",
        supplierOfferedValColor: ColorLegendEnum.SelectSupComDropDown,
        supplierOfferedValUOM: "select",
        supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Process secondary containment:",
        purchaserReq: "select",
        purchaserReqUOM: "",
        supplierOfferedVal: "select",
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]


export const generateBodyElementSensorRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Body/element/sensor manufacturer model number:",
            purchaserReq: "input data",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.bodyElementSensorManufacturerModelNumber,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Body material:",
            purchaserReq: datasheet.purchaserRequirement?.bodyMaterial,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.bodyMaterial,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coriolis tube material:",
            purchaserReq: "input data",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coriolis tube type:",
            purchaserReq: "select",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: "MISSING DATA",
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Flange material:",
            purchaserReq: "input data",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.flangeMaterial,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Body size:",
            purchaserReq: "input data",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "select",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.bodySize,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "in",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "End connection size:",
            purchaserReq: "input data",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "select",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.endConnectionSize,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "in",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "End connection flange type:",
            purchaserReq: "ASME B16.5 RF",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.endConnectionFlangeType,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "End connection flange rating:",
            purchaserReq: "select",
            purchaserReqColor: ColorLegendEnum.SelectNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.endConnectionFlangeRating,
            supplierOfferedValColor: ColorLegendEnum.SelectSupComDropDown,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coriolis outer casing material:",
            purchaserReq: "N/A",
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coriolis outer casing burst pressure:",
            purchaserReq: "input data",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "select",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.SelectSupComDropDown,
            supplierOfferedValUOM: "in",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Rupture disc burst pressure:",
            purchaserReq: "input data",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "select",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "N/A",
            supplierOfferedValColor: ColorLegendEnum.SelectSupComDropDown,
            supplierOfferedValUOM: "in",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Process secondary containment:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "select",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
