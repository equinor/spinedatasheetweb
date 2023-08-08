import {
 Button, Dialog, Typography, Radio,
} from "@equinor/eds-core-react"
import React, {
    ChangeEvent,
 Dispatch, SetStateAction, useContext, useEffect, useState,
} from "react"
import styled from "styled-components"
import { TagData } from "../../Models/TagData"
import { TagDataReview } from "../../Models/TagDataReview"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"
import { GetRevisionReviewService } from "../../api/RevisionReviewService"
import { RevisionContainerReview } from "../../Models/RevisionContainerReview"
import { GetTagDataService } from "../../api/TagDataService"
import { ViewContext } from "../../Context/ViewContext"

const ReviewDialog = styled(Dialog)`
    min-width: 500px;
`

const ReviewPrompt = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e7e8;
    margin: 20px 0;
    padding: 0 10px 20px 10px;
`

const RadioUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const ReviewSubmition = styled(Dialog.Actions)`
    display: flex;
    justify-content: flex-end;
`

interface Props {
    tags?: TagData[],
    setReviewModalOpen?: Dispatch<SetStateAction<boolean>>,
    setTagInReview?: Dispatch<SetStateAction<string | undefined>>
    tagInReview: string | undefined,
    setRevisionInReview?: Dispatch<SetStateAction<string | undefined>>
    revisionInReview?: string | undefined,
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

function EquipmentListReview({
    tags,
    setReviewModalOpen,
    setTagInReview,
    tagInReview,
    setRevisionInReview,
    revisionInReview,
    isOpen,
    setIsOpen,
}: Props) {
    const { setActiveTagData } = useContext(ViewContext)
    const [tagReview, setTagReview] = useState<string | undefined>(undefined)
    const [packageReview, setPackageReview] = useState<string | undefined>(undefined)

    const onTagChange = (event: ChangeEvent<HTMLInputElement>) => setTagReview(event.target.value)
    const onPackageChange = (event: ChangeEvent<HTMLInputElement>) => setPackageReview(event.target.value)

    const updateTagData = async () => {
        if (!tagInReview) return
        const tagData = await (await GetTagDataService()).getTagData(tagInReview)
        setActiveTagData(tagData)
    }

    const buildTagReview = () => {
        const newReview = new TagDataReview()
        newReview.tagDataId = tagInReview
        return newReview
    }

    const buildPackageReview = () => {
        const newReview: RevisionContainerReview = {}
        newReview.revisionContainerId = revisionInReview
        return newReview
    }

    const approveTag = async () => {
        const review = buildTagReview()
        review.status = 3
        const result = await (await GetTagDataReviewService()).createTagDataReview(review)
        await updateTagData()
    }

    const rejectTag = async () => {
        const review = buildTagReview()
        review.status = 4
        const result = await (await GetTagDataReviewService()).createTagDataReview(review)
        await updateTagData()
    }

    const approvePackage = async () => {
        const review = buildPackageReview()
        review.status = 3
        const result = await (await GetRevisionReviewService()).createRevisionReview(review)
        await updateTagData()
    }

    const rejectPackage = async () => {
        const review = buildPackageReview()
        review.status = 4
        const result = await (await GetRevisionReviewService()).createRevisionReview(review)
        await updateTagData()
    }

    const handleSubmit = () => {
        if (tagReview === "approved") {
            approveTag()
        }
        if (tagReview === "rejected") {
            rejectTag()
        }
        if (packageReview === "approved") {
            approvePackage()
        }
        if (packageReview === "rejected") {
            rejectPackage()
        }
        setTagReview(undefined)
        setPackageReview(undefined)
        setIsOpen(false)
    }

    const handleClose = () => {
        setTagReview(undefined)
        setPackageReview(undefined)
        setIsOpen(false)
    }

    return (
        <ReviewDialog open={isOpen} isDismissable onClose={handleClose}>
            <Dialog.Header>
                <Dialog.Title>
                    Submit review
                </Dialog.Title>
            </Dialog.Header>
            <Dialog.Content>
                <ReviewPrompt>
                    <div>
                        <Typography variant="h6">
                            Tag review
                        </Typography>
                        <Typography variant="meta">
                            Tag id:
                            {" "}
                            {tagInReview}
                        </Typography>
                    </div>
                    <RadioUl>
                        <li>
                            <Radio
                                id="approvedTag"
                                label="Approve"
                                value="approvedTag"
                                name="ApproveTag"
                                onChange={onTagChange}
                                checked={tagReview === "approved"}
                            />
                        </li>
                        <li>
                            <Radio
                                id="rejectedTag"
                                label="Reject"
                                value="rejectedTag"
                                name="RejectTag"
                                onChange={onTagChange}
                                checked={tagReview === "rejected"}
                            />
                        </li>
                    </RadioUl>
                </ReviewPrompt>

                {revisionInReview
                && (
                <ReviewPrompt>
                    <div>
                        <Typography variant="h6">
                            Package review
                        </Typography>
                        <Typography variant="meta">
                            Package id
                            {" "}
                            {revisionInReview}
                        </Typography>
                    </div>

                    <RadioUl>
                        <li>
                            <Radio
                                id="approvedPackage"
                                label="Approve"
                                value="approved"
                                name="ApprovePackage"
                                onChange={onPackageChange}
                                checked={packageReview === "approved"}
                            />
                        </li>
                        <li>
                            <Radio
                                id="rejectedPackage"
                                label="Reject"
                                value="rejected"
                                name="RejectPackage"
                                onChange={onPackageChange}
                                checked={packageReview === "rejected"}
                            />
                        </li>
                    </RadioUl>
                </ReviewPrompt>
)}
                {
                /* revisionInReview && (
                <>
                    <Button onClick={approvePackage}>Approve</Button>
                    <Button color="danger" onClick={rejectPackage}>Reject</Button>
                    <Button onClick={approveTag}>Approve</Button>
                    <Button color="danger" onClick={rejectTag}>Reject</Button>
                </>
                ) */}
            </Dialog.Content>
            <ReviewSubmition>
                <Button variant="ghost" onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </ReviewSubmition>
        </ReviewDialog>
    )
}

export default EquipmentListReview
