import { Avatar, Card, Progress, Typography } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { GetDatasheetService } from "../api/DatasheetService"
import TotalReviewStatus from "../Components/Charts/TotalReviewStatus"
import TotalTagRequirement from "../Components/Charts/TotalTagRequirement"
import EquipmentListTable from "../Components/EquipmentListTable"
import { Datasheet } from "../Models/Datasheet"

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    margin-right: 10px;
    margin-left: 10px;
    flex-direction: column;
    padding: 20px;
    background: red;
`

const WrapperRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background: blue;
    justify-content: space-between;
`

const WrapperProgressCard = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    background: green;
`

function EquipmentListView() {
    const [tags, setTags] = useState<Datasheet[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const { projectId } = useParams<Record<string, string | undefined>>()
    const [ currentProjectId, setCurrentProjectId ] = useState<String | undefined>(undefined)

    const currentProject = useCurrentContext()

    useEffect(() => {
        (async () => {
            setError(false)
            setIsLoading(false)
            if (currentProject !== null && currentProject.externalId !== null) {
                try {
                    setIsLoading(true)
                    if (currentProject.id != null) {
                        setCurrentProjectId(currentProject.externalId)
                    }
                    const datasheets: Datasheet[] = await (await GetDatasheetService())
                        .getDatasheetsForProject(currentProject.externalId)
                    setTags(datasheets)
                    console.log("Datasheets retrieved from server: ", datasheets)
                    setIsLoading(false)
                } catch {
                    console.error("Error loading tags")
                    setError(true)
                }
            }
        })()
    }, [currentProject, currentProjectId])

    if (currentProject === null || currentProjectId === null || currentProjectId === undefined) {
        return <div>No project selected</div>
    }

    if (error) {
        return <div>Error loading tags</div>
    }

    if (isLoading) {
        return (
            <>
                <Progress.Circular size={16} color="primary" />
                <div>Loading tags...</div>
            </>
        )
    }

    if (tags.length === 0) {
        return <div>No tags found for this project</div>
    }

    return (
        <>
            <WrapperRow>
                <TotalTagRequirement></TotalTagRequirement>
                <TotalReviewStatus></TotalReviewStatus>
                <WrapperProgressCard>
                    <Card variant="warning" style={{ marginTop: 20 }}>
                        <Card.Header>
                            <Card.HeaderTitle>
                                <Typography variant="overline">to be reviewed</Typography>
                                <Typography variant="h6">15 tags</Typography>
                            </Card.HeaderTitle>
                        </Card.Header>
                    </Card>
                    <Card variant="warning" style={{ marginTop: 20 }}>
                        <Card.Header>
                            <Card.HeaderTitle>
                                <Typography variant="overline">active reviews</Typography>
                                <Typography variant="h6">10 tags</Typography>
                            </Card.HeaderTitle>
                        </Card.Header>
                    </Card>
                    <Card variant="warning" style={{ marginTop: 20 }}>
                        <Card.Header>
                            <Card.HeaderTitle>
                                <Typography variant="overline">completed reviews</Typography>
                                <Typography variant="h6">3 tags</Typography>
                            </Card.HeaderTitle>
                        </Card.Header>
                    </Card>
                </WrapperProgressCard>
            </WrapperRow>
            <Wrapper>
                <Typography variant="h3">
                    Tag info
                </Typography>
                <EquipmentListTable tags={tags} />
            </Wrapper>
        </>
    )
}
export default EquipmentListView
