import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  openCapacitorSite = async () => {
  await Browser.open({ url: 'http://capacitorjs.com/?event=123456789' , presentationStyle: 'popover', toolbarColor: '#206a98'});
};

}
