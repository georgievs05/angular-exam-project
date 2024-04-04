import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SmthWentWrongComponent } from './smth-went-wrong/smth-went-wrong.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AuthenticationComponent,
    SmthWentWrongComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    ItemModule,
    AppRoutingModule
  ],
  providers:[appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
