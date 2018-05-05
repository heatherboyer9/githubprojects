import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-commit-item]',
  templateUrl: './commit-item.component.html',
  inputs: ['commit', 'columns']
})
export class CommitItemComponent implements OnInit {

  @Input() commit: any;
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}
