import { Component, OnInit } from '@angular/core';
import { globalVariable } from '../../globals';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
  ngOnDestroy() {
    // alert("Dest")
  }
}
