import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData()
  }

  // Get Delete ID
  deleteID(id:any){
    // Check
    console.log(id, 'deleteID')

    this.service.deleteData(id).subscribe((res) => {
      console.log(res, 'delete');
      this.successmsg = res.message
      this.getAllData()
    })
  }

  // Get All Data
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      console.log(res)
      this.readData = res.data;
    })
  }

}
