import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';

@Component({
  selector: 'author',
  template: `
    <h3>Authors</h3>
    {{ title }}
    <ul>
      <li *ngFor="#author of authors">
      {{author}}
      </li>
    </ul>
  `,
  providers: [AuthorsService]
})

export class AuthorsComponent {
    title = 'Title for the authors page';
    authors:string[];

    constructor(authorsService: AuthorsService) {
      this.authors = authorsService.getAuthors();
    }
}
