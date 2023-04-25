import { generalRowData } from "../Components/JIP33Table/RowData/Electric/GeneralRowData"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useState } from "react"
import { BackButton } from "../Components/BackButton"
import { useParams } from "react-router-dom"
import { Datasheet } from "../Models/Datasheet"
import { purchaserInformationRowData } from "../Components/JIP33Table/RowData/Electric/PurchaserInformationRowData"
import { electricalOperatingConditionsRowData } from "../Components/JIP33Table/RowData/Electric/ElectricalOperatingConditionsRowData"
import { ratingRowData } from "../Components/JIP33Table/RowData/Electric/RatingRowData"
import { aSDFedMotorDataRowData } from "../Components/JIP33Table/RowData/Electric/ASDFedMotorDataRowData"
import { siteConditionsLocationEnvironmentRowData } from "../Components/JIP33Table/RowData/Electric/SiteConditionsLocationEnvironmentRowData"
import { startingPerformanceRowData } from "../Components/JIP33Table/RowData/Electric/StartingPerformanceRowData"
import { operatingPerformanceRowData } from "../Components/JIP33Table/RowData/Electric/OperatingPerformanceRowData"
import { noiseRowData } from "../Components/JIP33Table/RowData/Electric/NoiseRowData"
import { motorConstructionRowData } from "../Components/JIP33Table/RowData/Electric/MotorConstructionRowData"
import { fanRowData } from "../Components/JIP33Table/RowData/Electric/FanRowData"
import { mailTerminalBoxRowData } from "../Components/JIP33Table/RowData/Electric/MainTerminalBoxRowData"
import { bearingsRowData } from "../Components/JIP33Table/RowData/Electric/BearingsRowData"
import { spaceHeatersRowData } from "../Components/JIP33Table/RowData/Electric/SpaceHeatersRowData"
import { mountingRowData } from "../Components/JIP33Table/RowData/Electric/MountingRowData"
import { instrumentationRowData } from "../Components/JIP33Table/RowData/Electric/InstrumentationRowData"
import { surfaceProtectionRowData } from "../Components/JIP33Table/RowData/Electric/SurfaceProtectionRowData"
import { motorsForHazardousLocationsRowData } from "../Components/JIP33Table/RowData/Electric/MotorsForHazardousLocationsRowData"
import { testingAndInspectionRowData } from "../Components/JIP33Table/RowData/Electric/TestingAndInspectionRowData"
import { preservationAndStorageRowData } from "../Components/JIP33Table/RowData/Electric/PreservationAndStorageRowData"
import { documentationRowData } from "../Components/JIP33Table/RowData/Electric/DocumentationRowData"
import { informationRowData } from "../Components/JIP33Table/RowData/Electric/InformationRowData"
import SideMenu from "../Components/SideMenu"

const TopBar = styled.div`
    padding-top: 0;
    border-bottom: 1px solid LightGray;
    z-index: 100;
    padding-top: 20px;
`

const Body = styled.div`
    height: 92%;
`

function JIP33ElectricTabView({
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [tag, setTag] = useState<Datasheet>()

    const { tagId } = useParams<Record<string, string | undefined>>()

    // useEffect(() => {
    //     (async () => {
    //         setError(false)
    //         setIsLoading(false)
    //         if (tagId !== null && tagId !== undefined) {
    //             try {
    //                 setIsLoading(true)
    //                 const datasheets: Datasheet = await (await GetDatasheetService())
    //                     .getDatasheet(tagId)
    //                 setTag(datasheets)
    //                 setIsLoading(false)
    //             } catch {
    //                 console.error("Error loading tags")
    //                 setError(true)
    //             }
    //         }
    //     })()
    // }, [])


    // if (error) {
    //     return <div>Error loading tag</div>
    // }

    // if (isLoading) {
    //     return <div>Loading tag...</div>
    // }

    // if (tag === undefined) {
    //     return <div>No tag selected</div>
    // }

    const sideMenuList = [
        "Information", "Purchaser information", "General",
        "Electrical operating conditions", "Rating", "ASD fed motor data",
        "Site conditions / location environment", "Starting performance",
        "Operating performance", "Noise", "Motor construction", "Fan",
        "Main terminal box", "Bearings", "Space heaters", "Mounting",
        "Instrumentation", "Surface protection", "Motors for hazardous locations",
        "Testing and inspection", "Preservation and storage", "Documentation"
    ]

    const rowDataList = [
        informationRowData, purchaserInformationRowData, generalRowData,
        electricalOperatingConditionsRowData, ratingRowData, aSDFedMotorDataRowData,
        siteConditionsLocationEnvironmentRowData, startingPerformanceRowData,
        operatingPerformanceRowData, noiseRowData, motorConstructionRowData, fanRowData,
        mailTerminalBoxRowData, bearingsRowData, spaceHeatersRowData, mountingRowData,
        instrumentationRowData, surfaceProtectionRowData, motorsForHazardousLocationsRowData,
        testingAndInspectionRowData, preservationAndStorageRowData, documentationRowData
    ]

    return (
        <Body>
            <TopBar>
                <Typography variant="h3">
                    <BackButton />
                    JIP33 table
                </Typography>
            </TopBar>
            <SideMenu sideMenuList={sideMenuList} rowDataList={rowDataList} />
        </Body>
    )
}

export default JIP33ElectricTabView
