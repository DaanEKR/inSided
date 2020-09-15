import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ModerationModule } from './moderation/moderation.module';
import { OverviewModule } from './overview/overview.module';

// Modules

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        UsersComponent,
        OverviewModule,
        ModerationModule,
    ],
    exports: [UsersComponent],
})

export class UsersModule {

 }
