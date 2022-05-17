import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failuer',
  templateUrl: './failuer.component.html',
  styleUrls: ['./failuer.component.css'],
})
export class FailuerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  showAlert() {
    alert('Start Faild ): !!!');
  }
}
