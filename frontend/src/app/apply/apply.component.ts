import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from '../apiservice.service'
import { ShiftaddComponent } from '../shiftadd/shiftadd.component';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  dateValue = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  appliedForm !: FormGroup;

  constructor(
    private appliedFormbuilder: FormBuilder,
    private service:ApiserviceService,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.appliedForm = this.appliedFormbuilder.group({
      // employeeId: [null],
      // firstName: [null],
      // lastName: [null],
      // email: [null],
      // phone: [null],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      details: [null]
    })
  }

  openSearchEmployee() {
    this.dialog.open(ShiftaddComponent, {
      width: '40%'
    })
  }

  applyVacation() {
    console.log('test')
    console.log(this.appliedForm.valid)
    console.log(this.appliedForm.value)
  }
}
