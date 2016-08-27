import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/ke/ke.html'
})
export class KePage {
  constructor(private navCtrl: NavController) {
  }

  ap : any;
  ar : any;
  ra : any;
  tr : any;
  d : any = 0;

  inputChanged(): void {
		if (parseFloat(this.ra) < parseFloat(this.tr)){
			this.d = "Out of Range";
		} else { //TODO: Add type checking on vars here.
			var difference : number = 
			(parseFloat(this.ra) - parseFloat(this.tr))/175;
			//console.log("Difference is equal to",difference);
			var actualAp : number = parseFloat(this.ap) + difference;
			//console.log("actual AP is equal to",actualAp);
			if (actualAp < parseFloat(this.ar)){
				this.d = "Inefficient" || 0;;
			} else if (this.ar == 0){
				this.d = Math.round(actualAp*2) || 0;
			} else {
				this.d = Math.round((actualAp 
					- parseInt(this.ar))/2+1) || 0;
			}
		}

  }
}
