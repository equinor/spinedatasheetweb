import React, {
    Dispatch, FC, SetStateAction, useContext, useRef, useState,
} from "react"
import { styled } from "styled-components"
import {
    Button, Icon, Input, Popover, Typography,
} from "@equinor/eds-core-react"
import {
    delete_to_trash, edit,
} from "@equinor/eds-icons"
import { Message } from "../../../../Models/Message"
import { GetCommentService } from "../../../../api/CommentService"
import { Conversation } from "../../../../Models/Conversation"
import { ViewContext } from "../../../../Context/ViewContext"

const CommentText = styled(Typography)`
    margin: 10px 0;
`

const SubmitEditButton = styled(Button)`
    margin-right: 15px;
`

interface RenderCommentProps {
    comment: Message,
    isUpdateMode: boolean,
    setUpdateMode: any,
    isCurrentUser: boolean,
}

const updateComment = async (
    reviewId: string,
    activeConversationId: string,
    comment: Message,
    newCommentText: string,
    conversations: Conversation[],
    setConversations: Dispatch<SetStateAction<Conversation[]>>,
) => {
    if (newCommentText && comment.id) {
        try {
            const newComment = { ...comment }
            newComment.text = newCommentText
            const commentService = await GetCommentService()
            const updatedComment = await commentService.updateMessage(reviewId, activeConversationId, comment.id, newComment)
            // const newReviewComments = reviewComments.map((c) => (c.id !== comment.id ? c : updatedComment))
            // setReviewComments(newReviewComments)
        } catch (error) {
            console.error(`Error updating comment: ${error}`)
        }
    }
}

const deleteComment = async (
    reviewId: string,
    activeConversationId: string,
    comment: Message,
    conversations: Conversation[],
    setConversations: Dispatch<SetStateAction<Conversation[]>>,
) => {
    if (comment.id) {
        try {
            const service = await GetCommentService()
            const response = await service.deleteMessage(reviewId, activeConversationId, comment.id)
            // if (response === 204) {
            //     const deletedComment = { ...reviewComments.find((c) => c.id === comment.id) }
            //     deletedComment.softDeleted = true
            //     const newReviewComments = reviewComments.map((c) => (c.id !== comment.id ? c : deletedComment))
            //     setReviewComments(newReviewComments)
            // } else {
            //     throw new Error(`delete failed with status code '${response}'`)
            // }
        } catch (error) {
            console.error(`Error deleting comment: ${error}`)
        }
    }
}

const RenderComment: FC<RenderCommentProps> = ({
    comment,
    isUpdateMode,
    setUpdateMode,
    isCurrentUser,
}) => {
    const [editedMessageText, setEditedMessageText] = useState(comment.text || "")
    const [open, setOpen] = useState(false)

    const {
        activeTagData, conversations, activeConversation, setConversations,
    } = useContext(ViewContext)

    const editComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => setEditedMessageText(e.target.value)
    const cancelEdit = () => setUpdateMode(false)
    const saveComment = () => {
        updateComment(activeTagData?.review?.id ?? "", activeConversation?.id ?? "", comment, editedMessageText, conversations, setConversations)
        cancelEdit()
    }

    const anchorRef = useRef<HTMLParagraphElement>(null)

    let timer: ReturnType<typeof setTimeout> | null = null
    const openPopover = () => setOpen(true)
    const closePopover = () => setOpen(false)
    const handleHover = () => {
        if (timer) {
            clearTimeout(timer)
        }
        if (!isCurrentUser || comment.softDeleted) {
            return
        }
        timer = setTimeout(() => {
            openPopover()
        }, 100)
    }

    const handleClose = () => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            closePopover()
        }, 100)
    }

    if (isUpdateMode) {
        return (
            <div>
                <Input
                    as="textarea"
                    type="text"
                    value={editedMessageText}
                    onChange={editComment}
                />
                <SubmitEditButton variant="ghost" onClick={cancelEdit}>Cancel</SubmitEditButton>
                <SubmitEditButton variant="contained" onClick={saveComment}>Save</SubmitEditButton>
            </div>
        )
    }
    return (
        <div>
            <CommentText
                aria-expanded={open}
                ref={anchorRef}
                onMouseOver={handleHover}
                onFocus={handleHover}
                onBlur={handleClose}
                onMouseOut={handleClose}
            >
                {
                    comment.softDeleted ? "Message deleted by user" : comment.text
                }
            </CommentText>
            <Popover
                anchorEl={anchorRef.current}
                onClose={handleClose}
                open={open}
                placement="top"
                withinPortal
                onMouseOver={handleHover}
                onMouseLeave={handleClose}
            >
                <Popover.Header>
                    <Button
                        variant="ghost_icon"
                        onClick={() => setUpdateMode((prevMode: boolean) => !prevMode)}
                        title="Edit comment"
                    >
                        <Icon data={edit} size={16} color="#007079" />
                    </Button>
                    <Button
                        variant="ghost_icon"
                        onClick={() => deleteComment(activeTagData?.review?.id ?? "", activeConversation?.id ?? "", comment, conversations, setConversations)}
                        title="Delete"
                    >
                        <Icon data={delete_to_trash} size={16} color="#007079" />
                    </Button>
                </Popover.Header>
            </Popover>
        </div>
    )
}

export default RenderComment