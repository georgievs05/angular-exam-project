import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isAuthing = true;

  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next:()=>{
        this.isAuthing = false
      },
      error:()=>{
        this.isAuthing = false
      },
      complete:()=>{
        this.isAuthing = false
      }
    })
  }

}
