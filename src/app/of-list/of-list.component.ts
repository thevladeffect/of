import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Of} from '../of.model';
import {List} from 'immutable';

@Component({
  selector: 'of-list',
  templateUrl: './of-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./of-list.component.scss']
})
export class OfListComponent implements OnInit {

  @Input() list: List<Of> = List([]);
  @Input() title: string;

  @Output() remove = new EventEmitter<Of>();
  @Output() add = new EventEmitter<Of>();

  constructor() {
  }

  ngOnInit() {
  }


}
