import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostLoginModule } from './post-login/post-login.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostLoginModule,
    HttpClientModule,FormsModule,
    CommonComponentsModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
