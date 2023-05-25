import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emitItemTask = new EventEmitter;
  public itemTask: string = "";

  public submitItemTask() {
    this.itemTask = this.itemTask.trim();
    if (this.itemTask) {
      this.emitItemTask.emit(this.itemTask);
      this.itemTask = "";
    }
  }

}
