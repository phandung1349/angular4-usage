1. forEach(data=>{})
1. forEach((key,value)=>{})
1. Object.keys(obj).forEach(key => {
  let value = obj[key];
});
1. Object.entries(obj).forEach(
  ([key, value]) => console.log(key, value)
);
1. data type: string, number, boolean, undefined, null, union
  let a: number | string | null | undefined;
1. forkJoin
const callList = [];
        callList.push(this._lifeStageService.getLifeEventListByType(this.eventType[0]));
        callList.push(this._lifeStageService.getLifeEventListByType(this.eventType[1]));
        Observable.forkJoin(callList).subscribe(
            result => {});
