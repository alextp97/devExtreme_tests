import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Proyecto DevExtreme';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
