import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import * as moment from 'moment';
@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss']
})
export class InformComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any = [];
  focus;
  focus1;

  peopleType: any;
  levelId = 1;
  level = [
    { id: 1, name: 'ระดับต่ำ' },
    { id: 2, name: 'ระดับกลาง' },
    { id: 3, name: 'ระดับสูง' }
  ];
  catalogId = 1;
  catalog = [{
    id: 1, name: 'ข้อมูลรั่วไหล'
  }]
  typeId = 1;
  type = [{
    id: 1, name: 'malware'
  }];

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    // other options are here...
  };
  date: any;
  time: any;
  model: IMyDateModel = null;

  name: any;
  event: any;
  detail: any;
  effect:any;
  cause:any;
  
  isCritical = false;
  isHelp = false;
  constructor() { }

  ngOnInit(): void {
    // this.date = 
    //    { year:2022, month: 6, day: 7 }
    this.date = { isRange: false, singleDate: { jsDate: new Date() } };


    this.time = {
      hour: +moment().format('HH'),
      minute: +moment().format('mm'),
    }
    console.log(this.time);

  }

  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  onDateChanged(event: IMyDateModel): void {
    console.log(event);

    // date selected
  }

}
