import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  counter = 0;

  constructor() {}

  setCounter(val: number) {
    this.counter = val;
  }

  addCounter() {
    ++this.counter;
  }
}
