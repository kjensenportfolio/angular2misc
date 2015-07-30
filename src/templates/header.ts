/**
 * Created by kjensen on 7/29/15.
 */
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
@Component({
    selector: 'header'
})
@View({
    templateUrl: './header.html',
    styleUrls: ['./header.css'],
    directives: [NgFor, NgIf]
})

class Head {
    constructor() {
    }
}

bootstrap(Head);
