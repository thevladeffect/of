import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {Of} from './of.model';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfService {
  private resourceUrl = environment.apiUrl + '/ofs';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Of[]> {
    return this.http.get<Of[]>(this.resourceUrl);
  }

  public getPopular(): Observable<Of[]> {
    return this.http.get<Of[]>('./assets/data.json');
  }

  public getRecent(): Observable<Of[]> {
    return this.http.get<Of[]>('./assets/data.json');
  }
}
