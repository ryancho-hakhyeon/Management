import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-reapply',
  templateUrl: './reapply.component.html',
  styleUrls: ['./reapply.component.css']
})
export class ReapplyComponent implements OnInit {

  reApplyFrom !: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { userID:Number, userData:any },
    private matdialogRef: MatDialogRef<ReapplyComponent>,
    private reApplyFormBuilder: FormBuilder,
    private service: ApiserviceService
  ) { }

  ngOnInit(): void {
    this.reApplyFrom = this.reApplyFormBuilder.group({

    })
  }

  updateReApplyData() {
    if (this.reApplyFrom.valid) {
      this.service.postReApplyData(this.reApplyFrom.value).subscribe((res) => {
        alert(res.message)
      }, (err) => {
        alert(err.message)
      })

      this.reApplyFrom.reset()
      this.matdialogRef.close()
    } else {
      alert('Information is not valid.')
    }
  }

}
