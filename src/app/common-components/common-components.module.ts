import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomTabsComponent } from './custom-tabs/custom-tabs.component';

@NgModule({
  declarations: [CustomCardComponent, CustomTabsComponent],
  imports: [CommonModule],
  exports: [CustomCardComponent, CustomTabsComponent],
})
export class CommonComponentsModule {}
