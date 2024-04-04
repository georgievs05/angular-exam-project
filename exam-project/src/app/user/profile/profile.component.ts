import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails } from 'src/app/types/user';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  items: Theme[] | null=null

  profileDetails: ProfileDetails = {
    username: '',
    tel: '',
    email: '',
    _id:''
  };
  constructor(private userService: UserService, private apiService: ApiService){
  }

  ngOnInit(): void {
    const { username, tel, email, _id } = this.userService.user!;

   
    this.profileDetails = {
      username,
      tel,
      email,
      _id
    };

    this.apiService.getItemsForLoggedInUser(_id).subscribe(items =>{
      
      this.items = items;
    })

  }
}
