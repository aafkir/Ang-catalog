import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products! : Array <any>;

  constructor() { }

  ngOnInit(): void {
  this.products = [
  {id:1, name :"computer", price : 100},
  {id:2, name :"computer3", price : 200},
  {id:3, name :"computer4", price : 300},
  {id:4, name :"computer5", price : 400},
  ];
  }
        handelDeletProduct( p : any){
          let index = this.products.indexOf(p); //position objet
          this.products.splice(index,1);
        }
 }

