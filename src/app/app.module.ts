import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { PracticeComponent } from './practice/practice.component';
import { SuccessComponent } from './success/success.component';
import { FailuerComponent } from './failuer/failuer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PracticeComponent,
    SuccessComponent,
    FailuerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
