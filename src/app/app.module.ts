import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './pages/users/users.module';
import { FormsModule } from '@angular/forms';
import { SearchUserPipeModule } from './pipes/search-user/search-user.module';
import { UsergroupPipeModule } from './pipes/usergroup/usergroup.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    HttpClientModule,
    UsersModule,
    SearchUserPipeModule,
    UsergroupPipeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
