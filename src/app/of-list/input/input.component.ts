import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Of} from '../../of.model';

@Component({
  selector: 'list-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() add = new EventEmitter<Of>();

  public name: string;
  public description: string;

  constructor() { }

  ngOnInit() {
  }

  insert(): void {
    this.add.emit({author: this.name || 'Anonymous', description: this.description, createdAt: new Date().toISOString() });
    this.name = '';
    this.description = '';
  }

}
