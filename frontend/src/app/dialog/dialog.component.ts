import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private service:ApiserviceService,
    private matdialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.employeesForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      // status: ['', Validators.required],
      hiredDate: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      description: ['']
    })
  }

  selected = 'option2'

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  addEmployees() {
    console.log(this.employeesForm.valid)
    if(this.employeesForm.valid){
      console.log('complete')
      this.employeesForm.reset()
      this.matdialogRef.close()
    }
  }
}
