import { Component } from '@angular/core';
import {ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('helloModal') helloEl?: ElementRef;
  modal?: bootstrap.Modal;
  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.helloEl?.nativeElement, {});
  }
 
  trigger() {
    this.modal?.toggle();
  }
}
