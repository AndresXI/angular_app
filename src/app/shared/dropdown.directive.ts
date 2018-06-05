import { Directive, HostListener, HostBinding, OnInit, Input } from '@angular/core'; 

@Directive({
    selector: '[appDropdown]'

})

export class DropdownDirective implements OnInit {

    readonly classToShowDropdown = 'show';
    // attatching and detaching a css class 
    // it will not be attached initially until it is true 
    @HostBinding('class.show') isOpen = false; // gets a css class 'open'
    // listening to a click it will attach a css class 
    @Input() appDropdown: HTMLElement; // property binding
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen; 
        this.appDropdown.classList.toggle(this.classToShowDropdown, this.isOpen);
    }

    ngOnInit() {

    }
}