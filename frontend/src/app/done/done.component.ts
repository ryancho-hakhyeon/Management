import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  dateValue = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')

  constructor() { }

  ngOnInit(): void {
  }

}
