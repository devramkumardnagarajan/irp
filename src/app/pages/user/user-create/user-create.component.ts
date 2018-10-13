import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {REGISTER} from '../../../auth/register/register';
import {Service} from '../../../service/service';
import {UserForms} from './user-create';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {

  title: string = 'Create';
  formObj: any[]= UserForms;
  form: FormGroup;
  submitted = false;
  module: string = 'Users';
  constructor(private formBuilder: FormBuilder, private api: Service,
              private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    const  t = {};
    UserForms.map(f => t[f.id] = f.validator);
    this.form = this.formBuilder.group(t);
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.getEntity(id);
    }
    this.getAccessLevels();
  }
  getAccessLevels() {
    this.api.getAll('UserAccessLevels').subscribe(response => {
      this.formObj[7]['list'] = response.map(r => ({id: r.Id, name: r.Name}));
      });
  }
  getEntity(id: any) {
    this.api.get(this.module, id).subscribe(response => {
      const  data = {};
      UserForms.map(f => data[f.id] = response[f.id]);
      this.form.setValue(data);
    });
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
    this.api.add(this.module, this.form.value).subscribe(x => {
      console.info(x);
      this.submitted = false;
    });
  }
  goBack(): void {
    this.location.back();
  }

}
