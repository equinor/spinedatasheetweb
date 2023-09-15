import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react"
import { useCurrentUser } from "@equinor/fusion"
import styled from "styled-components"
import { GetCommentService } from "../../../../api/CommentService"
import { ReviewComment } from "../../../../Models/ReviewComment"
import InputController from "./InputController"
import { ViewContext } from "../../../../Context/ViewContext"
import ClusteredMessages from "./ClusteredMessages"
import TagDropDown from "./TagDropDown"
import { processMessageInput } from "../../../../utils/helpers"

const Controls = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;

`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const Conversation = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
`

type CommentViewProps = {
    currentProperty: string
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
}

const CommentView: React.FC<CommentViewProps> = ({
    currentProperty,
    reviewComments,
    setReviewComments,
}) => {
    const [newReviewComment, setNewReviewComment] = useState<ReviewComment>()
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [showTagDropDown, setShowTagDropDown] = useState<boolean>(false)
    const [taggedUsers, setTaggedUsers] = useState<string[]>([])
    const { activeTagData } = useContext(ViewContext)
    const currentUser: any = useCurrentUser()

        const dummyData = [
        {
            id: "1",
            displayName: "Henrik Hansen",
            accountType: "Consultant",
            status: "Active",
        },
        {
            id: "2",
            displayName: "Peter Jensen",
            accountType: "Consultant",
            status: "Active",
        },
        {
            id: "3",
            displayName: "Jesper Gudbransen",
            accountType: "Consultant",
            status: "inactive",
        },
        {
            id: "4",
            displayName: "Mikkel Eriksen",
            accountType: "Consultant",
            status: "inactive",
        },
    ]

    const getCommentsForProperty = (property: string) => (
        reviewComments.filter((comment) => comment.property === property)
    )

    const handleTagSelected = (displayName: string, userId: string) => {
        const commentText = newReviewComment?.text || ""
        const lastAtPos = commentText.lastIndexOf("@")
        const beforeAt = commentText.substring(0, lastAtPos)
        const afterAt = commentText.substring(lastAtPos + 1).replace(/^\S+/, "") // Removes the word right after the "@"

        const newCommentText = `${beforeAt}<span data-mention="${userId}" contenteditable="false">${displayName}</span>&nbsp;${afterAt}`
        setNewReviewComment({ ...newReviewComment, text: newCommentText })
        setShowTagDropDown(false)
        setSearchTerm("")
    }

    const handleSubmit = async () => {
        const { processedString, mentions } = processMessageInput(newReviewComment?.text || "")

        console.log("these people were mentioned: ", mentions)
        const comment = { ...newReviewComment, text: processedString }
        console.log("Comment: ", comment)
        comment.tagDataReviewId = activeTagData?.review?.id
        comment.commentLevel = 0
        comment.property = currentProperty
        comment.createdDate = new Date().toISOString()
        comment.userId = currentUser?._info.localAccountId
        comment.commenterName = currentUser?._info.name
        try {
            const service = await GetCommentService()
            const savedComment = await service.createComment(comment)
            setReviewComments([...reviewComments, savedComment])
            setSearchTerm("")
            setNewReviewComment(undefined)
            setTaggedUsers([])
        } catch (error) {
            console.log(`Error creating comment: ${error}`)
        }
        setNewReviewComment(undefined)
    }

    useEffect(() => {
        console.log("Tagged users: ", taggedUsers)
    }, [taggedUsers])

    useEffect(() => {
        console.log("New review comment: ", newReviewComment)
    }, [newReviewComment])

    return (
        <Container>
            <Conversation>
                <ClusteredMessages
                    comments={getCommentsForProperty(currentProperty)}
                    reviewComments={reviewComments}
                    setReviewComments={setReviewComments}
                />
            </Conversation>
            <Controls>
                { showTagDropDown
                && (
                <TagDropDown
                    SearchTerm={searchTerm}
                    setTaggedUsers={setTaggedUsers}
                    onTagSelected={handleTagSelected}
                    dummyData={dummyData}
                />
                ) }

                <InputController
                    handleSubmit={handleSubmit}
                    setSearchTerm={setSearchTerm}
                    setShowTagDropDown={setShowTagDropDown}
                    newReviewComment={newReviewComment}
                    setNewReviewComment={setNewReviewComment}
                    taggedUsers={taggedUsers}
                />
            </Controls>
        </Container>
    )
}

export default CommentView
