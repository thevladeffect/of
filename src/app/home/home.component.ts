import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OfService} from '../of.service';
import {Of} from '../of.model';

import {List} from 'immutable';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public popular: List<Of>;
  public recent: List<Of>;

  constructor(
    private ofService: OfService,
  ) {
    this.ofService.getPopular().subscribe((list: Of[]) => this.popular = List(list));
    this.ofService.getRecent().subscribe((list: Of[]) => this.recent = List(list));
  }

  ngOnInit() {
  }

  public add(list: List<Of>, item: Of): List<Of> {
    return list.unshift(item);
  }

  public remove(list: List<Of>, item: Of): List<Of> {
    return list.splice(list.indexOf(item), 1);
  }

}
