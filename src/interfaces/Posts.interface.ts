type Posts = {
    userId: number
    id: number
    body: string
    title: string
}

export interface IPosts {
    posts: Posts[]
}