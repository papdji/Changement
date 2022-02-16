import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MbscEventcalendarModule } from '@mobiscroll/angular';
import { MbscSelectModule } from '@mobiscroll/angular';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';

import { RecommendationPageRoutingModule } from './recommendation-routing.module';

import { RecommendationPage } from './recommendation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationPageRoutingModule,
    MbscEventcalendarModule,
    MbscSelectModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [RecommendationPage]
})
export class RecommendationPageModule {}
