import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shiftadd',
  templateUrl: './shiftadd.component.html',
  styleUrls: ['./shiftadd.component.css']
})
export class ShiftaddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchEmployee() {
    console.log('test')
  }
}
