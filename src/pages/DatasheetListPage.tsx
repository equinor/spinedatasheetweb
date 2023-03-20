import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import DatasheetListTable from "../Components/DatasheetList/DatasheetListTable"
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    float: left;
    flex-direction: column;
    padding: 20px;
`
function DatasheetListPage({
}) {
    return (
        <>
            <Wrapper>
                <Typography variant="h3">Datasheet list</Typography>
                <DatasheetListTable />
            </Wrapper >
        </>
    )
}
export default DatasheetListPage