// Code Subscription
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

timer: Observable<any> = Observable.timer(2000, 1000);
  timerSubscription: Subscription;
  second = 0;

  constructor() {
    this.timerSubscription = this.timer.subscribe((value) => {
      this.tickerFunc();
    });
  }

  tickerFunc() {
    this.second++;
    if (this.second >= 10) {
      this.timerSubscription.unsubscribe();
    }
    console.log(this.second);
  }

  ngOnInit() {
  }


// Code timer, take
import { timer } from 'rxjs/observable/timer';
import { take } from 'rxjs/operators';

timeLimit = 10000;

  constructor() {
    timer(0, 990).pipe(
      take(this.timeLimit),
    )
      .subscribe((next) => console.log(next), // next
        (err) => console.log(err),
        () => console.log('finish !!!')
      );
  }


// Code 
