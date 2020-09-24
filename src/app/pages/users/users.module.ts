import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ModerationModule } from './moderation/moderation.module';
import { OverviewModule } from './overview/overview.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Modules

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        OverviewModule,
        ModerationModule,
        RouterModule,
        BrowserModule,
        HttpClientModule,
    ],
    exports: [UsersComponent],
})

export class UsersModule {

 }
