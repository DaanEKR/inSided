import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModerationComponent } from './moderation.component';

// Modules

@NgModule({
    declarations: [ModerationComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [ModerationComponent],
})

export class ModerationModule { }
