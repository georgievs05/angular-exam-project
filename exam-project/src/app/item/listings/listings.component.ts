import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Item } from 'src/app/types/item';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  items: Theme[] | null=null
  constructor(private api:ApiService){}

  ngOnInit(): void {

    this.api.getItems().subscribe(items =>{
     
      this.items = items;
    })

  }

}
