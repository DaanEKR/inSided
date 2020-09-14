import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';

// Modules

@NgModule({
    declarations: [OverviewComponent],
    imports: [
        CommonModule,
        RouterModule,
        OverviewComponent,
    ],
    exports: [OverviewComponent],
})

export class OverviewModule { }
