import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { ApiserviceService } from '../apiservice.service'
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  employeesForm !: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiserviceService,
    private matdialogRef: MatDialogRef<DialogComponent>,
    public datepipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public singleData: { id: Number, data: any }
    ) { }

  ngOnInit(): void {
    if(this.singleData) {
      this.employeesForm = this.formBuilder.group({
        firstName: [this.singleData.data.firstname, Validators.required],
        lastName: [this.singleData.data.lastname, Validators.required],
        address: [this.singleData.data.address, Validators.required],
        city: [this.singleData.data.city, Validators.required],
        state: [this.singleData.data.state, Validators.required],
        zipcode: [this.singleData.data.zipcode, Validators.required],
        email: [this.singleData.data.email, [Validators.required, Validators.email]],
        phoneNumber: [this.singleData.data.mobile, Validators.required],
        status: [this.singleData.data.status, Validators.required],
        hiredDate: [this.singleData.data.hiredate, Validators.required],
        department: [this.singleData.data.department, Validators.required],
        position: [this.singleData.data.position, Validators.required],
        description: [this.singleData.data.description]
      })
    } else {
      this.employeesForm = this.formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        address: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipcode: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        phoneNumber: [null, Validators.required],
        status: [null, Validators.required],
        hiredDate: [null, Validators.required],
        department: [null, Validators.required],
        position: [null, Validators.required],
        description: [null]
      })
    }
    // console.log(this.singleData.data)
    // this.datepipe.transform(this.employeesForm.value.hiredDate, 'YYYY-MM-dd')
  }

  getErrorMessage() {
    if (this.employeesForm.get('email')?.hasError('required')) {
      return 'You must enter a value'
    }
    return this.employeesForm.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  addEmployees() {
    // console.log(this.employeesForm.valid)

    this.employeesForm.value.hiredDate = this.datepipe.transform(this.employeesForm.value.hiredDate, 'yyyy-MM-dd')

    if(this.employeesForm.valid){
      this.service.createData(this.employeesForm.value)
      .subscribe((res) => {
        alert('Record added successfully.')
      }, (err) => {
        alert('Something went wrong!!!')
      })
      this.employeesForm.reset()
      this.matdialogRef.close()
    } else {
      alert('Information is not valid.')
    }
  }

  updateEmployee() {
    // console.log(this.singleData.id)
    // console.log(this.employeesForm.value)

    this.employeesForm.value.hiredDate = this.datepipe.transform(this.employeesForm.value.hiredDate, 'yyyy-MM-dd')

    if(this.employeesForm.valid) {
      this.service.updateData(this.employeesForm.value, this.singleData.id)
      .subscribe((res) => {
        alert(res.message)
      }, (err) => {
        alert(err.message)
      })
      this.employeesForm.reset()
      this.matdialogRef.close()
    } else {
      alert('Information is not valid.')
    }
  }
}
