import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsernameValidator } from '../validators/username.validator';
import { PhoneValidator } from '../validators/phone.validator';
import { PasswordValidator } from '../validators/password.validator';
import { CountryPhone } from './country-phone.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  countries: Array<CountryPhone>;
  genders: Array<string>;
  profiles: Array<string>;



  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    //  Nous n'utilisons que quelques pays au hasard, cependant, vous pouvez utiliser les pays dont vous avez besoin en les ajoutant simplement à cette liste.
    // vous pouvez également utiliser une bibliothèque pour obtenir tous les pays du monde.
    this.countries = [
      new CountryPhone('ML', 'Mali'),
      new CountryPhone('BF', 'Burkina Faso'),
      new CountryPhone('SN', 'Sénégal'),
      new CountryPhone('CI', 'Ivoir'),
      new CountryPhone('FR', 'France')
    ];

    this.genders = [
      "Homme",
      "Femme"
    ];

    this.profiles = [
      "Cultivateur",
      "Jardinier",
      "Particulier",
      "Acteur du climat"
    ];

    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    let country = new FormControl('', Validators.required);
    let phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.validCountryPhone(country)
    ]));
    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: new FormControl('', Validators.required),
      profile: new FormControl('', Validators.required),
      country_phone: this.country_phone_group,
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Le nom utilisateur est requis.' },
      { type: 'minlength', message: 'Le nom utilisateur doit comporter au moins 5 caractères.' },
      { type: 'maxlength', message: 'Le nom utilisateur ne peut pas comporter plus de 25 caractères.' },
      { type: 'pattern', message: 'Votre nom utilisateur ne doit contenir que des chiffres et des lettres.' },
      { type: 'validUsername', message: 'Votre nom utilisateur a déjà été pris.' }
    ],
    'name': [
      { type: 'required', message: 'Nom est requis.' }
    ],
    'lastname': [
      { type: 'required', message: 'Prénom est requis.' }
    ],
    'email': [
      { type: 'required', message: 'Email est requis.' },
      { type: 'pattern', message: 'Veuillez entrer un email valide.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone est requis.' },
      { type: 'validCountryPhone', message: 'Le téléphone est incorrect pour le pays sélectionné.' }
    ],
    'password': [
      { type: 'required', message: 'Mot de passe est requis.' },
      { type: 'minlength', message: 'Le mot de passe doit comporter au moins 5 caractères.' },
      { type: 'pattern', message: 'Votre mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirmation du mot de passe est requis.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Non concordance des mots de passe.' }
    ],
    'terms': [
      { type: 'pattern', message: 'Vous devez accepter les termes et conditions.' }
    ],
  };

  onSubmit(values){
    console.log(values);
    this.router.navigate(["/home"]);
  }
}
