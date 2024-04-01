
import { User } from './user'

export interface Item {
    likes:string[],
    _id: string,
    title:string,
    text: string,
    imageUrl:string,
    price:string,
    userId: User,
    created_at:string,
    updatedAt: string,
    __v: number,
}

