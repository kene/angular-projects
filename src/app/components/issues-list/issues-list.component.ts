import { Component, OnInit } from '@angular/core';
import { BugService } from '../../shared/bug.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  issuesList: any = [];


  constructor(
    public bugService: BugService
  ) { }

  ngOnInit() {
    this.loadIssues();
  }


  // Issues list
  loadIssues(){
    return this.bugService.getIssues().subscribe(
      (data: { }) => {
        this.issuesList = data;
      })
  }

  // Delete issue
  deleteIusse(data){
      var index = index = this.issuesList.map(x => {return x.issue_name}).indexOf(data.issue_name);
       return this.bugService.deleteBug(data.id).subscribe(res => {
        this.issuesList.splice(index, 1)
         console.log('Issue deleted!')
       });
  }
  



}
