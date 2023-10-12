import React, { useContext } from "react"
import styled from "styled-components"
import { Typography } from "@equinor/eds-core-react"
import SheetContainer from "./Components/SheetContainer"
import CommentsSideSheet from "./Comments/CommentSideSheet"
import ChangeLogSideSheet from "./ChangeLog/ChangeLogSideSheet"
import { ViewContext } from "../../Context/ViewContext"

const Placeholder = styled.div`
    height: 100%;
    width: 100%;
    `

type props = {
    onClose: () => void
    activeTagData: any
}

const TagSideSheet: React.FC<props> = ({
    activeTagData,
    onClose,
}) => {
    const { currentProperty } = useContext(ViewContext)
    const placeholder = (
        <Placeholder>
            <Typography variant="body_short">Work in progress...</Typography>
        </Placeholder>
    )
    return (
        currentProperty ? (
            <SheetContainer
                key={activeTagData?.tagNo}
                onClose={onClose}
                activeTagData={activeTagData}
                tabs={[
                { title: "Requirements", content: placeholder },
                { title: "Comments", content: <CommentsSideSheet currentProperty={currentProperty} /> },
                { title: "Changelog", content: <ChangeLogSideSheet /> },
            ]}
            />
        ) : null
    )
}

export default TagSideSheet