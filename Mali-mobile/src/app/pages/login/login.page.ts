import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthserviceService } from 'src/services/authservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {username: '', password: ''};
  error = '';
  submitted: boolean;
  constructor(
    public authService: AuthserviceService,
    public router: Router,
    private loading: LoadingController,
   private http: HttpClient,
    public alertController: AlertController,
  ) { }


  async presentAlert(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Connexion échouée',
      message: 'Identifiant incorrect !',
      buttons: ['ok']
    });
    await alert.present();
  }

  home(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }


  logIn(email, password) {
    this.authService.login(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['alertform']);
        } else {
          window.alert('Email non vérifié')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }


}
