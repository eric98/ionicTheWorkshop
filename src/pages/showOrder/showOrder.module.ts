import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowOrderPage } from './showOrder';

@NgModule({
  declarations: [
    ShowOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowOrderPage),
  ],
})
export class ShowOrderPageModule {}
