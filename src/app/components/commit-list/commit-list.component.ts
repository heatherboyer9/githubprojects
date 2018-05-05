import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../models/repo.model';
import { Commit } from '../../models/commit.model';
import { CommitService } from '../../services/commit.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html'
})
export class CommitListComponent implements OnInit {
  
  @Input() repo: Repo;
  @Input() username: string;
  columns: any[];
  commits: Commit[];
  message: string;

  constructor(private commitService: CommitService){}

  ngOnInit() {
    this.columns = ["Message", "Author", "Commit Date", "View"]
  }

  ngOnChanges() {
    this.commits = null;
    this.message = '';
    this.loadCommits();
  }

  loadCommits(){
    if(this.repo){
      this.commitService.getCommitListByRepo(this.username, this.repo.name).subscribe(commitItems => {
        this.commits = commitItems;
      }, error => {
        console.log('error', error);
        this.message = "There are no commits for this repository.";
      });
    }
  }
}
