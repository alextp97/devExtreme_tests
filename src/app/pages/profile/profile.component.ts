import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: 'Juan Luis',
      LastName: 'Paulano',
      Prefix: 'Mr.',
      Position: 'Frontend Consultant',
      Picture: '',
      BirthDate: new Date('1974/11/5'),
      HireDate: new Date('2005/05/11'),
      /* tslint:disable-next-line:max-line-length */
      Notes:
        'Juan Luis is a Frontend Consultant. He is studying DevExtrme, a technology used by frameworks like Angular, Ionic and React',
      Address: '4600 N Virginia Rd.',
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
    };
  }
}
