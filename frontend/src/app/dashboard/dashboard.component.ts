import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import { ApiserviceService } from '../apiservice.service'
import { DialogComponent } from '../dialog/dialog.component';
import { ReadComponent } from '../read/read.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private service:ApiserviceService,
    private dialog:MatDialog,
    ) { }

  readData: any;
  allEmployees: any;


  ngOnInit(): void {
    this.getAllData()
  }

  // Open Add page
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '45%'
    }).afterClosed().subscribe((res) => {
      this.getAllData()
    })
  }

  // Getting All Data from backend
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      this.readData = res.data
      this.allEmployees = this.readData.length
    })
  }

  updateData(id: Number, data: any) {
    // console.log(id)
    // console.log(data)

    this.dialog.open(DialogComponent, {
      width: '45%',
      data: {
        id: id,
        data: data
      }
    }).afterClosed().subscribe((res) => {
      this.getAllData()
    })
  }

  readMoreData(id: Number, data: any) {
    // console.log(id)
    // console.log(data.firstname)

    this.dialog.open(ReadComponent, {
      data: {
        userId: id,
        userData: data
      },
      width: '45%'
    })
  }

  deleteData(id: Number) {
    // console.log(id)
    this.service.deleteData(id).subscribe((res) => {
      alert(res.message)
      // console.log(res)
      this.getAllData()
    },
    (error) => {
      alert('Error: ' + error)
      console.log('error' + error)
    })
  }

}
