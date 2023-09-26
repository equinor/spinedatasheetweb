import React, {
    FC, useState,
} from "react"
import styled from "styled-components"
import { PersonPhoto } from "@equinor/fusion-components"
import { Message } from "../../../../Models/Message"
import RenderComment from "./RenderComment"

const MainContainer = styled.div<{ commentIsByCurrentUser: boolean }>`
    display: flex;
    flex-direction: row;
    background-color: "white";
    align-self: ${(props) => (props.commentIsByCurrentUser ? "flex-end" : "flex-start")};
    align-items: center; /* Vertically center children */
`

const Container = styled.div`
    align-items: center; /* Vertically center its child */
`

const SubContainer = styled.div<{ commentIsByCurrentUser: boolean }>`
    border-radius: 5px;
    margin: 5px 0;
    padding: 10px;
    background-color: ${(props) => (props.commentIsByCurrentUser ? "#132634" : "white")};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    p, & p {
        color: ${(props) => (props.commentIsByCurrentUser ? "white" : "black")};
    }
`

interface MessageBoxProps {
    messageObject: Message
    photoIndex: string
    userId?: string
    isCurrentUser: boolean
}

const MessageBox: FC<MessageBoxProps> = ({
    messageObject,
    photoIndex,
    userId,
    isCurrentUser,
}) => {
    const [isUpdateMode, setUpdateMode] = useState(false)

    return (
        <MainContainer key={messageObject.id} commentIsByCurrentUser={isCurrentUser}>
            <Container>
                <PersonPhoto
                    personId={userId}
                    key={photoIndex}
                    size="large"
                />
            </Container>
            <SubContainer key={messageObject.id} commentIsByCurrentUser={isCurrentUser}>
                <div>
                    <RenderComment
                        comment={messageObject}
                        isUpdateMode={isUpdateMode}
                        setUpdateMode={setUpdateMode}
                        isCurrentUser={isCurrentUser}
                    />
                </div>
            </SubContainer>
        </MainContainer>
    )
}

export default MessageBox
