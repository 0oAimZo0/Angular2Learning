import {Component} from 'angular2/core';
import {CourseComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses><author></author>',
    directives: [CourseComponent,AuthorsComponent]
})
export class AppComponent { }
