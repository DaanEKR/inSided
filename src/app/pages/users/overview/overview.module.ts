import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';

// Modules

@NgModule({
    declarations: [OverviewComponent],
    imports: [
        CommonModule,
        OverviewComponent,
    ],
    exports: [OverviewComponent],
})

export class OverviewModule { }
