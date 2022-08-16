import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { ApiserviceService } from '../apiservice.service'
import { ShiftaddComponent } from '../shiftadd/shiftadd.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  dateValue = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  constructor(
    private service:ApiserviceService,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
  }

  openSearchEmployee() {
    this.dialog.open(ShiftaddComponent, {
      width: '40%'
    })
    console.log('test')
  }

}
