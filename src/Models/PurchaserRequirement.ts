export class PurchaserRequirement implements Components.Schemas.PurchaserRequirement {
    codeRequirement?: number; // int32
    conformityAssessmentSystemLevel?: number; // int32
    tagNumber?: string | null;
    serviceDescription?: string | null;
    equipmentManufacturerSerialNumber?: string | null;
    projectCountry?: string | null;
    projectRegion?: string | null;
    plantEnvironmentalLocation?: string | null;
    pidNumber?: string | null;
    lineOrEquipmentNumber?: string | null;
    minimumAmbientTemperature?: number; // int32
    maximumAmbientTemperature?: number; // int32
    baseConditions?: string | null;
    baseTemperature?: number; // int32
    basePressure?: number; // int32
    coatingDurability?: string | null;
    silRating?: string | null;
    ingressProtection?: string | null;
    exProtection?: string | null;
    hazardousAreaClassificationStandard?: string | null;
    explosionHazardClassification?: string | null;
    explosionGroup?: string | null;
    temperatureClass?: string | null;
    upstreamHighSidePipeSchedule?: string | null;
    upstreamHighSideLineSize?: string | null;
    upstreamHighSideLineEquipmentRating?: string | null;
    upstreamHighSideLineConnectionType?: string | null;
    upstreamHighSideConnectionOrientation?: string | null;
    upstreamHighSideMaterialType?: string | null;
    designPressureMaximum?: number; // int32
    designPressureMinimum?: number; // int32
    designTemperatureMaximum?: number; // int32
    designTemperatureMinimum?: number; // int32
    sourServiceSpecification?: string | null;
    processFluids?: string | null;
    processFluidState?: string | null;
    serviceDescription2?: string | null;
    processFluidCorrosiveCompounds?: string | null;
    processFluidErosionPossibility?: string | null;
    processFluidConductivity?: number; // int32
    processFluidSpecificHeatRatio?: number; // double
    processVacuumPossibility?: boolean;
    minimumOperatingVolumetricFlow?: number; // int32
    minimumOperatingVelocity?: number; // int32
    minimumOperatingTemperature?: number; // int32
    minimumOperatingPressure?: number; // int32
    normalOperatingVolumetricFlow?: number; // int32
    normalOperatingVelocity?: number; // int32
    normalOperatingTemperature?: number; // int32
    normalOperatingPressure?: number; // int32
    normalOperatingLiquidViscosity?: number; // int32
    maximumOperatingVolumetricFlow?: string | null; // int32
    maximumOperatingVelocity?: string | null; // int32
    maximumOperatingTemperature?: string | null; // int32
    maximumOperatingPressure?: string | null; // double
    maximumOperatingLiquidViscosity?: string | null; // double
    maximumRecoverablePressureDrop?: string | null; // double
    maximumUnrecoverablePressureLoss?: string | null; // double
    bodyMaterial?: string | null;
    transmitterMounting?: string | null;
    transmitterDisplay?: string | null;
    transmitterConnectingCableLength?: number; // double
    supplyVoltage?: string | null; // double
    externalPowerVoltage?: number; // double
    cableEntry?: string | null;
    cableTermination?: string | null;
    communicationProtocol?: string | null;
    protocolVersion?: string | null;
    failSafeDirection?: string | null;
    calibrationBespoke?: string | null;
    measurementRangeMinimum?: number; // double
    measurementRangeMaximum?: number; // double
    spanAndZeroAdjustment?: string | null;
    accuracy?: string | null; // double
    repeatability?: number; // double
    stepResponse?: number; // double
    longTermDrift?: number; // double
    longTermStability?: string | null; // double
    vibration?: string | null;
    weatherEnclosure?: string | null;
    electricalSurgeProtector?: string | null;
    sunshade?: string | null;
    
    constructor(init?: Partial<PurchaserRequirement>) {
        Object.assign(this, init);
    }
}