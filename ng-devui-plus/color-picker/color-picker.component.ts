import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { saveRecentColors } from '../shared/utils';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() hide;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();
  color: string = "#b52d2d";
  selectedPanel: string = 'basic';
  recentlyUsed: Array<string> = ['#fff'];
  basicColors: Array<string> = ["#ffffff", "#ffd7d5", "#ffdaa9", "#fffed5", "#d4fa00", "#73fcd6", "#a5c8ff", "#ffacd5", "#ff7faa", "#d6d6d6", "#ffacaa", "#ffb995", "#fffb00", "#73fa79", "#00fcff", "#78acfe", "#d84fa9", "#ff4f79", "#b2b2b2", "#d7aba9", "#ff6827", "#ffda51", "#00d100", "#00d5ff", "#0080ff", "#ac39ff", "#ff2941", "#888888", "#7a4442", "#ff4c00", "#ffa900", "#3da742", "#3daad6", "#0052ff", "#7a4fd6", "#d92142", "#000000", "#7b0c00", "#ff4c41", "#d6a841", "#407600", "#007aaa", "#021eaa", "#797baa", "#ab1942"];

  constructor() { }

  ngOnInit() {
  }

  selectPanel(panel) {    
    this.selectedPanel = panel
  }

  receiveColor(color) {
    this.color = color
  }
  
  doConfirm() {
    this.saveRecentlyUsed()
    this.confirm.emit(this.color)
  }

  saveRecentlyUsed() {
    saveRecentColors(this.recentlyUsed, this.color);
  }

}
