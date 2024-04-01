import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  constructor(private apiService:ApiService){}

  addItem(ev:Event, title:string,text:string,imageUrl:string,price:string){
    ev.preventDefault();

    
    this.apiService.createItem(title,text,imageUrl,price).subscribe(data =>{
      console.log({data})
    })

  }
}
