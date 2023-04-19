import { Datasheet } from "../../../Models/Datasheet"
import { ColorLegendEnum } from "../JIP33ColorLegendEnums"
import { TableRow } from "./TableRow"

export const generateBodyElementSensorRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Body/element/sensor manufacturer model number:",
            purchaserReq: "",
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
            purchaserReq: "",
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
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Flange material:",
            purchaserReq: "",
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
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
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
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
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
            purchaserReq: "",
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
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
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
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
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
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
