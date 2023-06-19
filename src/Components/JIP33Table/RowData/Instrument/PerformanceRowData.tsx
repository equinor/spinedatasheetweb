import { InstrumentTagData } from "../../../../Models/InstrumentTagData"
import { TagData } from "../../../../Models/TagData"
import { ColorLegendEnum } from "../../JIP33ColorLegendEnums"
import { TableRow } from "../TableRow"

export const generatePerformanceRowData = (datasheet: InstrumentTagData): TableRow[] => {
    return [
        {
            refClause: "7.1.5, 8.1.4, Table 11, Table 15",
            description: "Accuracy:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.accuracy,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "% of span",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.accuracy,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "% of span",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Repeatability:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.repeatability,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.repeatability,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Step response:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.stepResponse,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "ms",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.stepResponse,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "ms",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Long term drift:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.longTermDrift,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.longTermDrift,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Long term stability:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.longTermStability,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.longTermStability,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Vibration:",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.vibration,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.vibration,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
