import {Component, OnInit} from '@angular/core';
import {AppService} from '../../service/app-service';
import {List_of_attendee} from '../../model/list_of_attendee';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {
  loading = false;
  errorMessage;
  successMessage;
  attendees: any = [];


  constructor(private appservice: AppService) {
  }

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees() {
    this.loading = true;
    this.appservice.get('/attendees').subscribe(res => {
        console.log('response', res);
        this.loading = false;
        if (res.success) {
          this.attendees = res.data;
        }
      }, error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  onDelete(id) {
    if (id) {
      if (confirm('Are you sure you want to delete this?')) {
        console.log('id:', id);
        this.appservice.delete('/attendees' + '/' + id).subscribe(res => {
          console.log('res:', res);
        }, err => {
          console.log('err:', err);
        });
      }
    }
  }

}
