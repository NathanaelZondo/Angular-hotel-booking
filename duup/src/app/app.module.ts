import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolComponent } from './tool/tool.component';
import { RouterModule,Routes } from '@angular/router';
import { PayComponent } from './pay/pay.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    PayComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{path:'tool',component:ToolComponent},
  {path:'pay',component:PayComponent},
{path:'feedback',component:FeedbackComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
