import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  @Input() author: string;
  @Input() description: string;
  @Input() createdAt: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
