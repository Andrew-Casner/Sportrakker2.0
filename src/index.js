import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Sportrakker20} from 'sportrakker-2-0';

@Component({
  selector: 'main'
})

@View({
  directives: [Sportrakker20],
  template: `
    <sportrakker-2-0></sportrakker-2-0>
  `
})

class Main {

}

bootstrap(Main);
