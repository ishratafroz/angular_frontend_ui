import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tabs',
  templateUrl: './custom-tabs.component.html',
  styleUrls: ['./custom-tabs.component.css'],
})
export class CustomTabsComponent implements OnInit {
  @Input() tabs = [''];
  @Input() selectedTab = '';
  @Input() onTabClick!: (newSelectedtab: string) => void;
  constructor() {}

  ngOnInit(): void {}

  tabClick = (target: string) => {
    if (target != this.selectedTab) {
      console.log({ target });
      this.onTabClick(target);
    }
  };
}
