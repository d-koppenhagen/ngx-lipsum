import { Injectable } from '@angular/core';
import { loremIpsum, LoremIpsumParams } from 'lorem-ipsum';

@Injectable({ providedIn: 'root' })
export class LipsumService {
  constructor() {}
  get(params?: LoremIpsumParams) {
    return loremIpsum(params);
  }
}
