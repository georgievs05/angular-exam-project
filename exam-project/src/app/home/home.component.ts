import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userService: UserService,private api:ApiService){

  }
  items: Theme[] | null=null


  ngOnInit(): void {

    this.api.getItems().subscribe(items =>{
     
      this.items = items.slice(0, 3);
    })

  }
  get isLoggedIn():boolean{
   return this.userService.isLogged
  }

}
