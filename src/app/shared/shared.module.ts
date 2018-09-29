import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
    // declaration for all components you want to share 
    declarations: [
        DropdownDirective
    ],
    // you must export the componets/pipes to use them 
    // outside this module 
    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedMoudlue {
    
}