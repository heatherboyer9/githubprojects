import { Component } from '@angular/core';
import { Repo } from './models/repo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  username: string;
  selectedrepo: Repo;

  getRepos(searchForm){
    this.username = searchForm.txtSearch;
    this.selectedrepo = null;
  }

  onSelectRepo(repo: Repo){
    this.selectedrepo = repo;
  }
}
