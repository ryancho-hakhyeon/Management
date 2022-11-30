import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  searchDateForm !: FormGroup;
  readAllAcceptedData : any;
  readFilteredData: any;

  constructor(
    private service: ApiserviceService,
    private searchformbuilder: FormBuilder,
    public datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.searchDateForm = this.searchformbuilder.group({
      dataDate: ['', Validators.required]
    })
  }

  getAllData(){
    this.searchDateForm.value.dataDate = this.datePipe.transform(this.searchDateForm.value.dataDate, 'yyyy-MM-dd')
    console.log(this.searchDateForm.value)

    if (this.searchDateForm.valid) {
      this.service.getAccepetedData().subscribe((res) => {
        console.log(res)
        console.log(res.data)
        this.readAllAcceptedData = res.data
      })
    }

    // this.readFilteredData = Object.
  }

}
