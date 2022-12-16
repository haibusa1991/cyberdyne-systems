import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {exactLength, serialNumber} from "../../_view-components/_shared/FormValidators";

@Component({
  selector: 'app-request-support',
  templateUrl: './request-support.component.html',
  styleUrls: ['./request-support.component.css']
})
export class RequestSupportComponent implements OnInit {
  readonly noFileChosen = 'No file chosen';

  isBusy = false;
  hasRequested = false;
  logFile: string = this.noFileChosen;
  shouldUnderline = false;

  requestForm = new FormGroup({
    model: new FormControl('', [Validators.required]),
    serial: new FormControl('', [Validators.required, serialNumber(), exactLength(16)]),
    description: new FormControl('', [Validators.required,Validators.minLength(10)]),
    log: new FormControl(''),
  })

  onRequest() {
    console.log('post to gdrive goes here')
  }

  ngOnInit(): void {
    this.requestForm.controls.log.valueChanges.subscribe({
      next: n => {
        let value = this.requestForm.controls.log.value;
        if (value) {
          this.logFile = value;
          this.shouldUnderline = true;
        } else {
          this.logFile = this.noFileChosen;
          this.shouldUnderline = false;
        }
      }
    });

    // this.requestForm.statusChanges.subscribe(e=>{
    //   console.log(this.requestForm.controls.description.errors);
    // })
  }
}
