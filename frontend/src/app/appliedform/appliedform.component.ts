import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service'
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appliedform',
  templateUrl: './appliedform.component.html',
  styleUrls: ['./appliedform.component.css']
})
export class AppliedformComponent implements OnInit {

  checkedStatus: any;
  applicationStatusForm!: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { userData: any },
    private matDialogRef: MatDialogRef<AppliedformComponent>,
    private service: ApiserviceService,
    public datepipe: DatePipe,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    // console.log(this.data.userData)
    this.data.userData.startDate = this.datepipe.transform(this.data.userData.startDate, 'yyyy-MM-dd')
    this.data.userData.endDate = this.datepipe.transform(this.data.userData.endDate, 'yyyy-MM-dd')

    this.applicationStatusForm = this.formBuilder.group({
      rejectedDetails: [null]
    })
  }

  checkedApplication() {
    // console.log('test')
    // this.applicationStatusForm.value.applicationStatus = this.checkedStatus
    Object.assign(this.applicationStatusForm.value, this.data.userData)

    if (this.checkedStatus === 'accept') {
      console.log('accepted')
      // console.log(this.applicationStatusForm.value)
      // this.service.createAcceptedData(this.applicationStatusForm.value).subscribe((res) => {
      //   alert(res.message)
      // }, (err) => {
      //   alert('Error: ' + err.message)
      // })
    } else {
      console.log('rejected')
      // this.service.createRejectedData(this.applicationStatusForm.value).subscribe((res) => {
      //   alert(res.message)
      // }, (err) => {
      //   alert('Error: '+ err.message)
      // })
    }

    this.applicationStatusForm.reset()
    this.matDialogRef.close(this.checkedStatus)
  }
}
