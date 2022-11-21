import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { ApiserviceService } from '../apiservice.service'


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  dateValue = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')

  constructor(
    private api_service: ApiserviceService
  ) { }

  readAppliedData: any;

  ngOnInit(): void {
    this.getAllAppliedData()
  }

  getAllAppliedData() {
    this.api_service.getAllAppliedData().subscribe((res) => {
      this.readAppliedData = res.data
    })
  }

}
