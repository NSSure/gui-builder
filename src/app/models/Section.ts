export default class Section {
    id: number;
    name: string;
    description?: string;
    html: string;
    isCompressed: boolean;
    tagsJson: string;
    userAddedId: string;
    dateAdded: Date;
    dateUpdated: Date;
    tags: Array<string>
}