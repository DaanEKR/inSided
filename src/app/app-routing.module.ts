import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { ModerationComponent } from './pages/users/moderation/moderation.component';
import { OverviewComponent } from './pages/users/overview/overview.component';


const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full'},
    { path: 'users', component: UsersComponent, pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
