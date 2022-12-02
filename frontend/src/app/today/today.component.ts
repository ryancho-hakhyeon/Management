import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiserviceService } from '../apiservice.service';
import { MatDialog } from '@angular/material/dialog';
import { ReapplyComponent } from '../reapply/reapply.component'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  searchDateForm !: FormGroup;
  readAllAcceptedData: any;
  readFilteredData: any;
  readRejectedData: any;

  constructor(
    private service: ApiserviceService,
    private searchformbuilder: FormBuilder,
    public datePipe: DatePipe,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchDateForm = this.searchformbuilder.group({
      dataDate: ['', Validators.required]
    })

    this.getRejectedData()
  }

  getAllData(){
    this.searchDateForm.value.dataDate = this.datePipe.transform(this.searchDateForm.value.dataDate, 'yyyy-MM-dd')
    // console.log(this.searchDateForm.value)

    if (this.searchDateForm.valid) {
      this.service.getAccepetedData().subscribe((res) => {
        console.log(res)
        console.log(res.data)
        this.readAllAcceptedData = res.data
      })
    }

    // this.readFilteredData = Object.
  }

  getRejectedData() {
    this.service.getRejectedData().subscribe((res) => {
      // console.log(res.data)
      this.readRejectedData = res.data
    })
  }

  updateReApplyData(id: Number, data: any) {
    this.matDialog.open(ReapplyComponent, {
      data: {
        userID: id,
        userData: data
      },
      width: '45%'
    })
  }

}
