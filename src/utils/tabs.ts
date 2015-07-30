import {Component, View, bootstrap}  from 'angular2/angular2';
import {Tabs, Tab} from 'lib/js/tabs';
@Component({
    selector: 'tabbed'
})
@View({
    template: '<tabs> <tab [tab-title]="\'Tab 1\'">Tab 1 Content</tab> <tab tab-title="Tab 2">Tab 2 Content</tab> </tabs>',
    directives: [Tabs, Tab]
})
class TabComponent {}

bootstrap(TabComponent);
