import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	form;
	ngOnInit(){
		this.form = new FormGroup({
			decimal: new FormControl(''),
			binary: new FormControl(''),
			octal: new FormControl(''),
			hexa: new FormControl(''),
		})	
	} 
  	decimalChanged = function(oldVal, newVal){
  		if(newVal != ''){
  			this.form.patchValue({binary:parseInt(newVal, 10).toString(2)})	
  			this.form.patchValue({octal:parseInt(newVal, 10).toString(8)})	
  			this.form.patchValue({hexa:parseInt(newVal, 10).toString(16)})	
  		}
  		else {
  			this.form.patchValue({binary:''})
  			this.form.patchValue({octal:''})
  			this.form.patchValue({hexa:''})
  		}
  	}
  	b = 0;
  	o = 0;
  	h = 0;
  	binaryChanged = function(oldVal, newVal){
  		this.b = this.b + 1;
  		if(this.b == 1){
  			if(newVal != ''){
  				this.form.patchValue({decimal:parseInt(newVal, 2).toString(10)})	
  			}
	  		else {
	  			this.form.patchValue({decimal:''})
	  		}
  		}
  		this.b = 0;
  	}
  	octalChanged = function(oldVal, newVal){
  		this.o = this.o + 1;
  		if(this.o == 1){
  			if(newVal != ''){
  				this.form.patchValue({decimal:parseInt(newVal, 8).toString(10)})
  			}
	  		else {
	  			this.form.patchValue({decimal:''})
	  		}
  		}
  		this.o = 0;
  	}
  	hexaChanged = function(oldVal, newVal){
  		this.h = this.h + 1;
  		if(this.h == 1){
  			if(newVal != ''){
  				this.form.patchValue({decimal:parseInt(newVal, 16).toString(10)})	
  			}
	  		else {
	  			this.form.patchValue({decimal:''})
	  		}
  		}
  		this.h = 0;
  	}
}
