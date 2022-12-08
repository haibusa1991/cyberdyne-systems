import {Injectable} from '@angular/core';
import {ProductDetails} from "../../_models/ProductDetails";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private content: Observable<ProductDetails[]> = new Observable<ProductDetails[]>(e => {
    e.next([
        {
          productId: 'skynet',
          name: 'Skynet',
          image: 'assets/products/skynet.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        },
        {
          productId: 't600',
          name: 'T-600',
          image: 'assets/products/t600.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        },
        {
          productId: 't700',
          name: 'T-700',
          image: 'assets/products/t700.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        },
        {
          productId: 't800',
          name: 'T-800',
          image: 'assets/products/t800.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        },
        {
          productId: 't1000',
          name: 'T-1000',
          image: 'assets/products/t1000.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        },
        {
          productId: 'tx',
          name: 'T-X',
          image: 'assets/products/tx.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        },
        {
          productId: 'rev8',
          name: 'REV-8',
          image: 'assets/products/rev8.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        },
        {
          productId: 'rev9',
          name: 'REV-9',
          image: 'assets/products/rev9.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
        }
      ]
    )
  });

  constructor() {
  }

  getProductDetails$(productId: string): ProductDetails {

    let product:ProductDetails;

    this.content.subscribe({
      next:e=> {
        product = e.find(id => id.productId === productId) as ProductDetails
      }
    })

    //@ts-ignore
    return product;
  }
}