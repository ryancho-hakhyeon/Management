import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(
    private service:ApiserviceService,
    @Inject(MAT_DIALOG_DATA) public data: { userId: Number, userData: any }
  ) { }

  ngOnInit(): void {

  }
}
