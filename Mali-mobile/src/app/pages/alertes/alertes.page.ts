import { Component, OnInit } from '@angular/core';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { AuthserviceService } from 'src/services/authservice.service';
import { slideOpts } from 'src/app/models/SlidOp';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.page.html',
  styleUrls: ['./alertes.page.scss'],

})

export class AlertesPage implements OnInit {
  public Recommendation: any;
  public slideOptions = slideOpts;
  private path: string;
  private db = getFirestore();
  constructor(
    private authService: AuthserviceService,
  ) { }

  ngOnInit() {
    this.path = this.authService.getPath();
    this.getAlertes();
  }


  public async getAlertes() {
    const docRef = doc(this.db, 'Recommendations');
    const snapDoc = await getDoc(docRef);
    this.Recommendation = snapDoc.data();
  }

  public onSwiper(swiper: any) {
    console.log(swiper);
  }

  public onSlideChange() {
    console.log('slide change');
  }

}
