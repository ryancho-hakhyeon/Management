import { Component, Inject, OnInit } from '@angular/core';

// import { formatDate } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
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
    private matdialogRef: MatDialogRef<ShiftaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
          this.searchedEmployee = res.data[0]
          // console.log(this.searchedEmployee)
          this.matdialogRef.close(this.searchedEmployee)
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
