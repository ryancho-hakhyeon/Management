import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from '../apiservice.service'


@Component({
  selector: 'app-shiftadd',
  templateUrl: './shiftadd.component.html',
  styleUrls: ['./shiftadd.component.css']
})
export class ShiftaddComponent implements OnInit {

  searchedEmployee : any
  searchForm !: FormGroup

  constructor(
    private searchFormBuilder: FormBuilder,
    private service:ApiserviceService,
    private matdialogRef: MatDialogRef<ShiftaddComponent>
  ) { }

  ngOnInit(): void {
    this.searchForm = this.searchFormBuilder.group({
      employeeID: [null, Validators.required],
      employeeLastName: [null, Validators.required],
      employeeFirstName: [null, Validators.required]
    })
  }

  searchEmployee() {
    // console.log('test')
    // console.log(this.searchForm.valid)
    // console.log(this.searchForm.value)

    if (this.searchForm.valid) {
      this.service.getSingleData(this.searchForm.value)
        .subscribe((res) => {
          alert(res.message)
          this.searchEmployee = res.data[0]
        }, (err) => {
          alert(err.message)
        })
      this.searchForm.reset()
      this.matdialogRef.close()
    } else {
      alert('Information is not valid.')
    }
  }
}
