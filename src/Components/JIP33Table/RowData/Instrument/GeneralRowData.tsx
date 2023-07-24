import { InstrumentTagData } from "../../../../Models/InstrumentTagData"
import { ColorLegendEnum } from "../../JIP33ColorLegendEnums"
import { TableRow } from "../TableRow"

export const generateGeneralRowData = (datasheet: InstrumentTagData): TableRow[] => {
    return [
        {
            refClause: "5.12,5.13,6.12",
            description: "Code requirement",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.codeRequirement,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "codeRequirement",
        },
        {
            refClause: "",
            description: "Conformity assessment system (CAS) level",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.conformityAssessmentSystemLevel,
            purchaserReqUOM: "",
            supplierOfferedVal: "0",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "conformityAssessmentSystemLevel",
        },
        {
            refClause: "4.12.1",
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
            description: "Manufacturer",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.manufacturer,
            supplierOfferedValColor: ColorLegendEnum.InputDataEitherPurOrSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "manufacturer",
        },
        {
            refClause: "",
            description: "Model number",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.modelNumber,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "modelNumber",
        },
        {
            refClause: "",
            description: "Equipment manufacturer serial number",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.InputDataNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.equipmentManufacturerSerialNumber,
            supplierOfferedValColor: ColorLegendEnum.InputDataSupCom,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "equipmentManufacturerSerialNumber",
        },
        {
            refClause: "",
            description: "Project country",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.projectCountry,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "projectCountry",
        },
        {
            refClause: "",
            description: "Project region",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.projectRegion,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "projectRegion",
        },
        {
            refClause: "",
            description: "Plant environmental location",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.plantEnvironmentalLocation,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "plantEnvironmentalLocation",
        },
        {
            refClause: "",
            description: "P&ID number",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.pidNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "pidNumber",
        },
        {
            refClause: "",
            description: "Line or equipment number",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.lineOrEquipmentNumber,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "lineOrEquipmentNumber",
        },
        {
            refClause: "",
            description: "Minimum ambient temperature",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.minimumAmbientTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.minimumAmbientTemperature,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
            property: "minimumAmbientTemperature",
        },
        {
            refClause: "",
            description: "Maximum ambient temperature",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumAmbientTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.maximumAmbientTemperature,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SpineModification,
            additionalNotes: "",
            property: "maximumAmbientTemperature",
        },
        {
            refClause: "",
            description: "Base conditions",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.baseConditions,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "baseConditions",
        },
        {
            refClause: "",
            description: "Base temperature",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.baseTemperature,
            purchaserReqUOM: "°C",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
            property: "baseTemperature",
        },
        {
            refClause: "",
            description: "Base pressure",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.basePressure,
            purchaserReqUOM: "barg",
            purchaserReqUOMColor: ColorLegendEnum.SelectUnitsOfDropDown,
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            supplierOfferedValUOMColor: ColorLegendEnum.SelectNoInputExp,
            additionalNotes: "",
            property: "basePressure",
        },
        {
            refClause: "",
            description: "Coating durability",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.coatingDurability,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "coatingDurability",
        },
        {
            refClause: "4.3,1.2.1",
            description: "Pressure retaining bolt material",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.SelectNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.pressureRetainingBoltMaterial,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "pressureRetainingBoltMaterial",
        },
        {
            refClause: "4.3,1.2.1",
            description: "Pressure retaining nut material",
            purchaserReq: "",
            purchaserReqColor: ColorLegendEnum.SelectNoInputExp,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.pressureRetainingNutMaterial,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "pressureRetainingNutMaterial",
        },
        {
            refClause: "4.1.4",
            description: "SIL rating",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.silRating,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.silRating,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "silRating",
        },
        {
            refClause: "4.1.6,6.2.1",
            description: "Ingress protection",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.ingressProtection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.ingressProtection,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "ingressProtection",
        },
        {
            refClause: "4.3.3.1",
            description: "EX protection",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.exProtection,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.exProtection,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "exProtection",
        },
        {
            refClause: "4.3.3.1",
            description: "Hazardous area classification standard",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.hazardousAreaClassificationStandard,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.hazardousAreaClassificationStandard,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "hazardousAreaClassificationStandard",
        },
        {
            refClause: "4.3.3.1",
            description: "Explorsion hazard classification",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.explosionHazardClassification,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.explosionHazardClassification,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "explosionHazardClassification",
        },
        {
            refClause: "4.3.3.1",
            description: "Explosion group",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.explosionGroup,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.explosionGroup,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "explosionGroup",
        },
        {
            refClause: "4.3.3.1",
            description: "Temperature class",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.temperatureClass,
            purchaserReqUOM: "",
            supplierOfferedVal: datasheet.instrumentSupplierOfferedProduct?.temperatureClass,
            supplierOfferedValColor: ColorLegendEnum.SpineModification,
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "temperatureClass",
        },
    ]
}
