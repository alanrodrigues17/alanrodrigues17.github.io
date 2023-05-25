import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { TodoButtonDeleteAllComponent } from './modules/components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './modules/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './modules/components/todo-list/todo-list.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
