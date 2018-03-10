import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent implements OnInit {

  isActive?: boolean;

  constructor(
    private elementRef: ElementRef) {
  }

  @HostListener('window:click', ['$event'])
  keyboardInput(e: any) {
    if (this.isActive && !this.elementRef.nativeElement.contains(e.target)) {
      this.toggleActiveStatus();
    }
  }

  ngOnInit() { }

  toggleActiveStatus(): void {
    this.isActive = !this.isActive;
  }

}