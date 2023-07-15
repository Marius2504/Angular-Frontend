import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message= '';
  @Output() newMessage = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }
  public emitData(value:string){
    const obj = {
      id : 1,
      name: value
    };
    this.newMessage.emit(value);
    this.newMessage.emit(obj);
  }
  
}
