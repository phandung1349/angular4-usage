// Code 1
array = [...];
obj = {...}
// const myObservable = Observable.of(1, 2, 3);
// const myObservable = Observable.of(array);
// const myObservable = Observable.of(obj);

// Create observer object
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object
myObservable.subscribe(myObserver);

// Code 2
.subscribe((next) => console.log(next), // next
        (err) => console.log(err),
        () => console.log('finish !!!')
      );
         
         
// Code 3
