import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';

import {Of} from './of.model';

@Injectable({
  providedIn: 'root'
})
export class OfService {

  constructor() { }

  public getAll(): Observable<Of[]> {
    return from<Of[]>([[
      new Of('John Smith', 'I hate turtles.', new Date()),
      new Of('Jane Doe', 'I hate people who hate turtles.', new Date()),
    ]]);
  }
}
