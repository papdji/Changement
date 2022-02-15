import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


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
  onSubmit(values){
    console.log(values);
    this.router.navigate(["/alertes"]);
  }

}
