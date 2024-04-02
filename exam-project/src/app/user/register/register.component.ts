import { Component } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/shared/validators/match-passwords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
   username: ['', [Validators.required, Validators.minLength(6)]],
   email:['',[Validators.required, this.emailValidator()]],
   tel:[''],
   passGroup: this.fb.group({password:['', [Validators.required,  Validators.minLength(6)]], rePassword:['', [Validators.required]]},
   {validators: [matchPasswordValidator('password', 'rePassword')]}
   )
  })


  constructor(private fb: FormBuilder, private userService:UserService, private router:Router){}


  register():void{
    if(this.form.invalid){
      return;
    }

    const{username, email, tel,passGroup:{password, rePassword}={}}= this.form.value

    this.userService.register(username!, email!,tel!,password!,rePassword!).subscribe(()=>{
     this.router.navigate(['/home'])
    })
  }

  emailValidator():ValidatorFn{
    const regExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$`);

    return (control)=>{
      const isEmailValid = control.value ==='' || regExp.test(control.value)
      return isEmailValid ? null: {emailValidator: true}
    };
  }

}
