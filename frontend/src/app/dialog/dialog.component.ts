import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { ApiserviceService } from '../apiservice.service'

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
    private matdialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {

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

  getErrorMessage() {
    if (this.employeesForm.get('email')?.hasError('required')) {
      return 'You must enter a value'
    }
    return this.employeesForm.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  addEmployees() {
    console.log(this.employeesForm.valid)
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


}
