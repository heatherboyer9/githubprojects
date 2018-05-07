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
  @Output() onUpdateMessage = new EventEmitter<string>();
  repos: Repo[];
  selectedRepo: Repo;

  getCommits(repo: Repo){
    this.selectedRepo = repo;
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
        if(this.repos.length > 0){
          //load the first project's commits
          this.getCommits(this.repos[0]);
        }
      }, error => {
        console.log('error', error);
        this.onUpdateMessage.emit("This user can not be found.");
      });
    }
  }

}
