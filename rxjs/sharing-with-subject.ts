// Service
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  public message = new Subject<string>();

  setMessage(value: string) {
    this.message.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
  }
}

// set Message
import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public messageService:MessageService) { }

  setMessage(event) {
    console.log(event.value);
    this.messageService.setMessage(event.value);
  }
}

// subscribe
import { Component, OnDestroy } from '@angular/core';
import { MessageService } from './service/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  message: string;
  subscription: Subscription;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
