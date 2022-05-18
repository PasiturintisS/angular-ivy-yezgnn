import { FunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FailuerComponent } from '../failuer/failuer.component';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  ngOnInit(): void {
    document.querySelector('.btnn').classList.add('btnn-green');
  }
  isTrue = true;
  s = new SuccessComponent();
  f = new FailuerComponent();
  style = document.querySelector('.btnn');

  toggleTrueFalse() {
    if (this.isTrue) {
      this.isTrue = false;
      document.querySelector('.btnn').classList.remove('btnn-green');
      document.querySelector('.btnn').classList.add('btnn-red');
    } else {
      this.isTrue = true;
      document.querySelector('.btnn').classList.remove('btnn-red');
      document.querySelector('.btnn').classList.add('btnn-green');
    }
  }

  onStart() {
    this.isTrue ? this.s.showAlert() : this.f.showAlert();
  }
}
