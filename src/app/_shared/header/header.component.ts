import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSupportButtonHovered: boolean = false;
  isSupportMenuHovered: boolean = false;
  isHidden = true;

  constructor() {
  }

  ngOnInit(): void {
  }


}
