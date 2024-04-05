import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentItemComponent } from './current-item/current-item.component';
import { ItemRoutingModule } from './item-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CurrentItemComponent,
    ListingsComponent,
    AddItemComponent,
    EditItemComponent,
    DeleteItemComponent,
  ],
  imports: [
    CommonModule,ItemRoutingModule,FormsModule,SharedModule,ReactiveFormsModule
  ]
})
export class ItemModule { }
