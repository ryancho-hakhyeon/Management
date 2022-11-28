import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // Connect fronend to backend
  apiUrl = 'http://localhost:3000' // backend address

  // Get All Data
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}/workers`);
  }

  // Create Data
  createData(data:any):Observable<any>{
    // Check
    console.log(data, 'createData')

    return this._http.post(`${this.apiUrl}/workers`, data)
  }

  // Delete Data
  deleteData(id:any):Observable<any> {
    let ids = id
    return this._http.delete(`${this.apiUrl}/workers/${ids}`)
  }

  // Update Data
  updateData(data:any, id:any):Observable<any> {
    let ids = id
    return this._http.put(`${this.apiUrl}/workers/${ids}`, data)
  }

  // Get Single Data
  getSingleData(data:any):Observable<any> {
    let ids = data.employeeID
    let lastnames = data.employeeLastName
    let firstnames = data.employeeFirstName

    return this._http.get(`${this.apiUrl}/workers/${ids}/${firstnames}/${lastnames}`)
  }

  // Input vacation application in the apply talbe
  createApply(data:any):Observable<any> {
    // console.log(data, 'create application.')
    return this._http.post(`${this.apiUrl}/applies`, data)
  }

  getAllAppliedData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}/applies`)
  }

  deleteApply(id: any):Observable<any>
  {
    let ids = id
    return this._http.delete(`${this.apiUrl}/applies/${ids}`)
  }

  createAcceptedData(data: any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}/accepted-applications`, data)
  }

  createRejectedData(data: any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}/rejected-applications`, data)
  }
}


