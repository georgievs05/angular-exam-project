import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Item } from './types/item';
import { UserForAuth } from './types/user';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  USER_KEY = '[user]';


  getItems(){
    const {apiUrl} = environment
    return this.http.get<Theme[]>(`${apiUrl}/themes`)
  }

  getItem(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }
 
  createItem(title:string, text:string, image:string, price:string,currency:string){
    const payload = {title,text,image,price,currency}
    return this.http.post<Theme>(`/api/themes`, payload)
  }

 editItem(id:string, title:string, text:string, image:string, price:string,currency:string){
    const payload = {title,text,image,price,currency}

    return this.http.put<Theme>(`/api/themes/${id}/edit`, payload)
  }

  deleteItem(id:string){
    return this.http.delete<Theme>(`/api/themes/${id}/delete`)
  }

  getProfile() {
    return this.http
      .get<UserForAuth>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getItemsForLoggedInUser(userId:any): Observable<Theme[]> {
    return this.getItems().pipe(
      map(items => {
        const loggedInUserId = userId; 
      console.log(items)
        return items.filter(item=> item.userId._id  === loggedInUserId);
      })
    );
  }
  
}

