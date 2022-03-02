import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { AuthserviceService } from 'src/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  private auth = getAuth();
  constructor(
   public authService: AuthserviceService,
    private router: Router
    ) {}


  ngOnInit() {
  }
  public async signWithGoogle(){
    await this.authService.signWithGoogle();
  }
}
