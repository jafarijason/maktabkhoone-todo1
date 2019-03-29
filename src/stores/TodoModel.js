import { observable, action } from "mobx";

export default class TodoMoodel {
  store;
  // @observable
  id;
  @observable
  title;
  @observable
  completed;
  @observable
  destroy;
  constructor(store, title, completed, id, destroy) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
    this.destroy = destroy;
  }
  @action
  toggle() {
    this.completed = !this.completed;
  }

 
}
