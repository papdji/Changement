import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/accueil', icon: 'home' },
    { title: 'recommendation', url: '/recommendation', icon: 'folder' },
    { title: 'A propos', url: '/abouts', icon: 'stats-chart' },
    { title: 'Confidentialité', url: '/confidentialite', icon: 'create' },
    { title: 'Connexion', url: '/login', icon: 'person' }
  ];
  public labels = ['Test'];
  public dark = false;

  constructor(private platform: Platform,
    private router: Router,
    private menu: MenuController,
    private statusBar: StatusBar) {

    }


}
