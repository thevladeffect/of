import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {List} from 'immutable';
import {Of} from '../../of.model';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: List<Of> = List([]);
  @Output() remove = new EventEmitter<Of>();

  constructor() { }

  ngOnInit() {
  }

}
