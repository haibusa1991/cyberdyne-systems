import {Component, Input, OnInit} from '@angular/core';
import {ProductData} from "../../_models/ProductData";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  isHovered: boolean = false;
  //@ts-ignore
  @Input() productData:ProductData;
  constructor() {
  }

  ngOnInit(): void {
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
