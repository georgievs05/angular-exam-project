import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentItemComponent } from './current-item/current-item.component';
import { ItemRoutingModule } from './item-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CurrentItemComponent,
    ListingsComponent,
    AddItemComponent,
  ],
  imports: [
    CommonModule,ItemRoutingModule,FormsModule
  ]
})
export class ItemModule { }
