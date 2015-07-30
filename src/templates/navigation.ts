import {Component, View, bootstrap, NgFor, NgIf, Parent} from 'angular2/angular2';
@Component({
    selector: 'nav'
})
@View({
    templateUrl: 'src/templates/navigation.html',
    styleUrls: ['lib/styles/navigation.css'],
    directives: [NgFor, NgIf]
})

class NavigationComponent {
    tabs: Array<string>;
    constructor() {
        this.tabs = [
            { name:"Home", url: '/dashboard', children: [{ name:"Reminders", url: '/reminders'}]},
            { name:"Marketing and Sales", url: '/marketing'},
            { name:"Inventory", url: '/inventory'},
            { name:"Accounting", url: '/accounting'},
            { name:"Client", url: '/client'},
            { name:"Administration", url: '/administration'}
        ];
    }
}

export class tabs {

    constructor() {
        this.visible = true;
    }

    toggle() {
        this.visible = !this.visible;
    }
}

bootstrap(NavigationComponent);
