import { Injectable } from '@angular/core';
import data from 'C:\Users\DELL\Desktop\MSIT\WP\Module 18\WP week3 exam\catalog.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {
  // const products = require('catalog.json');
  content : any = data;
  constructor() { }
}
