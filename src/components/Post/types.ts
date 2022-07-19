interface IAuthorProps {
  name: string
  avatarUrl: string
  role: string
}

interface IContentProps {
  type: string
  content: string
}

export interface IPostProps {
  id?: number
  author: IAuthorProps
  publishedAt: Date
  content: IContentProps[]
}
