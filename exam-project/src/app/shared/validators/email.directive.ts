import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide:NG_VALIDATORS, useExisting:EmailDirective,multi:true
    }
  ]
})
export class EmailDirective implements Validator , OnChanges{
  @Input()appEmail : string[]=[]
  validator: ValidatorFn=()=> null

  constructor() { }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    

    return this.validator(control)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {currentValue} = changes['appEmail']

    if(currentValue?.length){
     this.validator = this.emailValidator()
    }
  }


  emailValidator():ValidatorFn{

    const regExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$`);

    return (control)=>{
      const isEmailValid = control.value ==='' || regExp.test(control.value)
      return isEmailValid ? null: {emailValidator: true}
    };
  }

}
