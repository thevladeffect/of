import {Component, OnInit} from '@angular/core';
import {Of} from '../of.model';

import {OfService} from '../of.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'of-list',
  templateUrl: './of-list.component.html',
  styleUrls: ['./of-list.component.scss']
})
export class OfListComponent implements OnInit {

  public list$: Observable<Of[]>;

  constructor(
    private ofService: OfService,
  ) { }

  ngOnInit() {
    this.updateList();
  }

  private updateList(): void {
    this.list$ = this.ofService.getAll();
  }
}
