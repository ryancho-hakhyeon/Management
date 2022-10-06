import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { userId: Number, userData: any }
  ) { }

  ngOnInit(): void {

  }
}
