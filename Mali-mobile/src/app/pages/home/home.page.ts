import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadingCtrl: any;
  loading: any;

  constructor(public modalCtrl: ModalController, public loadingController: LoadingController) {

   }

  ngOnInit() {}

}
