import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  constructor(private apiService:ApiService){}

  addTheme(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

  }
}
