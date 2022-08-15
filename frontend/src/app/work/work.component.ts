import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  dateValue = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  constructor() {}

  ngOnInit(): void {
  }


}
