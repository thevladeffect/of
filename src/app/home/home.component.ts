import {Component, OnInit} from '@angular/core';
import {OfService} from '../of.service';
import {Observable} from 'rxjs';
import {Of} from '../of.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public popular: Of[];
  public recent: Of[];

  constructor(
    private ofService: OfService,
  ) {
    this.ofService.getPopular().subscribe((list: Of[]) => this.popular = list);
    this.ofService.getRecent().subscribe((list: Of[]) => this.recent = list);
  }

  ngOnInit() {
  }

  public add(list: Of[], item: Of): void {
    list.unshift(item);
  }

  public remove(list: Of[], item: Of): void {
    list.splice(list.indexOf(item), 1);
  }

}
