import { Component } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/shared/validators/match-passwords';

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


  constructor(private fb: FormBuilder){}


  register():void{
    if(this.form.invalid){
      return;
    }

    console.log(this.form.value)
  }

  emailValidator():ValidatorFn{

    const regExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$`);

    return (control)=>{
      const isEmailValid = control.value ==='' || regExp.test(control.value)
      return isEmailValid ? null: {emailValidator: true}
    };
  }

}
