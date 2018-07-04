import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})

export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon:string};

  constructor(
              public navParams: NavParams
  ) {
    
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  // add elvis operator (?) in template for this method
  // }
}
