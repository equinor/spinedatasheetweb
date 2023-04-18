import { generalRowData } from "../Components/JIP33Table/RowData/Electric/GeneralRowData"
import { Tabs, Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useState } from "react"
import JIP33Table from "../Components/JIP33Table/JIP33Table"
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

const WrapperTabs = styled.div`
    width: 100%;
    display: flex;
    float: left;
    flex-direction: column;
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs

const StyledTabPanel = styled(Panel)`
    padding-top: 0;
    border-top: 1px solid LightGray;
    flexWrap: "wrap"
`

function JIP33ElectricTabView({
}) {
    const [activeTab, setActiveTab] = useState(0)
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

    return (
        <>
            <WrapperTabs>
                <Typography variant="h3">
                    <BackButton />
                    JIP33 table
                </Typography>
                <Tabs activeTab={activeTab} onChange={setActiveTab} scrollable>
                    <List>
                        <Tab>Information</Tab>
                        <Tab>Purchaser information</Tab>
                        <Tab>General</Tab>
                        <Tab>Electrical operating conditions</Tab>
                        <Tab>Rating</Tab>
                        <Tab>ASD fed motor data</Tab>
                        <Tab>Site conditions / location environment</Tab>
                        <Tab>Starting performance</Tab>
                        <Tab>Operating performance</Tab>
                        <Tab>Noise</Tab>
                        <Tab>Motor construction</Tab>
                        <Tab>Fan</Tab>
                        <Tab>Main terminal box</Tab>
                        <Tab>Bearings</Tab>
                        <Tab>Space heaters</Tab>
                        <Tab>Mounting</Tab>
                        <Tab>Instrumentation</Tab>
                        <Tab>Surface protection</Tab>
                        <Tab>Motors for hazardous locations</Tab>
                        <Tab>Testing and inspection</Tab>
                        <Tab>Preservation and storage</Tab>
                        <Tab>Documentation</Tab>
                    </List>
                    <Panels>
                        <StyledTabPanel>
                            <JIP33Table rowData={informationRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={purchaserInformationRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={generalRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={electricalOperatingConditionsRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={ratingRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={aSDFedMotorDataRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={siteConditionsLocationEnvironmentRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={startingPerformanceRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={operatingPerformanceRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={noiseRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={motorConstructionRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={fanRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={mailTerminalBoxRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={bearingsRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={spaceHeatersRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={mountingRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={instrumentationRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={surfaceProtectionRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={motorsForHazardousLocationsRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={testingAndInspectionRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={preservationAndStorageRowData} />
                        </StyledTabPanel>
                        <StyledTabPanel>
                            <JIP33Table rowData={documentationRowData} />
                        </StyledTabPanel>
                    </Panels>
                </Tabs >
            </WrapperTabs >
        </>
    )
}

export default JIP33ElectricTabView
