import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {
  item = {} as Theme;
   
  userId:string=''
  itemUserId:string=''
  

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService:UserService,
    private router:Router
  ) {}

  ngOnInit(): void {
    

    try {
      const {_id } = this.userService.user!;
      this.userId = _id;
  
      this.activeRoute.params.subscribe((data) => {
        const id = data['itemId'];
        
  
        this.apiService.getItem(id).subscribe((item) => {
          this.itemUserId = (item?.userId).toString();
          this.item = item;
        });
      });
    } catch (error) {
      this.router.navigate(['/404'])
    }

    
  }


 deleteItem(form: NgForm) {
    if (form.invalid) {
      console.log('invalid')
      return;
    }else{
      this.apiService.deleteItem(this.item._id.toString()).subscribe({
        next: ()=> this.router.navigate(['/listings'])
      }
      )
      
    }

    
   
  }
}
