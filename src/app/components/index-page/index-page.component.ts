import {Component, OnInit} from '@angular/core';
import {Create_talk} from '../../model/create_talk';
import {AppService} from '../../service/app-service';
import {NgForm} from '@angular/forms';
import {Create_attendee} from '../../model/create_attendee';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  loading = false;
  successMessage;
  errorMessage;
  newTalk: Create_talk = new Create_talk();
  newAttendee: Create_attendee = new Create_attendee();
  talks: any = [];
  talkId: any;
  loadingAttendee = false;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getTalks();
  }

  createTalk(newTalkForm: HTMLFormElement) {
    if (!this.doValidation) {
      return;
    }
    this.loading = true;
    this.appService.post('/talks', this.newTalk)
      .subscribe(res => {
        this.loading = false;
        if (res.success === true) {
          newTalkForm.reset();
          this.getTalks();
          this.successMessage = res.message;
        }
      }, error => {
        this.loading = false;
        console.log(error);
        this.errorMessage = error.error.title;
      });
  }

  getTalks() {
    this.appService.get('/talks').subscribe(res => {
      if (res.success) {
        this.talks = res.data;
        console.log('talks:', this.talks);
      }
    }, err => {
      console.log('res:', err);
    });
  }

  createAttendee(attendeeForm: NgForm) {
    if (!this.doAttendeeValidation()) {
      return;
    }
    if (this.talkId) {
      this.newAttendee.talk = this.talkId;
    }
    this.loadingAttendee = false;
    this.appService.post('/attendees', this.newAttendee).subscribe(res => {
      console.log('res', res);
      if (res.status === true) {
        this.loadingAttendee = false;
        attendeeForm.reset();
        this.successMessage = res.message;
      }
    }, err => {
      console.log('err:', err);
    });
  }

  selectTalk(talkId) {
    console.log('talk id:', talkId);
    if (talkId) {
      this.talkId = talkId;
    }
  }


  doValidation(): boolean {
    if (this.newTalk.title === undefined || this.newTalk.title === null || this.newTalk.title === '') {
      this.errorMessage = 'title field cannot be empty';
      return false;
    }
    if (this.newTalk.content === undefined || this.newTalk.content === null || this.newTalk.content === '') {
      this.errorMessage = 'content field cannot be empty';
      return false;
    }
    if (this.newTalk.speaker === undefined || this.newTalk.speaker === null || this.newTalk.speaker === '') {
      this.errorMessage = 'speaker field cannot be empty';
      return false;
    }


    return true;

  }

  doAttendeeValidation(): boolean {
    if (this.newAttendee.attendee_name === undefined || this.newAttendee.attendee_name === null || this.newAttendee.attendee_name === '') {
      this.errorMessage = 'attendee_name field cannot be empty';
      return false;
    }
    if (this.newAttendee.present_location === undefined || this.newAttendee.present_location === null || this.newAttendee.present_location === '') {
      this.errorMessage = 'present location  field cannot be empty';
      return false;
    }
    if (this.newAttendee.gender === undefined || this.newAttendee.gender === null || this.newAttendee.gender === '') {
      this.errorMessage = 'gender field cannot be empty';
      return false;
    }
    return true;
  }


}
