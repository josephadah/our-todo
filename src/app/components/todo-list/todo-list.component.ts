import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todos = [
    {
      id: 1,
      title: "My first Todo"
    },
    {
      id: 2,
      title: "My second Todo"
    },
    {
      id: 3,
      title: "My third Todo"
    },
    {
      id: 4,
      title: "My fourth Todo"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
