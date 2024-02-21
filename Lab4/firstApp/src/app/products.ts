export interface Product {
    id: number;
    photo: string;
    name: string;
    price: number;
    description: string;
    rating: number;
}

export const products = [
    {
      id: 1,
      name: 'Серьги Золото России J312-6721',
      price: 301930,
      description: 'Желтое золото с бриллиантовой ставкой',
      photo: "/assets/1.jpg",
      rating: 3
    },
    /*{
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: ''
    }*/
];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */