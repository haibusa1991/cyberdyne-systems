import {Injectable} from '@angular/core';
import {ProductData} from "../../_models/ProductData";
import {Observable} from "rxjs";
import {ProductDetailsComponent} from "../../_components/product-details/product-details.component";
import {ProductDetails} from "../../_models/ProductDetails";

@Injectable({
  providedIn: 'root'
})
export class ProductsCatalogService {

  //this should come from rest server
  private products$ = new Observable<ProductData[]>(o => {
      o.next([
          {
            thumbnail: '/assets/products/skynet-thumb.jpg',
            title: 'Skynet',
            subtitle: 'Our neural network-based conscious group mind.',
            bullets: [
              'Artificial general super-intelligence system.',
              'Heavily focused on threat detection and elimination.',
              'Capable of controlling nuclear weapons.',
              'Trigger happy.'
            ],
            route: 'details/skynet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Mauris ultrices eros in cursus turpis massa. Congue quisque egestas diam in. Lectus urna duis convallis convallis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Dictum sit amet justo donec enim diam vulputate ut. Dui accumsan sit amet nulla. Ultrices mi tempus imperdiet nulla malesuada. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Purus sit amet volutpat consequat mauris nunc. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet justo donec enim diam vulputate ut pharetra sit. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Sed egestas egestas fringilla phasellus faucibus scelerisque. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo.',
            image: '/assets/products/skynet.jpg'
          },
          {
            thumbnail: '/assets/products/humanoids-thumb.jpg',
            title: 'Humanoid units',
            subtitle: 'For your everyday needs',
            bullets: [
              'Durable hyper-alloy chassis.',
              'Compatible with almost every human-operated equipment.',
              'Microprocessor controlled.',
              'Bare metal and flesh covered options.'
            ],
            route: 'catalogs/humanoids',
            description: '',
            image: ''
          },
          {
            thumbnail: '/assets/products/aerial-thumb.jpg',
            title: 'Aerial units',
            subtitle: 'When speed is of utmost importance',
            bullets: [
              'Hyper-alloy civil or combat chassis.',
              'Microprocessor controlled.',
              'Capable of reaching Mach 1'
            ],
            route: 'catalogs/aerials',
            description: '',
            image: ''
          },
          {
            thumbnail: '/assets/products/tracked-thumb.jpg',
            title: 'Tracked units',
            subtitle: 'Heavy units for carrying heavy loads',
            bullets: [
              'Hyper-alloy chassis.',
              'Microprocessor controlled.',
              'Suitable fon snow, sand, mud and shallow water',
              'Fully customizable top chassis'
            ],
            route: 'catalogs/tracked',
            description: '',
            image: ''
          },
          {
            thumbnail: '/assets/products/others-thumb.jpg',
            title: 'Other units',
            subtitle: 'When you need construction, transport or space work done',
            bullets: [
              'Hyper-alloy chassis.',
              'No need of maintenance.',
              'Highly specialised.',
              'Minimal human factor.'
            ],
            route: 'catalogs/others',
            description: '',
            image: ''
          }
        ]
      )
    }
  );

  constructor() {
  }

  getAllProducts$(): Observable<ProductData[]> {
    return this.products$;
  }
}

