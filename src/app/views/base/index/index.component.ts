import { Component, OnInit } from "@angular/core";
import { Observable, timer } from "rxjs";
import { switchMap, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  counter = 600;
  interval = 1000;
  value: any;
  countdown: number;
  text: any = {
    Year: "Any",
    Month: "Mesos",
    Weeks: "Setmanes",
    Days: "Dies",
    Hours: "Hores",
    Minutes: "Minuts",
    Seconds: "Segons",
    MilliSeconds: "Milisegons",
  };
  constructor() {}
  ngOnInit() {}
  startCountdownTimer() {
    const interval = 1000;
    const duration = 10000 * 1000;
    const stream$ = timer(0, interval).pipe(
      switchMap(async (value) => this.counter - value),
      takeWhile((value) => value > 0)
    );

    stream$.subscribe((value: number) => (this.countdown = value));
  }
  callBack($event) {
    console.log("REACHED");
  }
}
