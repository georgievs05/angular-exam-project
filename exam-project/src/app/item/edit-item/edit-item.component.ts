import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent{
  item = {} as Theme;
   
  profileDetails: ProfileDetails = {
    username: '',
    tel: '',
    email: '',
    _id:''
  };

  itemUserId:string=''
  

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService:UserService,
    private router:Router
  ) {}

  ngOnInit(): void {
    

    try {
      const { username, tel, email, _id } = this.userService.user!;
      this.profileDetails = {
        username,
        tel,
        email,
        _id
      };
  
      this.activeRoute.params.subscribe((data) => {
        const id = data['itemId'];
        console.log(id)
  
        this.apiService.getItem(id).subscribe((item) => {
          this.itemUserId = (item?.userId).toString();
          this.item = item;
          if(this.itemUserId!=_id || undefined){
            this.router.navigate(['/404'])
          }
        });
      });
    } catch (error) {
      this.router.navigate(['/404'])
    }

    
  }


  editItem(form: NgForm) {
    if (form.invalid) {
      console.log('invalid')
      return;
    }else{
      const {title,text,image,price,currency} = form.value;
      this.apiService.editItem(this.item._id.toString(),title,text,image,price,currency).subscribe({
        next: ()=> this.router.navigate(['/listings'])
      }
      )
      this.router.navigate(['/listings'])
    }

    
   
  }
}
