/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {REGISTER} from './register';
import { Service } from '../../service/service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title: string = 'Register';
  formObj: any[]= REGISTER;
  form: FormGroup;
  submitted = false;
  module: string = 'auth/register';
  constructor(private formBuilder: FormBuilder, private api: Service) { }

  ngOnInit() {
    const  t = {};
    REGISTER.map(f => t[f.id] = f.validator);
    this.form = this.formBuilder.group(t);
  }
  onChange($event) {
    this.form.controls[$event.target.id].setValue($event.target.checked);
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.api.register(this.module, this.form.value).subscribe(x => {
      console.info(x);
      alert('SUCCESS!! :-)');
      this.submitted = false;
    });
  }
}
