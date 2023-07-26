import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateTestingRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "Hydrostatic test of VS6/VS7 bowls and column:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.hydrostaticTestOfVS6VS7BowlsAndColumn,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.hydrostaticTestOfVS6VS7BowlsAndColumn,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Residual unbalance test method:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.residualUnbalanceTestMethod,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.residualUnbalanceTestMethod,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Cleanliness prior to final assembly:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.cleanlinessPriorToFinalAssembly,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.cleanlinessPriorToFinalAssembly,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Nozzle load test:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.nozzleLoadTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.nozzleLoadTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Structural resonance test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.structuralResonanceTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.structuralResonanceTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Driver to be used for testing:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.driverToBeUsedForTesting,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.driverToBeUsedForTesting,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Notification of successful shop performance test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.notificationOfSuccessfulShopPerformanceTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.notificationOfSuccessfulShopPerformanceTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Performance test NPSHA limited to 110 % site NPSHA:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.performanceTestNPSHALimitedTo110PercentSiteNPSHA,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.performanceTestNPSHALimitedTo110PercentSiteNPSHA,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Performance test at minimum submergence for vertical submerged pumps:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.perfomanceTestAtMinimumSubmergenceForVerticalSubmergedPumps,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.perfomanceTestAtMinimumSubmergenceForVerticalSubmergedPumps,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Vibration test measurement locations:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.vibrationTestMeasurementLocations,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.vibrationTestMeasurementLocations,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Retest after final head adjustment:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.retestAfterFinalHeadAdjustment,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.retestAfterFinalHeadAdjustment,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "NPSH test:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.npshTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.npshTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "NPSH test type:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.npshTestType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.npshTestType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "NPSH test specification:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.npshTestSpecification,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.npshTestSpecification,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Complete unit test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.completeUnitTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.completeUnitTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Duration of complete unit test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.durationOfCompleteUnitTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.durationOfCompleteUnitTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Sound level test:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.soundLevelTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.soundLevelTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Auxiliary equipment test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.auxilliaryEquipmentTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.auxilliaryEquipmentTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Auxiliary equipment included in test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.auxilliaryEquipmentIncludedInTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.auxilliaryEquipmentIncludedInTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Bearing housing resonance test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.bearingHousingResonanceTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.bearingHousingResonanceTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Disassembly after test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.disassemblyAfterTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.disassemblyAfterTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Hydrodynamic bearings removal and inspection after test:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.hydrodynamicBearingsRemovalAndInspectionAfterTest,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.hydrodynamicBearingsRemovalAndInspectionAfterTest,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
