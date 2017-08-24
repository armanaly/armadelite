import {Directive, ElementRef, AfterViewInit, Input} from '@angular/core';

@Directive({
    selector:'[myAutofocus]'
})

export class MyAutoFocusDirective implements AfterViewInit {
    constructor(private el: ElementRef){}

    ngAfterViewInit(){
        this.el.nativeElement.focus();
    }
}