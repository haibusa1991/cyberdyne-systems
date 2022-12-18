import {Component, Input, OnInit} from '@angular/core';
import {IProductCatalog} from "../../models/IProductCatalog";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  isHovered: boolean = false;
  @Input() productData!:IProductCatalog;
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
