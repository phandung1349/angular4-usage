// Code 1
counter() {
    return Observable
        .interval(500)
        .flatMap(() => {
            return this.media.getCurrentPosition();
        });
}


// Code 2
counter() {
  return Observable.create(observer => {
    setInterval(() => {
      return this.media.getCurrentPosition();
    }, 500)
  })
}


// Code 3
