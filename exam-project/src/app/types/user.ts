export interface User{
    posts: string[];
    _id: string;
    tel: string;
    email: string;
    username:string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
}

export interface UserForAuth{
    firstName:string;
    email:string;
    password:string;
    id:string
}