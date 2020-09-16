import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModerationComponent } from './pages/users/moderation/moderation.component';
import { OverviewComponent } from './pages/users/overview/overview.component';
import { AddComponent } from './pages/users/add/add.component';
import { ForumComponent } from './pages/forum/forum.component';


const routes: Routes = [
    { path: '', redirectTo: 'forum', pathMatch: 'full'},
    { path: 'forum', component: ForumComponent, pathMatch: 'full'},
    { path: 'users', children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      { path: 'overview', component: OverviewComponent, pathMatch: 'full'},
      { path: 'moderation', component: ModerationComponent, pathMatch: 'full'},
      { path: 'add', component: AddComponent, pathMatch: 'full',},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
