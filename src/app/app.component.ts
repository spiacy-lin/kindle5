import { Component } from '@angular/core';
import {GitHubService} from './github.service';

@Component({
  selector: 'app-root',
  template: `
  
  `,
  providers: [GitHubService]
})

export class AppComponent {
  constructor(private _githubService: GitHubService){
    this._githubService.getGitHubData('greg').subscribe(data => console.log(data));
  }
}
