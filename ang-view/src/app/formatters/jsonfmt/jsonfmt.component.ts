import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-jsonfmt',
  templateUrl: './jsonfmt.component.html',
  styleUrls: ['./jsonfmt.component.css']
})
export class JsonfmtComponent implements OnInit{

  txtjson: string = "";
  formattedJson: string = "";
  isValidJson: boolean = true;
  isFilled: boolean = false;
	active = 1;

  ngOnInit(): void {
  
  }

  tabChanged(){
    
    this.formatJson();
  }

  formatJson() {
    
    var tmpData = JSON.parse(this.txtjson);
    this.formattedJson = JSON.stringify(tmpData, null, '\t');
    $('#json-renderer').jsonViewer(tmpData);
  }

  checkjson() {
    debugger;
    if (typeof this.txtjson !== "string") {
      this.isFilled = false;
    }
    else
      this.isFilled = true;
    try {
      JSON.parse(this.txtjson);
      this.isValidJson = true;
      this.formatJson();
    } catch (error) {
      this.isValidJson = false;
    }
  }

}
