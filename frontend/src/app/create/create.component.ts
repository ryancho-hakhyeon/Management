import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiserviceService } from '../apiservice.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    // Check
    // console.log(this.router.snapshot.paramMap.get('id'), 'getID');
    this.getparamid = this.router.snapshot.paramMap.get('id')

    // if(this.getparamid) {
    //   this.service.getSingleData(this.getparamid).subscribe((res) => {
    //     // Check
    //     console.log(res, 'check res id');
    //     this.userForm.patchValue({
    //       firstname: res.data[0].firstname,
    //       lastname: res.data[0].lastname,
    //       email: res.data[0].email,
    //       mobile: res.data[0].mobile
    //     });
    //   });
    // }
  }

  userForm = new FormGroup({
    'firstname': new FormControl('', Validators.required),
    'lastname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required)
  });

  // Create User
  userSubmit() {
    // Check Data
    // console.log('this.userForm.value')
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe((res) => {
        // Check
        console.log(res, 'res')
        this.userForm.reset()
        this.successmsg = res.message
      })
    } else {
      this.errormsg = 'All fields are required !'
    }
  }

  userUpdate() {
    // Check
    // console.log(this.userForm.value, 'update data');
    if(this.userForm.valid){
      this.service.updateData(this.userForm.valid, this.getparamid).subscribe((res) => {
        // Check
        console.log(res, 'res updata');
        this.successmsg = res.message
      })
    } else {
      this.errormsg = 'All fields are required !'
    }
  }

}
