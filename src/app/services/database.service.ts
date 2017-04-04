import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()

export class DatabaseService{

  private handleError;

  constructor(private http:Http) {

    console.log('DatabaseService Initialized');
  }

  getResponse(httpAddress:string) {
    return this.http.get(httpAddress).map(res => {return res}).catch(this.handleError);
  }
}
