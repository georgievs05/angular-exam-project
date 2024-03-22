import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    ItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
