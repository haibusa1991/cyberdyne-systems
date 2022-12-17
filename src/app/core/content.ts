import {IProductCatalog} from "../models/IProductCatalog";
import {IProductDetails} from "../models/IProductDetails";
import {ICatalogCard} from "../models/ICatalogCard";

export function getCatalogs(): IProductCatalog[] {
  return [
    {
      thumbnail: 'assets/products/skynet-thumb.jpg',
      title: 'Skynet',
      subtitle: 'Our neural network-based conscious group mind.',
      bullets: [
        'Artificial general super-intelligence system.',
        'Heavily focused on threat detection and elimination.',
        'Capable of controlling nuclear weapons.',
        'Trigger happy.'
      ],
      route: 'details/skynet',
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
    },
    {
      thumbnail: 'assets/products/aerial-thumb.jpg',
      title: 'Aerial units',
      subtitle: 'When speed is of utmost importance',
      bullets: [
        'Hyper-alloy civil or combat chassis.',
        'Microprocessor controlled.',
        'Capable of reaching Mach 1'
      ],
      route: 'catalogs/aerials',
    },
    {
      thumbnail: 'assets/products/tracked-thumb.jpg',
      title: 'Tracked units',
      subtitle: 'Heavy units for carrying heavy loads',
      bullets: [
        'Hyper-alloy chassis.',
        'Microprocessor controlled.',
        'Suitable fon snow, sand, mud and shallow water',
        'Fully customizable top chassis'
      ],
      route: 'catalogs/tracked',
    },
    {
      thumbnail: 'assets/products/others-thumb.jpg',
      title: 'Other units',
      subtitle: 'When you need construction, transport or space work done',
      bullets: [
        'Hyper-alloy chassis.',
        'No need of maintenance.',
        'Highly specialised.',
        'Minimal human factor.'
      ],
      route: 'catalogs/others',
    }
  ]
}

export function getProductById(productId: string): IProductDetails {
  let content = [
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
    },
    {
      productId: 'hk1',
      name: 'HK-1',
      image: 'assets/products/hk1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
    },
    {
      productId: 'hk2',
      name: 'HK-2',
      image: 'assets/products/hk2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
    },
    {
      productId: 'tr',
      name: 'TR',
      image: 'assets/products/tr.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Tristique nulla aliquet enim tortor at auctor urna. In ornare quam viverra orci sagittis eu volutpat odio. Aliquam vestibulum morbi blandit cursus. Nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet nibh. Eu mi bibendum neque egestas congue quisque egestas diam in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Euismod nisi porta lorem mollis aliquam ut porttitor. Justo donec enim diam vulputate ut pharetra. Et netus et malesuada fames ac turpis egestas integer eget. At risus viverra adipiscing at in tellus integer. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Ut aliquam purus sit amet luctus venenatis lectus.Feugiat in ante metus dictum at. Amet nisl purus in mollis nunc sed id. Nunc congue nisi vitae suscipit tellus mauris a. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Orci nulla pellentesque dignissim enim sit amet. Sed turpis tincidunt id aliquet risus feugiat in ante. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Eleifend donec pretium vulputate sapien. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Elementum nibh tellus molestie nunc non blandit massa enim nec. Proin sed libero enim sed faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed augue lacus viverra vitae congue eu consequat. Morbi blandit cursus risus at. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis aliquam.'
    }
  ]

  return content.find(e => e.productId === productId) as IProductDetails;
}

export function getCatalogById(productId: string): ICatalogCard[] {
  let humanoids: ICatalogCard[] = [
    {
      image: 'assets/products/t800-thumb.jpg',
      name: 'T-800',
      route: '/products/details/t800',
      isDeprecated: false
    },
    {
      image: 'assets/products/rev9-thumb.jpg',
      name: 'REV-9',
      route: '/products/details/rev9',
      isDeprecated: false
    },
    {
      image: 'assets/products/tx-thumb.jpg',
      name: 'T-X',
      route: '/products/details/tx',
      isDeprecated: false
    },
    {
      image: 'assets/products/t600-thumb.jpg',
      name: 'T-600',
      route: '/products/details/t600',
      isDeprecated: true
    },
    {
      image: 'assets/products/t700-thumb.jpg',
      name: 'T-700',
      route: '/products/details/t700',
      isDeprecated: true
    },
    {
      image: 'assets/products/t1000-thumb.jpg',
      name: 'T-1000',
      route: '/products/details/t1000',
      isDeprecated: true
    },
    {
      image: 'assets/products/rev8-thumb.jpg',
      name: 'REV-8',
      route: '/products/details/rev8',
      isDeprecated: true
    },
  ];
  let aerials: ICatalogCard[] = [
    {
      image: 'assets/products/hk2-thumb.jpg',
      name: 'HK-2',
      route: '/products/details/hk2',
      isDeprecated: false
    },
    {
      image: 'assets/products/tr-thumb.jpg',
      name: 'TR',
      route: '/products/details/tr',
      isDeprecated: false
    },
    {
      image: 'assets/products/hk1-thumb.jpg',
      name: 'HK-1',
      route: '/products/details/hk1',
      isDeprecated: true
    },
  ]


  let catalogs = {
    humanoids,
    aerials,
    tracked: [],
    others: []
  }

  //@ts-ignore
  return catalogs[productId] as ICatalogCard[];
}
