import { User } from "./user";

export interface Theme{
    
        subscribers: string[],
        posts: string[],
        _id: string,
        title: string,
        text:string,
        image:string,
        price:string,
        currency:string,
        phoneNumber:string,
        userId: User,
        created_at:string,
        updatedAt:string,
        __v: number;
    
}

export interface itemDetails{
        title:string ;
        text:string;
        image:string;
        price:string;
        currency:string
 }