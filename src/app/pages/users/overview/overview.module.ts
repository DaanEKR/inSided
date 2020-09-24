import { OverviewComponent } from './overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchUserPipeModule } from 'src/app/pipes/search-user/search-user.module';
import { UsergroupPipeModule } from 'src/app/pipes/usergroup/usergroup.module';

@NgModule({
    declarations: [OverviewComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        SearchUserPipeModule,
        UsergroupPipeModule,
        FormsModule,
    ],
    exports: [OverviewComponent],
})

export class OverviewModule { }

