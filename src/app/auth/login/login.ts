import {Validators} from '@angular/forms';

export const LOGIN: any[] =
  [
    {
      id : 'userName',
      placeHolder: 'Email',
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
    { id: 'loginType',
      placeHolder: 'Login Type',
      type: 'select',
      selectList: ['UserAccessLevels', 'Id', 'Name'] ,
      list: [
        {id: 1, name: 'Admin'},
        {id: 2, name: 'Manager'},
      ],
      validator: ['', Validators.required],
      class: 'form-control',
    },
    {
      id : 'terms',
      placeHolder: 'Terms',
      type: 'checkbox',
      validator: ['', [Validators.requiredTrue]],
      class: 'form-control',
      text: 'Remember me',
    },
  ];
