import { Component, OnInit } from '@angular/core';
import {Service} from '../../service/service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LOGIN} from './login';
import {FormComponent} from '../../shared/form/form.component';
import { CheckboxComponent } from '../../shared/inputs/checkbox/checkbox.component';
import { TextboxComponent } from '../../shared/inputs/textbox/textbox.component';
@Component({
  selector: 'ngx-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  title: string = 'SignIn';
  formObj: any[]= LOGIN;
  form: FormGroup;
  submitted = false;
  module: string = 'auth/login';
  constructor(private formBuilder: FormBuilder, private api: Service) { }

  ngOnInit() {
    const  t = {};
    this.formObj.map(f => t[f.id] = f.validator);
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
    this.api.login(this.module, this.form.value).subscribe(x => {
      console.info(x);
      alert('SUCCESS!! :-)');
      this.submitted = false;
    });
  }

}
