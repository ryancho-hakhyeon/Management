import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    public datepipe: DatePipe,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    // console.log(this.data.userData)
    this.data.userData.startDate = this.datepipe.transform(this.data.userData.startDate, 'yyyy-MM-dd')
    this.data.userData.endDate = this.datepipe.transform(this.data.userData.endDate, 'yyyy-MM-dd')

    this.applicationStatusForm = this.formBuilder.group({
      applicationStatus: [null],

    })
  }

  checkedApplication(){
    // console.log('test')

    console.log(this.applicationStatusForm.value)
  }
}
