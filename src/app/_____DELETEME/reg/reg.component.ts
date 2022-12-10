import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  userdata = '';

  constructor(private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  onReg() {
    this.registerService.register();
  }

  onLogin() {
    this.registerService.login();
  }

  onAddData() {
    this.registerService.submitDbData();
  }

  onReadData() {
    this.registerService.getData();
  }


}
