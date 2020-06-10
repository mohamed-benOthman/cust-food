import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { LetterComponent } from './letter/letter.component';
import { CalendarComponent } from './calendar/calendar.component';
import { Upload2Component } from './upload2/upload2.component';
import { DownloadComponent } from './download/download.component';
import { FullScreenComponent } from './full-screen/full-screen.component';

@NgModule({
  declarations: [
    UploadComponent,
    LetterComponent,
    CalendarComponent,
    Upload2Component,
    DownloadComponent,
    FullScreenComponent,
  ],
  imports: [CommonModule],
  exports: [
    UploadComponent,
    LetterComponent,
    CalendarComponent,
    Upload2Component,
    DownloadComponent,
    FullScreenComponent,
  ],
})
export class IconsModule {}
