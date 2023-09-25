import React, {
    FC, useContext, useEffect, useState,
} from "react"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useCurrentUser, usePersonDetails } from "@equinor/fusion"
import { PersonCard } from "@equinor/fusion-components"
import MessageBox from "./MessageBox"
import { Message } from "../../../../Models/Message"
import { formatDate } from "../../../../utils/helpers"
import { ViewContext } from "../../../../Context/ViewContext"

const Container = styled.div<{ commentIsByCurrentUser: boolean }>`
    align-self: ${(props) => (props.commentIsByCurrentUser ? "flex-end" : "flex-start")};
    margin: 0 15px 15px 15px;
`

const Header = styled.div<{ isCurrentUser: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => (props.isCurrentUser ? "start" : "end")};
    opacity: 0.6;
`

const TimeStamp = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;

    p:first-of-type {
        margin-right: 5px;
    }
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
`

interface ClusteredMessagesProps {
}

const ClusteredMessages: FC<ClusteredMessagesProps> = () => {
    const { activeConversation } = useContext(ViewContext)

    const currentUser: any = useCurrentUser()
    // const person = usePersonDetails(currentUser?._info.localAccountId)
    const isCurrentUser = (userId: string) => currentUser?._info.localAccountId === userId
    type Cluster = {
        userId: string;
        meta: {
            commenterName: string | null | undefined;
            createdDate: string;
        };
        messages: {
            text: string | undefined;
            isEdited: boolean | undefined;
            id: string;
            softDeleted: boolean | undefined
            modifiedDate?: string;
        }[];
    };

    const generateMessageCluster = (postedComments: Message[]): Cluster[] => {
        const clusters: Cluster[] = []
        const strToDate = (dateString: string): Date => new Date(dateString)
        const diffInMinutes = (date1: Date, date2: Date): number => (date2.getTime() - date1.getTime()) / 1000 / 60

        postedComments.forEach((comment) => {
            if (!comment.userId || !comment.createdDate) return

            const { userId } = comment
            const createdDate = strToDate(comment.createdDate)

            if (clusters.length === 0
                || clusters[clusters.length - 1].userId !== userId
                || diffInMinutes(strToDate(clusters[clusters.length - 1].meta.createdDate), createdDate) > 5) {
                clusters.push({
                    userId,
                    meta: {
                        commenterName: comment.commenterName,
                        createdDate: comment.createdDate,
                    },
                    messages: [{
                        text: comment.text || undefined,
                        isEdited: comment.isEdited,
                        id: comment.id || "",
                        modifiedDate: comment.modifiedDate,
                        softDeleted: comment.softDeleted,
                    }],
                })
            } else {
                clusters[clusters.length - 1].messages.push({
                    text: comment.text || undefined,
                    isEdited: comment.isEdited,
                    id: comment.id || "",
                    modifiedDate: comment.modifiedDate,
                    softDeleted: comment.softDeleted,
                })
            }
        })

        return clusters
    }

    if (activeConversation?.messages === undefined || activeConversation?.messages === null) { return (<div />) }

    const renderPerson = (userId: string) => {
        const person = usePersonDetails(userId)
        return (
            <PersonCard
                key={person.personDetails?.azureUniqueId}
                personId={person.personDetails?.azureUniqueId}
                photoSize="small"
                isFetchingPerson={person.isFetching}
            />
        )
    }

    return (
        <>
            {generateMessageCluster(activeConversation.messages).map((cluster, index) => (
                <Container commentIsByCurrentUser={isCurrentUser(cluster.userId)} key={`${cluster.userId}-${index}`}>
                    <Header isCurrentUser={!isCurrentUser(cluster.userId)}>
                        {!isCurrentUser(cluster.userId) && (
                            renderPerson(cluster.userId)
                        )}
                        <TimeStamp>
                            <Typography variant="meta">{formatDate(cluster.meta.createdDate)}</Typography>
                        </TimeStamp>
                    </Header>
                    <SubContainer>
                        {cluster.messages.map((message, messageIndex) => (
                            <>
                                {message.isEdited && (
                                    <Typography variant="meta">
                                        Edited
                                        {" "}
                                        {formatDate(message.modifiedDate || "")}
                                    </Typography>
                                )}
                                <MessageBox
                                    key={`${cluster.userId}-${index}-${messageIndex}`}
                                    messageObject={message}
                                    userId={cluster.userId}
                                    isCurrentUser={isCurrentUser(cluster.userId)}
                                />
                            </>
                        ))}
                    </SubContainer>
                </Container>
            ))}
        </>
    )
}

export default ClusteredMessages