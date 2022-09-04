import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  selectedTab: string = 'images';
  @Output()  onTabClick = new EventEmitter<string>();
  ngOnInit(): void  {
  }
  selectTab(tab:string) {
    this.selectedTab = tab;
  }

}
