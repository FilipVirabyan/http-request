import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectUser]'
})
export class SelectUserDirective {
    public isClicked:boolean = false;

    constructor(private elRef: ElementRef, private render: Renderer2) {
    }

    @HostListener('click')
    public onClick() {
        this.isClicked = !this.isClicked;
        if(this.isClicked){
          this.render.addClass(this.elRef.nativeElement, "select");
        }else{
            this.render.removeClass(this.elRef.nativeElement, "select");
        }
    }
}