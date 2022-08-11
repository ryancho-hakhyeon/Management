import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData: any;


  ngOnInit(): void {
    // this.getAllData()
  }

  // Getting All Data from backend
  // getAllData() {
  //   this.service.getAllData().subscribe((res) => {
  //     console.log(res)
  //   })
  // }

}
