import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CurrentItemComponent } from './current-item/current-item.component';
import { AuthActivate } from '../guards/auth.activate';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

const routes: Routes = [
    {path:'listings', children:[
      {path:'',pathMatch:'full', component:ListingsComponent},
      {path:':itemId', component:CurrentItemComponent},
      {path:':itemId/edit', component:EditItemComponent},
      {path:':itemId/delete',component:DeleteItemComponent}
    ]},
    {path:'add-item', component:AddItemComponent,
      canActivate:[AuthActivate]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
