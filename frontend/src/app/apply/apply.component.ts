import { Component, OnInit } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'
import { FormBuilder, FormGroup, NgControlStatusGroup, Validators } from '@angular/forms';

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
  receivedData = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: ''
  }

  constructor(
    private appliedFormbuilder: FormBuilder,
    private service:ApiserviceService,
    private dialog:MatDialog,
    public datepipe:DatePipe
  ) {}

  ngOnInit(): void {
    this.appliedForm = this.appliedFormbuilder.group({
      employeeId: [null],
      firstName: [null],
      lastName: [null],
      email: [null],
      phone: [null],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      details: [null]
    })
  }

  openSearchEmployee() {
    const dialogRef =  this.dialog.open(ShiftaddComponent, {
      width: '40%',
      data: {data: []}
    })
    dialogRef.afterClosed().subscribe(result => {
      // console.log('test')
      this.receivedData = {
        id: result.id,
        firstName: result.firstname,
        lastName: result.lastname,
        email: result.email,
        phoneNum: result.mobile
      }
      // console.log(this.tmp)
    })
  }

  applyVacation() {
    // console.log('test')
    if (this.receivedData.id) {
      this.appliedForm.value.employeeId = this.receivedData.id
      this.appliedForm.value.firstName = this.receivedData.firstName
      this.appliedForm.value.lastName = this.receivedData.lastName
      this.appliedForm.value.email = this.receivedData.email
      this.appliedForm.value.phone = this.receivedData.phoneNum

      // Modify Date Format
      this.appliedForm.value.startDate = this.datepipe.transform(this.appliedForm.value.startDate, 'yyyy-MM-dd')
      this.appliedForm.value.endDate = this.datepipe.transform(this.appliedForm.value.endDate, 'yyyy-MM-dd')
    }

    if (this.appliedForm.valid) {
      this.service.createApply(this.appliedForm.value)
      .subscribe((res) => {
        alert(res.message)
      }, (err) => {
        alert(err.message)
      });

      this.appliedForm.reset()
    } else {
      alert('Information is not valid.')
    }
    // console.log(this.appliedForm.valid)
    // console.log(this.appliedForm.value)
  }
}
