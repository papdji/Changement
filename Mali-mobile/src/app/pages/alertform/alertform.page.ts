import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { updateDoc } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";


@Component({
  selector: 'app-alertform',
  templateUrl: './alertform.page.html',
  styleUrls: ['./alertform.page.scss'],
})
export class AlertformPage implements OnInit {
  validations_form: FormGroup;
  citys: Array<string>;
  categories: Array<string>;


  constructor(public formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.citys = [
      "Bamako",
      "Kayes",
      "Koulikoro",
      "Sikasso",
      "Ségou",
      "Mopti",
      "Tombouctou",
      "Gao",
      "Kidal",
      "Menaka",
      "Koutiala",
      "Niono"
    ]

    this.categories = [
      "Incendie",
      "Inonndation",
      "Secheresse"
    ];
    this.validations_form = this.formBuilder.group({
      city: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
    })

  }
  validation_messages = {
    'description': [
      { type: 'required', message: 'Description est requis.' }
    ]

  }

  onSubmit(city, categorie, description, fil){
    console.log(city, categorie, fil);
    console.log(Error);
    const storage = getStorage();
    
    this.router.navigate(["/alertes"]);
  }

}
