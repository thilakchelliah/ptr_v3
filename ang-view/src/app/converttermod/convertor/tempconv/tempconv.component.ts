import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonfuncService } from '../../../service/commonfunc.service'
declare var $: any;

@Component({
  selector: 'app-tempconv',
  templateUrl: './tempconv.component.html',
  styleUrls: ['./tempconv.component.css']
})
export class TempconvComponent implements OnInit, AfterViewInit {

  constructor(private cfService: CommonfuncService) { }

  celcsiusVal: number = 0;
  fahrenheitVal: number = 32;
  celciusScale: number[] = [];
  fahrenheitScale: number[] = [];


  ngOnInit(): void {
    debugger;
    this.celciusScale = this.cfService.arrayRange(-250, 250, 50);
    this.fahrenheitScale = this.cfService.arrayRange(-500, 500, 100);

  }
  ngAfterViewInit(): void {



  }


  CequalF() {
    this.celcsiusVal = -40;
    this.fahrenheitVal = Math.round((this.celcsiusVal * 9 / 5 + 32) * 1000) / 1000;
  }

  CtoF() {
    const cTemp = this.celcsiusVal;
    this.fahrenheitVal = Math.round((cTemp * 9 / 5 + 32) * 1000) / 1000;
  }

  FtoC() {
    const fTemp = this.fahrenheitVal;
    this.celcsiusVal = Math.round(((fTemp - 32) * 5 / 9) * 1000) / 1000;
  }

}
