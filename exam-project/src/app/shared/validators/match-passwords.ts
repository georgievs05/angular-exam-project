import { ValidatorFn } from "@angular/forms"


export function matchPasswordValidator(passwordControl:string, rePasswordControl:string ): ValidatorFn{
  return (control)=>{

    const pass1 = control.get(passwordControl);
    const pass2 = control.get(rePasswordControl)
    const areMatching = pass1?.value == pass2?.value;
    console.log(areMatching)
    return areMatching ? null :{matchPasswordValidator:true}
  }
}