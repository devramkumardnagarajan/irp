import { Component, OnInit } from '@angular/core';
import {Service} from '../../service/service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LOGIN} from './login';
import {Router} from '@angular/router';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import {NotificationsComponent} from '../../pages/components/notifications/notifications.component';
import 'style-loader!angular2-toaster/toaster.css';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title: string = 'SignIn';
  formObj: any[]= LOGIN;
  form: FormGroup;
  submitted = false;
  module: string = 'auth/login';
  notification: any = NotificationsComponent;
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  content = `I'm cool toaster!`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;
  constructor(private formBuilder: FormBuilder, private api: Service,
              private router: Router, private toasterService: ToasterService) { }

  ngOnInit() {
    const  t = {};
    this.formObj.map(f => t[f.id] = f.validator);
    this.form = this.formBuilder.group(t);
  }
  onChange($event) {
    this.form.controls[$event.target.id].setValue($event.target.checked);
  }

  // convenience getter for easy access to form fields
  /*get f() { return this.form.controls; }*/

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    const this2 = this;
    this.api.login(this.module, this.form.value).subscribe(x => {
      console.info(x);
      if (x.status === 'success') {
        this2.showToast('success', 'Success', 'Logged in Successfully');
        localStorage.setItem('token', x.token);
        this.submitted = false;
        this.router.navigate(['/admin']);
      }else {
        this2.showToast('error', 'Failed', 'Invalid Credentials');
      }
    });
  }
  showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}
