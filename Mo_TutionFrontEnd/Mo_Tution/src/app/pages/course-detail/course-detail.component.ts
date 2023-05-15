import { Component, OnInit } from '@angular/core';
import { globalVariable } from '../../globals';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cards = [
    {
      subject: 'Mathematics',
      gender: 'Mrs',
      firstname: 'Satya',
      lastname: 'Das',
      content: 'She has 10 years of experience',
      details:
        'He is very experienced professional having degree from NIT Rourkela',
    },
    {
      subject: 'Science',
      gender: 'Mrs',
      firstname: 'Srabani',
      lastname: 'Pattanaik',
      content: 'She has 6 years of experience',
      details:
        'He is very experienced professional having degree from NIT Rourkela',
    },
    {
      subject: 'Gegraphy',
      gender: 'Mr',
      firstname: 'Mahesh',
      lastname: 'Mohanty',
      content: 'She has 16 years of experience',
      details:
        'He is very experienced professional having degree from NIT Rourkela',
    },
    {
      subject: 'English',
      gender: 'Mr',
      firstname: 'RajKishore',
      lastname: 'Behera',
      content: 'She has 8 years of experience',
      details:
        'He is very experienced professional having degree from NIT Rourkela',
    },
    {
      subject: 'History',
      gender: 'Mr',
      firstname: 'Bikash',
      lastname: 'Mishra',
      content: 'She has 3 years of experience',
      details:
        'He is very experienced professional having degree from NIT Rourkela',
    },
  ];

  cardClicked(card: any) {
    // alert("Card clicked"+card.title)
  }
}
