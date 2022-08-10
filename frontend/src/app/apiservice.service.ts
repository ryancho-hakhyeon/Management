import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // Connect fronend to backend
  apiUrl = 'http://localhost:3000/' // backend address

  // Get All Data
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  // Create Data
  createData(data:any):Observable<any>{
    // Check
    console.log(data, 'createData')

    return this._http.post(`${this.apiUrl}`, data)
  }

  // Delete Data
  deleteData(id:any):Observable<any> {
    let ids = id
    return this._http.delete(`${this.apiUrl}/${ids}`)
  }

  // Update Data
  updateData(data:any, id:any):Observable<any> {
    let ids = id
    return this._http.put(`${this.apiUrl}/${ids}`, data)
  }

  // Get Single Data
  getSingleData(id:any):Observable<any> {
    let ids = id
    return this._http.get(`${this.apiUrl}/${ids}`)
  }
}
