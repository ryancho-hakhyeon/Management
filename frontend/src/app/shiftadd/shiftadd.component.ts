import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from '../apiservice.service'


@Component({
  selector: 'app-shiftadd',
  templateUrl: './shiftadd.component.html',
  styleUrls: ['./shiftadd.component.css']
})
export class ShiftaddComponent implements OnInit {

  searchedEmployee = []
  searchForm !: FormGroup

  constructor(
    private searchFormBuilder: FormBuilder,
    private service:ApiserviceService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.searchFormBuilder.group({
      employeeID: [null, Validators.required],
      employeeLastName: [null, Validators.required],
      employeeFirstName: [null, Validators.required]
    })
  }

  searchEmployee() {
    console.log('test')
    console.log(this.searchForm.valid)
    console.log(this.searchForm.value)
  }
}
