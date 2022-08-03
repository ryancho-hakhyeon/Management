import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // Connect fronend to backend
  apiUrl = 'http://localhost:3000/NAME' // backend address

  // Get All Data
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
}
