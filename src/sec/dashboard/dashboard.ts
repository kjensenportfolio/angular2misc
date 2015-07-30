import {Component, View, bootstrap} from 'angular2/angular2';
//import { Navigation } from './templates/navigation';
//import { Statistics } from './components/statistics';

@Component ({
    selector: 'dashboard'
})

@View ({
    template: '<p>Dashboard Template </p>'
})

//@RouteConfig([
//    {
//        path: '/dashboard',
//        components: {
//            navigation: Navigation,
//            statistics: Statistics
//        },
//        as: 'dashboard'
//    }
//])

class Dashboard {

}

bootstrap(Dashboard)
