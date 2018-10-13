import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {REGISTER} from '../../auth/register/register';
import {Service} from '../../service/service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {UserForms} from '../../pages/user/user';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  title: string = this.route.snapshot.paramMap.get('module');
  formObj: any[];
  form: FormGroup;
  submitted = false;
  module: string = this.route.snapshot.paramMap.get('module');
  id: number = parseInt(this.route.snapshot.paramMap.get('id'), 0);
  action: string = this.id === 0 ? 'Create' : 'Edit';
  constructor(private formBuilder: FormBuilder, private api: Service,
              private location: Location, private route: ActivatedRoute) {
    switch (this.module) {
      case 'users':
                this.formObj = UserForms;
                break;
      case 'projects':
                this.formObj = UserForms;
                break;
      default:
              this.formObj = this.formObj;
    }
  }

  ngOnInit() {
    const  t = {};
    this.formObj.map(f => t[f.id] = f.validator);
    this.form = this.formBuilder.group(t);
    this.formObj.map((f, i ) => {
      if (f.type === 'select') {
         this.getList(f.selectList, i);
      }
    });
    if (this.id > 0) {
      this.getEntity(this.id);
    }
  }
  getList(list: any, i: number) {
    console.info('list', list);
    this.api.getAll(list[0]).subscribe(response => {
      this.formObj[i].list = response.map(r => ({id: r[list[1]], name: r[list[2]]}));
    });
  }
  getEntity(id: any) {
    this.api.get(this.module, id).subscribe(response => {
      const  data = {};
      this.formObj.map(f => {
        data[f.id] = (typeof response[f.id] === 'string') ? response[f.id].trim() : response[f.id];
      });
      this.form.setValue(data);
    });
    console.info(this.form);
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
    if ( this.id === 0) {
      this.api.add(this.module, this.form.value).subscribe(x => {
        console.info(x);
        this.submitted = false;
        this.goBack();
      });
    }else {
      this.api.update(this.module, this.id, this.form.value).subscribe(x => {
        console.info(x);
        this.submitted = false;
        this.goBack();
      });
    }
  }
  goBack(): void {
    this.location.back();
  }


}
