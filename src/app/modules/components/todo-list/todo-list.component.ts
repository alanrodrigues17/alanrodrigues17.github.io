import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../home/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  deleteItem(item: number) {
    this.taskList.splice(item, 1);
  }

  deleteAllItem() {
    const confirm = window.confirm("Deseja realmente excluir tudo?");
    if (confirm) {
      this.taskList = [];
      localStorage.clear();
    }
  }

  public setEmitItemTask(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar??");

      if (confirm) {
        this.deleteItem(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
