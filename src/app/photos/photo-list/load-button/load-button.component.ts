import { NgClass } from '@angular/common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  @Input() class : string = ''

  

  constructor() { }

  ngOnInit() {
  }

}
