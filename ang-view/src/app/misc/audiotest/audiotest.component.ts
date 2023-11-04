import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioContext } from 'angular-audio-context';
declare var $: any;

@Component({
  selector: 'app-audiotest',
  templateUrl: './audiotest.component.html',
  styleUrls: ['./audiotest.component.css']
})
export class AudiotestComponent implements OnInit, AfterViewInit {


  isAudPlaying: String = 'false';
  panVal: any;
  frequencyArray = [];
  analyser: any;
  request: any;
  flag = 0;
  height = 0;
  bars: number = 0;;
  lineWidth = 3;
  centerX: number = 0;
  centerY: number = 0;

  @ViewChild('canvas', { static: false }) private canvas= {} as  ElementRef<HTMLCanvasElement>;

  context!: CanvasRenderingContext2D | null;
  constructor(private _audioContext: AudioContext) {

  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.bars = Math.round(this.canvas.nativeElement.width);
    this.centerX = this.canvas.nativeElement.width / 2;
    this.centerY = this.canvas.nativeElement.height / 2;
    this.beep(0);
  }

  //[assist]https://rilling.dev/blog/creating-oscillators-with-javascript/
  public async beep(pan: number): Promise<void> {
    if (this._audioContext.state === 'suspended') {
      await this._audioContext.resume();
    }
    this.analyser = this._audioContext.createAnalyser();
    const panNode = this._audioContext.createStereoPanner();
    panNode.pan.setValueAtTime(pan, this._audioContext.currentTime);

    const oscillatorNode = this._audioContext.createOscillator();

    oscillatorNode.onended = () => oscillatorNode.disconnect();
    oscillatorNode.connect(this.analyser).connect(panNode).connect(this._audioContext.destination);
   
   

    oscillatorNode.start();
    oscillatorNode.stop(this._audioContext.currentTime + 1.5);
    requestAnimationFrame(this.drawCanvas);
  }


  public drawCanvas = () => {
    if (this.context)
      this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.analyser.getByteTimeDomainData(this.frequencyArray);

    for (var i = 0; i < this.bars; i += 3) {
      this.height = this.frequencyArray[i];

      if (this.height < 100) {
        this.height *= 0.05;
      }
      else {
        if (this.height < 200 && this.height > 100) {
          this.height = (this.height - 100) + (100 * 0.05)
        }
        else {
          this.height = (this.height - 200) * 0.2 + (100 * 1.05);
        }
      }

      this.drawLine(
        {
          i,
          bars: this.bars,
          height: this.height
        },
        this.canvas,
        this.context
      );
    }

    if (this.flag == 0) {
      this.request = requestAnimationFrame(this.drawCanvas);
    }
    else {
      this.flag = 2;
      close();
    }
  };


  public drawLine = (opts: any, canvas: any, ctx: any) => {
    const { i, bars, height } = opts;

    // draw the bar
    ctx.strokeStyle = "#212121";
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(i, this.centerY);
    ctx.lineTo(i, this.centerY + height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(i, this.centerY);
    ctx.lineTo(i, this.centerY - height);
    ctx.stroke();
  }
}





