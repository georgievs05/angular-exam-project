import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message='';
  constructor(private userService: UserService, private router:Router){
  }

  login(form:NgForm){
    this.userService.apiError$.subscribe((err:any)=>{
      this.message = err?.message  || ''
    })
    
    if(form.invalid){
      return
    }

    const {email, password} = form.value
    this.userService.login(email, password).subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }

}
