import { Datasheet } from "../../../../Models/Datasheet"
import { ColorLegendEnum } from "../../JIP33ColorLegendEnums"
import { TableRow } from "../TableRow"

export const generateOperatingConditionsRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Process fluid(s):",
            purchaserReq: datasheet.purchaserRequirement?.processFluids,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Process fluid state:",
            purchaserReq: datasheet.purchaserRequirement?.processFluidState,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Service description:",
            purchaserReq: datasheet.purchaserRequirement?.serviceDescription,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Process fluid corrosive compounds:",
            purchaserReq: datasheet.purchaserRequirement?.processFluidCorrosiveCompounds,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Process fluid erosion possibility:",
            purchaserReq: datasheet.purchaserRequirement?.processFluidErosionPossibility,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Process fluid specific heat ration Cp/Cv:",
            purchaserReq: datasheet.purchaserRequirement?.processFluidSpecificHeatRatio,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Process vacuum possibility:",
            purchaserReq: datasheet.purchaserRequirement?.processVacuumPossibility,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Process fluid vapour pressure:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating mass flow:",
            purchaserReq: "N/A",
            purchaserReqUOM: "kg/h",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating velocity:",
            purchaserReq: datasheet.purchaserRequirement?.minimumOperatingVelocity,
            purchaserReqUOM: "m/s",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "m/s",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.minimumOperatingTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.minimumOperatingPressure,
            purchaserReqUOM: "bara",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating liquid specific gravity:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating liquid viscosity:",
            purchaserReq: "N/A",
            purchaserReqUOM: "cP",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating vapour molecular weight:",
            purchaserReq: "N/A",
            purchaserReqUOM: "g/mol",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "g/mol",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating vapour compressibility factor:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating vapour actual density:",
            purchaserReq: "N/A",
            purchaserReqUOM: "kg/m³",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "kg/m2",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum operating vapour viscosity:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating mass flow:",
            purchaserReq: "N/A",
            purchaserReqUOM: "kg/h",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating velocity:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingVelocity,
            purchaserReqUOM: "m/s",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "m/s",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingPressure,
            purchaserReqUOM: "bara",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating liquid specific gravity:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating liquid viscosity:",
            purchaserReq: datasheet.purchaserRequirement?.normalOperatingLiquidViscosity,
            purchaserReqUOM: "cP",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating vapour molecular weight:",
            purchaserReq: "N/A",
            purchaserReqUOM: "g/mol",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "g/mol",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating vapour compressibility factor:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating vapour actual density:",
            purchaserReq: "N/A",
            purchaserReqUOM: "kg/m³",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "kg/m2",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Normal operating vapour viscosity:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating mass flow:",
            purchaserReq: "N/A",
            purchaserReqUOM: "kg/h",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating velocity:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingVelocity,
            purchaserReqUOM: "m/s",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "m/s",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating temperature:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating pressure:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingPressure,
            purchaserReqUOM: "bara",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating liquid specific gravity:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating liquid viscosity:",
            purchaserReq: datasheet.purchaserRequirement?.maximumOperatingLiquidViscosity,
            purchaserReqUOM: "cP",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating vapour molecular weight:",
            purchaserReq: "N/A",
            purchaserReqUOM: "g/mol",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "g/mol",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating vapour compressibility factor:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating vapour actual density:",
            purchaserReq: "N/A",
            purchaserReqUOM: "kg/m³",
            purchaserReqUOMColor: ColorLegendEnum.SelectNoInputExp,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "kg/m2",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum operating vapour viscosity:",
            purchaserReq: "N/A",
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum recoverable pressure drop:",
            purchaserReq: datasheet.purchaserRequirement?.maximumRecoverablePressureDrop,
            purchaserReqUOM: "",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum unrecoverable pressure loss:",
            purchaserReq: datasheet.purchaserRequirement?.maximumUnrecoverablePressureLoss,
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "bar",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.maximumUnrecoverablePressureLoss,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "bar",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            additionalNotes: "",
        },
    ]
}
