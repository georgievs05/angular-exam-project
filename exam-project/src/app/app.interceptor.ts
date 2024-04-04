import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";
import { SmthWentWrongService } from "./smth-went-wrong/smth-went-wrong.service";
import { Router } from "@angular/router";
import { UserService } from "./user/user.service";

const {apiUrl} = environment

@Injectable()
export class AppInterceptor implements HttpInterceptor{


    constructor(private smthWentWrongService: SmthWentWrongService, private router: Router, private userService:UserService ){}



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
          
        if(req.url.startsWith('/api')){
            req = req.clone({
                url:req.url.replace('/api',apiUrl),
                withCredentials:true,
            });
        }

        return next.handle(req).pipe(
            catchError((err)=>{
               
                
                if(err.status === 401){
                    this.userService.setError(err) 
                }else{
                this.smthWentWrongService.setError(err);
                this.router.navigate(['/smthwentwrong'])
                }
               return[err];
            })
        )
    }
}


export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
};