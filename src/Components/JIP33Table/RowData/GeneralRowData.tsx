import { Datasheet } from "../../../Models/Datasheet"
import { ColorLegendEnum } from "../JIP33ColorLegendEnums"
import { TableRow } from "./TableRow"

export const generateGeneralRowData = (datasheet: Datasheet): TableRow[] => {
    return [
        {
            refClause: "5.12,5.13,6.12",
            description: "Code requirement:",
            purchaserReq: datasheet.purchaserRequirement?.codeRequirement,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Conformity assessment system (CAS) level:",
            purchaserReq: datasheet.purchaserRequirement?.conformityAssessmentSystemLevel,
            purchaserReqUOM: "",
            supplierOfferedVal: "0",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.12.1",
            description: "Tag number:",
            purchaserReq: datasheet.tagNo,
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
            description: "Manufacturer:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.manufacturer,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Model number:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.modelNumber,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Equipment manufacturer serial number:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.equipmentManufacturerSerialNumber,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Project country:",
            purchaserReq: datasheet.purchaserRequirement?.projectCountry,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Project region:",
            purchaserReq: datasheet.purchaserRequirement?.projectRegion,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Plant environmental location:",
            purchaserReq: datasheet.purchaserRequirement?.plantEnvironmentalLocation,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "P&ID number:",
            purchaserReq: datasheet.purchaserRequirement?.pidNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Line or equipment number:",
            purchaserReq: datasheet.purchaserRequirement?.lineOrEquipmentNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Minimum ambient temperature:",
            purchaserReq: datasheet.purchaserRequirement?.minimumAmbientTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.minimumAmbientTemperature,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Maximum ambient temperature:",
            purchaserReq: datasheet.purchaserRequirement?.maximumAmbientTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.supplierOfferedProduct?.maximumAmbientTemperature,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Base conditions:",
            purchaserReq: datasheet.purchaserRequirement?.baseConditions,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Base temperature:",
            purchaserReq: datasheet.purchaserRequirement?.baseTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Base pressure:",
            purchaserReq: datasheet.purchaserRequirement?.basePressure,
            purchaserReqUOM: "barg",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
        },
        {
            refClause: "",
            description: "Coating durability:",
            purchaserReq: datasheet.purchaserRequirement?.coatingDurability,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.3,1.2.1",
            description: "Pressure retaining bolt material:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.SelectNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.pressureRetainingBoltMaterial,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.3,1.2.1",
            description: "Pressure retaining nut material:",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.SelectNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.pressureRetainingNutMaterial,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.1.4",
            description: "SIL rating:",
            purchaserReq: datasheet.purchaserRequirement?.silRating,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.silRating,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.1.6,6.2.1",
            description: "Ingress protection:",
            purchaserReq: datasheet.purchaserRequirement?.ingressProtection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.ingressProtection,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.3.3.1",
            description: "EX protection:",
            purchaserReq: datasheet.purchaserRequirement?.exProtection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.exProtection,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.3.3.1",
            description: "Hazardous area classification standard:",
            purchaserReq: datasheet.purchaserRequirement?.hazardousAreaClassificationStandard,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.hazardousAreaClassificationStandard,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.3.3.1",
            description: "Explorsion hazard classification:",
            purchaserReq: datasheet.purchaserRequirement?.explosionHazardClassification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.explosionHazardClassification,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.3.3.1",
            description: "Explosion group:",
            purchaserReq: datasheet.purchaserRequirement?.explosionGroup,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.explosionGroup,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
        {
            refClause: "4.3.3.1",
            description: "Temperature class:",
            purchaserReq: datasheet.purchaserRequirement?.temperatureClass,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.supplierOfferedProduct?.temperatureClass,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
        },
    ]
}
