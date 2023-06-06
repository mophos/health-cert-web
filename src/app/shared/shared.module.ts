import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateThPipe } from './date-th.pipe';
import { DndDirective } from './dnd.directive';



@NgModule({
  declarations: [
    DateThPipe,
    DndDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DndDirective
  ]
})
export class SharedModule { }
