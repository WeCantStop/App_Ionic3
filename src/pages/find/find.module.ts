import { NgModule } from '@angular/core';
import { FindPage } from "./find";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [FindPage],
    imports: [IonicPageModule.forChild(FindPage)]
})
export class FindPageModule { }