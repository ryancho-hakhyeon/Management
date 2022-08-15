import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  searchDateForm !: FormGroup

  constructor(
    private searchformbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchDateForm = this.searchformbuilder.group({
      dataDate: ['', Validators.required]
    })
  }

  getAllData(){

    console.log(this.searchDateForm.value)
  }

}
