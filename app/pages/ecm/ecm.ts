import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/ecm/ecm.html'
})
export class EcmPage {
  constructor(private navCtrl: NavController) {
  }

  vet : any = 0;
  ecm : any = 100;
  acc : any;
  missiles : any;
  hits : any;
  chances : any = 0;

  productRange(a, b): number {
  	var product = a, i = a;

  	while (i++<b){
  		product*=i;
  	}
  	return product;
  }

  combinations(n, k): number {
  	if (n==k) {
  		return 1;
  	} else {
  		k = Math.max(k,n-k);
  		return this.productRange(k+1,n) / this.productRange(1, n-k);
  	}
  }

  binomProbability(f, h, hitRate){
  	return this.combinations(f,h)*Math.pow(hitRate,h)*Math.pow(1.0-hitRate,(f-h));
  }

  bpAtLeast(f, h, hitRate): number {
  	var ret = 0;
  	var i;
  	for (i = h; i <= f; i++){
  		ret += this.binomProbability(f,i,hitRate);
  	}
  	return ret;
  }

  updateChances(): void{
  	var fired = parseInt(this.missiles);
  	var hit = parseInt(this.hits);
  	var accuracy = parseInt(this.acc);
  	var hitRate = (accuracy/100) 
  	* parseFloat(this.vet) 
  	* (1 - parseFloat(this.ecm));

  	var c = Math.round(this.bpAtLeast(fired,hit,hitRate) * 100);
    c = (c>100) ? 100 : c;
  	this.chances = c || 0;

 /* 	console.log("Veterancy:",this.vet,
  							"ECM:",this.ecm,
  							"Accuracy:",this.acc,
  							"Fired:",this.missiles,
  							"Required hits:",this.hits,
  							"CHANCES:",this.chances);*/
  }

 vetClicked(veterancy): void{
  	this.vet = veterancy;
  	this.updateChances();
  }
  ecmClicked(ecm): void{
  	//const target = <HTMLElement> event.target;
  	this.ecm = ecm;
  	this.updateChances();
  }
}
