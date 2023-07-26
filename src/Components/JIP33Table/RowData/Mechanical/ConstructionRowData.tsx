import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateConstructionRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "API pump type:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.apiPumpType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.apiPumpType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Mounting:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.constructionMounting,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.constructionMounting,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Casing type:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.casingType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.casingType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Impeller type:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.impellerType,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.impellerType,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Rotation (viewed from coupling end):",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.rotationViewedFromCouplingEnd,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.rotationViewedFromCouplingEnd,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Component balance to ISO 21940-11, Grade G1.0:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.componentBalanceToISO2194011GradeG10,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.componentBalanceToISO2194011GradeG10,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Impeller number of vanes:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.impellerNumberOfVanes,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.impellerNumberOfVanes,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Suction size:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.suctionSize,
        purchaserReqUOM: "in",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.suctionSize,
        supplierOfferedValUOM: "in",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Suction facing:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.suctionFacing,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.suctionFacing,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Suction rating:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.suctionRating,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.suctionRating,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Suction position:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.suctionPosition,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.suctionPosition,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Discharge size:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.dischargeSize,
        purchaserReqUOM: "in",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.dischargeSize,
        supplierOfferedValUOM: "in",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Discharge facing:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.dischargeFacing,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.dischargeFacing,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Discharge rating:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.dischargeRating,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.dischargeRating,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Discharge position:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.dischargePosition,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.dischargePosition,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Nozzle loads:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.nozzleLoads,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.nozzleLoads,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Auxiliary process-liquid piping construction:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.auxilliaryProcessLiquidPipingConstruction,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.auxilliaryProcessLiquidPipingConstruction,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Connection design approval prior to fabrication:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.connectionDesignApprovalPriorToFabrication,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.connectionDesignApprovalPriorToFabrication,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Pressure casing drain size:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.pressureCasingDrainSize,
        purchaserReqUOM: "in",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.pressureCasingDrainSize,
        supplierOfferedValUOM: "in",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Pressure casing vent size:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.pressureCasingVentSize,
        purchaserReqUOM: "in",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.pressureCasingVentSize,
        supplierOfferedValUOM: "in",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Drain valve supplied by:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.drainValveSuppliedBy,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.drainValveSuppliedBy,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Vent valve supplied by:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.ventValveSuppliedBy,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.ventValveSuppliedBy,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Pump warm-up or cooldown line:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.pumpWarmUpOrCooldownLine,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.pumpWarmUpOrCooldownLine,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Machined and studded connections:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.machinedAndStuddedConnections,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.machinedAndStuddedConnections,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Pipe threads specification:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.pipeThreadsSpecification,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.pipeThreadsSpecification,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Case pressure rating maximum allowable working temperature:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.casePressureRatingMaximumAllowableWorkingTemperature,
        purchaserReqUOM: "°C",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.casePressureRatingMaximumAllowableWorkingTemperature,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Case pressure rating maximum allowable working pressure:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.casePressureRatingMaximumAllowableWorkingPressure,
        purchaserReqUOM: "bar g",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.casePressureRatingMaximumAllowableWorkingPressure,
        supplierOfferedValUOM: "bar g",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Bearing housing cooling method:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.bearingHousingCoolingMethod,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.bearingHousingCoolingMethod,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Cooling water piping plan:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.coolingWaterPipingPlan,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.coolingWaterPipingPlan,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Heat tracing and/or insulation:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.heatTracingAndOrInsulation,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.heatTracingAndOrInsulation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Purpose of insulation:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.purposeOfInsulation,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.purposeOfInsulation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Extent of heat tracing and insulation:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.extentOfHeatTracingAndInsulation,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.extentOfHeatTracingAndInsulation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Heat tracing and/or insulation supplied and installed by:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.heatTracingAndOrInsulationSuppliedAndInstalledBy,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.heatTracingAndOrInsulationSuppliedAndInstalledBy,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Heating tracing and/or insulation specification:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.heatingTracingAndOrInsulationSpecification,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.heatingTracingAndOrInsulationSpecification,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Total package estimated mass:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.totalPackageEstimatedMass,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.totalPackageEstimatedMass,
        supplierOfferedValUOM: "kg",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Shaft flexibility index reported by vendor:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.shaftFlexibilityIndexReportedByVendor,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.shaftFlexibilityIndexReportedByVendor,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Shaft flexibility index (OH2 pumps only):",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.shaftFlexibilityIndexOH2PumpsOnly,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.shaftFlexibilityIndexOH2PumpsOnly,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "OH3 back-pullout lifting device:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.oH3BackPulloutLiftingDevice,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.oH3BackPulloutLiftingDevice,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Shrink fit limited movement impellers:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.shrinkFitLimitedMovementImpellers,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.shrinkFitLimitedMovementImpellers,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
