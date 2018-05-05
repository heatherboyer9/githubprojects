import { Component, OnInit } from '@angular/core';
import { Repo } from './models/repo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  username: string;
  selectedrepo: Repo;
  message: string;

  getRepos(searchForm){
    this.message = '';
    this.username = searchForm.txtSearch;
    this.selectedrepo = null;
  }

  onSelectRepo(repo: Repo){
    this.selectedrepo = repo;
  }

  onUpdateMessage(msg: string){
    this.message = msg;
    this.username = '';
  }

  ngOnInit(){
    //Initialize the start screen to my own repository
    this.username = 'heatherboyer9';
  }
}
