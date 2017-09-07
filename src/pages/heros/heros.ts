import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({name: 'heros'})
@Component({
    selector: 'page-heros',
    templateUrl: 'heros.html'
})
export class HerosPage implements OnInit {

    constructor(public navCtrl: NavController, public params: NavParams) {

    }

    ngOnInit() {
        console.log(this.params.get('heroId'));
    }

}
