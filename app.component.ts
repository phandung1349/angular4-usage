import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  	div {
  		margin: 0 auto;
  		text-align: center;
		width: 100px;
  	}
  `],
  animations: [
  	trigger('laAnimation',[
  			state('smaller', style({
  				transform: 'scale(1)'
  			})),
  			state('larger', style({
  				transform: 'scale(3)'
  			})),
  			transition('smaller<=>larger', animate('300ms ease-in'))
  		]),
  ]
})
export class AppComponent {
  title = 'app';
  state:string = 'smaller';
  animate(){
  	this.state = this.state == 'larger' ? 'smaller':'larger';
  }
}
