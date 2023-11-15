import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-colourpal',
  templateUrl: './colourpal.component.html',
  styleUrls: ['./colourpal.component.css']
})
export class ColourpalComponent implements OnInit,AfterViewInit {

  active = 1;
  ngOnInit(): void {
    debugger;
  }

   ngAfterViewInit(): void {
    $('#my-color-picker').jQolor();
   }
 

}
