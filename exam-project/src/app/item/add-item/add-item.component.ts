import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  constructor(private apiService:ApiService, private router:Router){}

  addItem(form: NgForm) {
    if (form.invalid) {
  
      return;
    }else{
      const {title,text,image,price,currency} = form.value;
      this.apiService.createItem(title,text,image,price,currency).subscribe({
        next: ()=> this.router.navigate(['/listings'])
      }
      )
      this.router.navigate(['/listings'])
    }

    
   
  }
}
