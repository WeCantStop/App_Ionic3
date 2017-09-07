import { NgModule } from '@angular/core';
import { HerosPage } from "./heros";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [HerosPage],
    imports: [IonicPageModule.forChild(HerosPage)]
})
export class FindPageModule { }