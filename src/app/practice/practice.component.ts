import { FunctionExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FailuerComponent } from '../failuer/failuer.component';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  isTrue = true;
  s = new SuccessComponent();
  f = new FailuerComponent();

  toggleTrueFalse() {
    this.isTrue ? (this.isTrue = false) : (this.isTrue = true);
  }

  onStart() {
    this.isTrue ? this.s.showAlert() : this.f.showAlert();
  }
}
