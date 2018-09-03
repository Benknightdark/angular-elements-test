import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
  providers:[CounterService]
})
export class CounterComponent  implements OnInit  {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor(public counterService: CounterService) {

  }

  ngOnInit() {
    this.counterService.setCounter(this.counter);
  }

  add() {
    this.counterService.addCounter();
    this.counterChange.emit(this.counterService.counter);
  }
}
