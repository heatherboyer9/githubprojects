import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RepoService } from '../../services/repo.service';
import { Repo } from '../../models/repo.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html'
})
export class RepoListComponent {

  @Input() username: string;
  @Output() onSelectRepo = new EventEmitter<Repo>();
  repos: Repo[];

  getCommits(repo: Repo){
    this.onSelectRepo.emit(repo);
  }

  constructor(private repoService: RepoService) { }

  ngOnChanges() {
    this.loadRepo();
  }

  loadRepo(){
    if(this.username){
      this.repoService.getRepoListByUser(this.username).subscribe(repoItems => {
        this.repos = repoItems;
      });
    }
  }

}
