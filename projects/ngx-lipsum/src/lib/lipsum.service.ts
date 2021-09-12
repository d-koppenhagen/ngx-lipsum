import { Injectable } from '@angular/core';
import { loremIpsum, ILoremIpsumParams } from 'lorem-ipsum';

@Injectable({
  providedIn: 'root',
})
export class LipsumService {
  constructor() {}
  get(params?: ILoremIpsumParams) {
    return loremIpsum(params);
  }
}
