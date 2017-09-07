import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActionSheetController, IonicPage} from 'ionic-angular';

@IonicPage({name: 'about'})
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    constructor(public navCtrl: NavController,
                public actionSheetCtrl: ActionSheetController) {
    };

    action() {
        let actionSheet = this.actionSheetCtrl.create({
            title: '确定删除吗',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    gotoHero() {
        this.navCtrl.push('heros', {heroId: 21});
    }
}
