import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonRouterOutlet } from '@ionic/angular';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.page.html',
  styleUrls: ['./alertes.page.scss'],

})

export class AlertesPage implements OnInit {
  photo:any;


constructor( public routerOutlet: IonRouterOutlet) { HttpClient; }

  ngOnInit() {
  }

}



