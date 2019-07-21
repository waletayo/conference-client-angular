import {Component, OnInit} from '@angular/core';
import {AppService} from '../service/app-service';

@Component({
  selector: 'app-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.css']
})
export class TalkListComponent implements OnInit {

  constructor(private apiService: AppService) {
  }

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees() {
    this.apiService.get('/attendees').subscribe(res => {
      console.log('res:', res);
    }, err => {
      console.log('err:', err);
    });
  }

}
