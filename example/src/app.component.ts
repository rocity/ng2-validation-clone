import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { CustomValidators } from '../../src';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  num: number = 5;

  ngOnInit() {
    let password = new FormControl('', Validators.required);
    let certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

    this.form = new FormGroup({
      password: password,
      certainPassword: certainPassword
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}
