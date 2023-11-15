import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-jsonfmt',
  templateUrl: './jsonfmt.component.html',
  styleUrls: ['./jsonfmt.component.css']
})
export class JsonfmtComponent implements OnInit, AfterViewInit {

  txtjson: string = "";
  formattedJson: string = "";
  isValidJson: boolean = true;
  isFilled: boolean = false;
  active = 1;

  ngOnInit(): void {
    this.txtjson = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
  }


  ngAfterViewInit(): void {
    this.checkjson();
    this.formatJson();
  }
  tabChanged() {

    this.formatJson();
  }

  formatJson() {

    var tmpData = JSON.parse(this.txtjson);
    this.formattedJson = JSON.stringify(tmpData, null, '\t');
    $('#json-renderer').jsonViewer(tmpData);
  }

  checkjson() {
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
