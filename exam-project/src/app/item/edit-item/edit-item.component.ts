import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme, itemDetails } from 'src/app/types/theme';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit{
  item = {} as Theme;
   
  profileDetails: ProfileDetails = {
    username: '',
    tel: '',
    email: '',
    _id:'',
  

  };

  itemDetails: itemDetails = {
    title:'',
    text:'',
    image:'',
    price:'',
    currency:''
  }

  itemUserId:string=''

  form = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required]],
    currency: ['', [Validators.required]],
  });

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService:UserService,
    private router:Router,
    private fb: FormBuilder
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
        
  
        this.apiService.getItem(id).subscribe((item) => {
          this.itemUserId = (item?.userId).toString();
          this.item = item;
          if(this.itemUserId!=_id || undefined){
            this.router.navigate(['/404'])
          }

          const {title,text,image,price,currency} = this.item

          this.itemDetails = {
            title,
            text,
            image,
            price,
            currency
          };
      
          this.form.setValue({
            title,
            text,
            image,
            price,
            currency
          });

          console.log(text)

        });
      });
    } catch (error) {
      this.router.navigate(['/404'])
    }

    
  }


  editItem() {
    if (this.form.invalid) {

      return;
    }else{

      this.itemDetails = this.form.value as itemDetails;
       const { title,text,image,price,currency } = this.itemDetails;
      
      this.apiService.editItem(this.item._id.toString(),title,text,image,price,currency).subscribe({
        next: ()=> this.router.navigate(['/listings'])
      }
      )
    }

    
   
  }
}
