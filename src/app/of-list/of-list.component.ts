import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Of} from '../of.model';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'of-list',
  templateUrl: './of-list.component.html',
  styleUrls: ['./of-list.component.scss']
})
export class OfListComponent implements OnInit {

  @Input() list: Of[] = [];
  @Input() title: string;

  @Output() remove = new EventEmitter<Of>();
  @Output() add = new EventEmitter<Of>();

  constructor() {
  }

  public name: string;
  public description: string;

  ngOnInit() {
  }

  insert(): void {
    this.add.emit({author: this.name || 'Anonymous', description: this.description, createdAt: new Date().toISOString() });
    this.name = '';
    this.description = '';
  }

  calculateHash(of: Of) {
    const seed = of.author.length + 1;
    return fibonacci(seed);
  }
}
