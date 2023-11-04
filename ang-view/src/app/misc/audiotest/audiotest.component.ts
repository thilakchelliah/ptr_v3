import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-audiotest',
  templateUrl: './audiotest.component.html',
  styleUrls: ['./audiotest.component.css']
})
export class AudiotestComponent implements OnInit, AfterViewInit {


  isAudBtnDis: boolean = false;
  panVal: number = 0;
  gainVal: number = 0.5;
  frequencyArray: any;
  analyser: any;
  request: any;
  flag = 0;
  height = 0;
  bars: number = 0;;
  lineWidth = 3;
  centerX: number = 0;
  centerY: number = 0;
  selectedfile: any;
  active = 1;

  @ViewChild('canvas') canvas!: ElementRef;
  context: any;

  //Audio globals
  panner: any;
  gainer: any;

  constructor(private _audioContext: AudioContext) {

  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    debugger;
    if (this._audioContext.state === 'suspended') {
      this._audioContext.resume();
    }
    this.analyser = this._audioContext.createAnalyser();
    this.panner = this._audioContext.createStereoPanner();
    this.gainer = this._audioContext.createGain();
    this.panner.pan.value = this.panVal;
    this.gainer.gain.value = this.gainVal;

    const canvasElem = this.canvas.nativeElement;
    this.context = canvasElem.getContext('2d')!;
    this.centerX = this.canvas.nativeElement.width / 2;
    this.centerY = this.canvas.nativeElement.height / 2;

  }

  PlayBeep() {
    this.isAudBtnDis = true;
    this.beep(this.panVal);
    setTimeout(() =>{
      this.isAudBtnDis = false;
    }, 5000);
    
  }

  playsrc() {
    debugger;
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      this._audioContext.resume();
      const track = this._audioContext.createMediaElementSource(audioElement);
      track.connect(this.gainer).connect(this.panner).connect(this.analyser)
      this.analyser.connect(this._audioContext.destination);
      audioElement.play();
      this.visualizeData(audioElement);
    }
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      $('#audtag').attr('src', URL.createObjectURL(event.target.files[0]))
    }
  }

  pannerChange() {
    this.panner.pan.value = this.panVal;
  }
  volumeChange() {
    this.gainer.gain.value = this.gainVal;
  }

  readAsDataURL(file: any) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      if (file instanceof File) {
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        reject(new Error("This type of object is not supported"));
      }
    });
  }



  //[assist]https://rilling.dev/blog/creating-oscillators-with-javascript/
  public beep(pan: number): void {

    this.panner.pan.setValueAtTime(pan, this._audioContext.currentTime);
    this.gainer.gain.value = 1;

    const oscillatorNode = this._audioContext.createOscillator();

    oscillatorNode.onended = () => oscillatorNode.disconnect();
    oscillatorNode.connect(this.gainer).connect(this.panner).connect(this.analyser);
    this.analyser.connect(this._audioContext.destination);

    oscillatorNode.start();
    oscillatorNode.stop(this._audioContext.currentTime + 5.5);
    this.visualizeData(oscillatorNode);
  }


  visualizeData = (osc: any) => {
    debugger;
    var animationController = window.requestAnimationFrame(this.visualizeData);
    if (osc.paused) {
      return cancelAnimationFrame(animationController);
    }
    const bincount = this.analyser.frequencyBinCount
    const songData = new Uint8Array(bincount);
    this.analyser.getByteFrequencyData(songData);
    const bar_width = 3;
    let start = 0;
    this.context = this.canvas.nativeElement.getContext("2d");
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      start = i * 4;
      //create a gradient for the  whole canvas
      let gradient = this.context.createLinearGradient(
        0,
        0,
        this.canvas.nativeElement.width,
        this.canvas.nativeElement.height
      );
      gradient.addColorStop(0.2, "#2392f5");
      gradient.addColorStop(0.5, "#fe0095");
      gradient.addColorStop(1.0, "purple");
      this.context.fillStyle = gradient;
      this.context.fillRect(start, this.canvas.nativeElement.height
        , bar_width, -songData[i] / 2.5);
    }
  };


}





