import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-appliedform',
  templateUrl: './appliedform.component.html',
  styleUrls: ['./appliedform.component.css']
})
export class AppliedformComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { appliedData: any }
  ) { }

  ngOnInit(): void {
  }

}
