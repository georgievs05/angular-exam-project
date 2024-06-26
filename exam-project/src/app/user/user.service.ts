import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$  = new BehaviorSubject<UserForAuth |undefined>(undefined)
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  USER_KEY = '[user]'

  userSubscription:Subscription;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor(private http: HttpClient) { 
    this.userSubscription = this.user$.subscribe(user=>{
      this.user = user
    })
  }

  login(email:string, password:string){
   return this.http.post<UserForAuth>('/api/login', {email, password}).pipe(
    tap((user) =>{
    this.user$$.next(user)
    })
  
    )
  }


  logout(){
   return this.http.post('/api/logout',{}).pipe(
    tap((user) =>{
    this.user$$.next(undefined)
    }))
  }

  register(username:string, email:string, tel:string, password:string,  rePassword:string){
    return this.http.post<UserForAuth>('/api/register', {username,email, tel, password,rePassword}).pipe(
      tap((user) =>{
      this.user$$.next(user)
      }))

  }


  getProfile(){
    return this.http.get<UserForAuth>('/api/users/profile').pipe(tap((user) => this.user$$.next(user)))
  }
  
  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<UserForAuth>('/api/users/profile', {
        username,
        email,
        tel,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }
  private apiError$$ = new BehaviorSubject(null)
  public apiError$ = this.apiError$$.asObservable()
  setError(error : any):void{
   this.apiError$$.next(error)
  }
  
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }




  


}
