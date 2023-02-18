type Folder = {
    id : number
    name : string
    notes : Note[]
};

type Note = {
    folderId : number
    name : string
    body : string
};

export type { Folder , Note }