import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Item } from './types/item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getThemes(){
  //   const {apiUrl} = environment

  //   return this.http.get<Theme[]>(`${apiUrl}/themes`)
  // }

  getItems(limit?:number) {
    const {apiUrl} = environment;

    let url = `${apiUrl}/items`

    if(limit){
      url+=`?limit=${limit}`
    }

    return this.http.get<Item[]>(url)
  }

  createItem(title:string, text:string, imageUrl:string, price:string){

    const {apiUrl} = environment
    const payload = {title,text,imageUrl,price}
   return this.http.post<Item>(`${apiUrl}/posts`, payload)
  }
}


