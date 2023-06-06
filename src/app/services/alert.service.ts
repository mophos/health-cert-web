import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastr: ToastrService,
  ) { }

  error(detail = 'กรุณาลองใหม่อีกครั้ง', head = 'เกิดข้อผิดพลาด') {
    this.toastr.error(detail, head,
      {
        timeOut: 4000,
        closeButton: true,
        progressBar: true
      }
    );

  }

  success(detail = 'ดำเนินการสำเร็จ', head = '') {
    this.toastr.success(detail, head,
      {
        timeOut: 4000,
        closeButton: true,
        progressBar: true
      });
  }
}