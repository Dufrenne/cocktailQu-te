import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktail(){
    return[
      {name: "Mojito",
      price: "7euro",
      photo: "https://zupimages.net/up/19/15/4j3c.jpeg"
     },
      {name: "ginto",
      price: "7euro",
      photo: "https://zupimages.net/up/19/15/oaei.jpg"
     },
      {name: "vodka orange",
      price: "7euro",
      photo: "https://zupimages.net/up/19/15/jkv4.jpg"
     }
    ]
  }
}
