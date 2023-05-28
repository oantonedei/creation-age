import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppCommonModule } from '@common/app-common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '@modules/auth/services/user.service';
import { TokenizerInterceptor } from '@modules/auth/interceptors/tokenizer.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCommonModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000,
      enableHtml: true,
      newestOnTop: false,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFunction,
      deps: [UserService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenizerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppFunction(userService: UserService): () => void {
  return () => {
    const localStorage_state = localStorage.getItem('USER_STATE');
    if (localStorage_state) {
      userService.setUserState(JSON.parse(localStorage_state));
    }
  };
}