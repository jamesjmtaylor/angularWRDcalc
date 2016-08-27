import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/heat/heat.html'
})
export class HeatPage {
  constructor(private navCtrl: NavController) {
  }
	ar : any;
  ap : any;
  d : any = 0;

  inputChanged(): void {
  	if (parseFloat(this.ar)==1){
  		this.d = Math.round(parseFloat(this.ap)) || 0;
  	} else if (parseFloat(this.ar)===0){
  		this.d = Math.round(parseFloat(this.ap)*2) || 0;
  	} else if (parseFloat(this.ap)-parseFloat(this.ar)>=10){
  		this.d = Math.round(
  			6+parseFloat(this.ap)-10-parseFloat(this.ar)) || 0;
		} else if (parseFloat(this.ap)-parseFloat(this.ar)<10 &&
			parseFloat(this.ap)-parseFloat(this.ar)>=1){
  		this.d = Math.round(
  			(parseFloat(this.ap)-parseFloat(this.ar))/2 + 1) || 0;
		} else {
			this.d = 0;
		}
  }
}
