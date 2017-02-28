import { Routes } from '@angular/router';

export const creditCardEntryRoutes: Routes = [
  {
    path: 'creditcard',
    loadChildren: '../creditcard/creditcard.module#CreditCardModule'
  }
];
