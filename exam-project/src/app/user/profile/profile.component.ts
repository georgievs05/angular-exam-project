import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails } from 'src/app/types/user';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { EmailValidator, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  showEditMode: boolean = false;

  items: Theme[] | null=null

  profileDetails: ProfileDetails = {
    username: '',
    tel: '',
    email: '',
    _id:''
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, this.emailValidator()]],
    tel: [''],
  });

  emailValidator():ValidatorFn{

    const regExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$`);

    return (control)=>{
      const isEmailValid = control.value ==='' || regExp.test(control.value)
      return isEmailValid ? null: {emailValidator: true}
    };
  }

  constructor(private userService: UserService, private apiService: ApiService,private fb: FormBuilder){
  }
 

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.onToggle();
    });
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }


  ngOnInit(): void {
    const { username, tel, email, _id } = this.userService.user!;

   
    this.profileDetails = {
      username,
      tel,
      email,
      _id
    };

    this.form.setValue({
      username,
      tel,
      email,
    });

    

    this.apiService.getItemsForLoggedInUser(_id).subscribe(items =>{
      
      this.items = items;
    })

  }
}
