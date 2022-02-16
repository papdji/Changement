import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthserviceService } from 'src/services/authservice.service';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: User;
  login = { username: '', password: '' };
  error = '';
  private db= getFirestore();
  username: any;
  password: any;
  user:'';


  constructor(
    public authService: AuthserviceService,
    public router: Router,
    private loading: LoadingController,
    private http: HttpClient,
    public alertController: AlertController,

  ) { }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'alert',
      subHeader: 'Connexion échouée',
      message: 'Identifiant incorrect !',
      buttons: ['ok']
    });
    await alert.present();
  }

  home() {
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }
  loginGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // Cela vous donne un jeton d'accès Google. Vous pouvez l'utiliser pour accéder à l'API Google.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // Les informations sur l'utilisateur connecté.
        const user = result.user;
        await setDoc(doc(this.db, "Utilisateur", user.uid),
        {
          "username": user.displayName,
          "password": "",
          "email":user.email,
          "id":user.uid,
        });
        console.log(user)
        // ...
      }).catch((error) => {
        // Gérer les erreurs ici.
        const errorCode = error.code;
        const errorMessage = error.message;
        // L'e-mail du compte de l'utilisateur utilisé.
        const email = error.email;
        // Le type AuthCredential qui a été utilisé.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error)
      });
  }

}
