import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit, OnChanges {
  @Input() tax: number;
  @Output() totalChange = new EventEmitter<number>();
  amount: number = 1300000;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): any{
    this.calculate();
    console.log(changes);
  }

  calculate(): any{
    let value: number = this.amount * this.tax / 100;
    this.totalChange.emit(value);
  }

}
