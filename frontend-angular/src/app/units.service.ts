import { ElementRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private url = 'http://localhost:3000/api/units';

  constructor(private httpClient: HttpClient) { }

  getUnits(){
    return this.httpClient.get(this.url);
  }

}
