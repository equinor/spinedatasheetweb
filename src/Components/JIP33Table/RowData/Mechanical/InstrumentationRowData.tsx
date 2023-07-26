import { MechanicalTagData } from "../../../../Models/MechanicalTagData"
import { TableRow } from "../TableRow"

export const generateInstrumentationRowData = (
    datasheet: MechanicalTagData,
): TableRow[] => [
    {
        refClause: "",
        description: "Accelerometers:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.accelerometers,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.accelerometers,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Number of accelerometers:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.numberOfAccelerometers,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.numberOfAccelerometers,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Accelerometers mounting location:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.accelerometersMountingLocation,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.accelerometersMountingLocation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Threaded provision for mounting accelerometers only:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.threadedProvisionForMountingAccelerometersOnly,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.threadedProvisionForMountingAccelerometersOnly,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Flat surface provision for mounting accelerometers only:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.flatSurfaceProvisionForMountingAccelerometersOnly,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.flatSurfaceProvisionForMountingAccelerometersOnly,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Vibration probes:",
        purchaserReq: datasheet.mechanicalPurchaserRequirement?.vibrationProbes,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.vibrationProbes,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Number of vibration probes per radial bearing:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.numberOfVibrationProbesPerRadialBearing,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.numberOfVibrationProbesPerRadialBearing,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Vibration probes mounting location:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.vibrationProbesMountingLocation,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.vibrationProbesMountingLocation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Threaded provision for mounting vibration probe only:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.threadedProvisionForMountingVibrationProbesOnly,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.threadedProvisionForMountingVibrationProbesOnly,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description:
            "Flat surface provision for mounting vibration probes only:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.flatSurfaceProvisionForMountingVibrationProbesOnly,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.flatSurfaceProvisionForMountingVibrationProbesOnly,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "One-event-per-revolution probe (key phasor):",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.oneEventPerRevolutionProbeKeyPhasor,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.oneEventPerRevolutionProbeKeyPhasor,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Temperature probes:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement?.temperatureProbes,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct?.temperatureProbes,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Number of temperature probes per radial bearing:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.numberOfTemperatureProbesPerRadialBearing,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.numberOfTemperatureProbesPerRadialBearing,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Temperature probes mounting location:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.temperatureProbesMountingLOcation,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.temperatureProbesMountingLOcation,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Provision for mounting temperature probes only:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.provisionForMountingTemperatureProbesOnly,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.provisionForMountingTemperatureProbesOnly,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Temperature gauges (with thermowells):",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.temperatureGaugesWithThermowells,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.temperatureGaugesWithThermowells,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
    {
        refClause: "",
        description: "Monitors and cables supplied by:",
        purchaserReq:
            datasheet.mechanicalPurchaserRequirement
                ?.monitorsAndCablesSuppliedBy,
        purchaserReqUOM: "",
        supplierOfferedVal:
            datasheet.mechanicalSupplierOfferedProduct
                ?.monitorsAndCablesSuppliedBy,
        supplierOfferedValUOM: "",
        additionalNotes: "",
    },
]
