import { Injectable } from '@angular/core';

@Injectable()
export class WelcomeService {

  constructor() { }

  greeting(time) {
    if ( time > 8 && time < 12 ) {
      return 'Good morning!';
    } else if ( time > 12 && time < 20 ) {
      return 'Good afternoon!';
    }

    return 'Good evening!';
  }

}
