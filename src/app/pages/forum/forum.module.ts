import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';

// Modules

@NgModule({
    declarations: [ForumComponent],
    imports: [
        CommonModule,
        ForumComponent,
    ],
    exports: [ForumComponent],
})

export class ForumModule {

 }
