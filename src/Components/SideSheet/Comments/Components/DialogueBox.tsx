import React, { FC, useState } from "react"
import styled from "styled-components"
import { Button, Icon } from "@equinor/eds-core-react"
import { delete_to_trash, edit } from "@equinor/eds-icons"
import { GetCommentService } from "../../../../api/CommentService"
import { ReviewComment } from "../../../../Models/ReviewComment"

const Container = styled.div`
    margin: 15px;
    padding: 10px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: #6a6a6a;
`
const Message = styled.div``

interface DialogueBoxProps {
    comment: ReviewComment
    formattedDate: string
}

const handleDelete = async (id: string | undefined) => {
    if (id !== undefined) {
        try {
            const service = await GetCommentService()
            await service.deleteComment(id)
        } catch (error) {
            console.log(`Error deleting comment: ${error}`)
        }
    }
}

const handleUpdateComment = async (newCommentText: string, comment: ReviewComment) => {
    if (newCommentText && comment.id) {
        try {
            const commentService = await GetCommentService()
            // Update the comment object with the edited text
            // eslint-disable-next-line no-param-reassign
            comment.text = newCommentText
            // Call the commentService.updateComment method with the updated comment object
            await commentService.updateComment(comment.id, comment)
            // eslint-disable-next-line no-param-reassign
            comment = await commentService.getComment(comment.id)
        } catch (error) {
            console.log(`Error updating comment: ${error}`)
        }
    }
}

const renderComment = (comment: ReviewComment, isUpdateMode: boolean, setUpdateMode: any) => {
    const [editedComment, setEditedComment] = useState(comment.text || "")

    const handleEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedComment(e.target.value)
    }

    const cancelEdit = () => {
        setUpdateMode(false)
    }

    const handleSave = () => {
        handleUpdateComment(editedComment, comment)
        cancelEdit()
    }

    if (isUpdateMode) {
        return (
            <div>
                <textarea
                    value={editedComment}
                    onChange={handleEdit}
                />
                <br />
                <Button variant="contained" onClick={handleSave}>Save</Button>
                <Button variant="contained" onClick={cancelEdit}>Cancel</Button>
            </div>
        )
    }
    return <p>{comment.text}</p>
}

const DialogueBox: FC<DialogueBoxProps> = ({ comment, formattedDate }) => {
    const [isUpdateMode, setUpdateMode] = useState(false)

    return (
        <Container key={comment.id}>
            <Header>
                <p>{comment.commenterName}</p>
                <p>{formattedDate}</p>
            </Header>
            <Message>
                {renderComment(comment, isUpdateMode, setUpdateMode)}
                <Button
                    variant="ghost_icon"
                    onClick={() => setUpdateMode((prevMode) => !prevMode)}
                    title="Edit comment"
                >
                    <Icon data={edit} size={16} color="#007079" />
                </Button>
                <Button variant="ghost_icon" onClick={(e: any) => handleDelete(comment.id)} title="Delete">
                    <Icon data={delete_to_trash} size={16} color="#007079" />
                </Button>
            </Message>

        </Container>
    )
}

export default DialogueBox
