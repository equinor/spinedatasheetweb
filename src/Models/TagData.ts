export class TagData implements Components.Schemas.TagDataDto {
    id?: string; // uuid
    tagNo?: string | null;
    description?: string | null;
    category?: string | null;
    area?: string | null;
    discipline?: string | null;
    contract?: string | null;
    contractName?: string | null;
    tagStatus?: string | null;
    engineeringCode?: string | null;
    purchaseOrder?: string | null;
    sequence?: string | null;
    system?: string | null;
    tagType?: string | null;
    subTagType?: string | null;
    version?: number; // int32
    revisionContainer?: Components.Schemas.ContainerDto;
    createdDate?: string; // date-time
    modifiedDate?: string; // date-time

    constructor(init?: Partial<TagData>) {
        Object.assign(this, init)
    }
}
