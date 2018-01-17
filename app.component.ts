import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items:string[] = ['Angular 4','React','Underscore'];
  newItem = '';
  addItem = function(){
  	if(this.newItem != ''){
  		this.items.unshift(this.newItem);
  		this.newItem = '';
  	}
  }
  clearItem = function(ind){
  	this.items.splice(ind, 1);
  }
}
