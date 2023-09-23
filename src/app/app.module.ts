import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreatePostFacebookComponent } from './create-post/facebook/create-post-facebook/create-post-facebook.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxDropzoneModule } from 'ngx-dropzone';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { PostAudienceFacebookComponent } from './create-post/facebook/post-audience-facebook/post-audience-facebook.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxDropzoneModule,
    MatTooltipModule,
    MatRadioModule,
    NgxEmojiPickerModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CreatePostFacebookComponent,
    PostAudienceFacebookComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
