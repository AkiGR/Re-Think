type Folder = {
    id : number
    name : string
    notes : Note[]
};

type Note = {
    id : number
    folderId : number
    name : string
    body : string
};

export  type { Folder , Note }