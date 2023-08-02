import { TagDataReview } from "./TagDataReview"

export class TagData implements Components.Schemas.TagDataDto {
    id?: string // uuid
    projectId?: string // uuid
    tagNo?: string | null
    description?: string | null
    category?: string | null
    area?: string | null
    discipline?: string | null
    contract?: string | null
    contractName?: string | null
    tagStatus?: string | null
    engineeringCode?: string | null
    purchaseOrder?: string | null
    revisionNumber?: number // int32
    review?: TagDataReview

    constructor(init?: Partial<TagData>) {
        Object.assign(this, init)
    }
}
