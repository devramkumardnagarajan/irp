import {Validators} from '@angular/forms';

export const REGISTER: any[] =
  [
    { id: 'fullName',
      placeHolder: 'Full Name',
      type: 'text',
      validator: ['', Validators.required],
      class: 'form-control',
    },
    /*{
      id : 'lastName',
      placeHolder: 'Last Name',
      validator: ['', Validators.required],
      class: 'form-control',
    },*/
    {
      id : 'email',
      placeHolder: 'Email',
      type: 'text',
      validator: ['', [Validators.required, Validators.email]],
      class: 'form-control',
    },
    {
      id : 'password',
      placeHolder: 'Password',
      type: 'password',
      validator: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      class: 'form-control',
    },
    {
      id : 'conformPassword',
      placeHolder: 'Confirm Password',
      type: 'password',
      validator: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      class: 'form-control',
    },
    {
      id : 'terms',
      placeHolder: 'Terms',
      type: 'checkbox',
      validator: ['', [Validators.requiredTrue]],
      class: 'form-control',
      text: 'Agree to <a  href="#" target="_blank"><strong >Terms &amp; Conditions</strong></a>',
    },
  ];
