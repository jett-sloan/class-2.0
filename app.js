class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
        }
        honk = function(){
            console.log('BEEP!!')
    }
    toString = function(){
        return `${this.year} ${this.make} ${this.model}`
    }
}
const myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString() 

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numwheels = 4;

    }
}
const myNewCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
        this.numwheels = 2;
    }
    revEngine(){
        return `Vroom`
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myFirstMotorcycle.toString())




class ToDo {
    constructor(task) {
      this.task = task;
      this.isCompleted = false;
    }
  
    toggleCompletion() {
      this.isCompleted = !this.isCompleted;
    }
  
    render() {
      const listItem = document.createElement('li');
      listItem.textContent = this.task;
  
      if (this.isCompleted) {
        listItem.classList.add('completed');
      }
  
      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Toggle Completion';
      toggleButton.addEventListener('click', () => {
        this.toggleCompletion();
        this.updateDOM();
      });
  
      listItem.appendChild(toggleButton);
      return listItem;
    }
  
    updateDOM() {
      const taskList = document.getElementById('taskList');
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
  
      tasks.forEach(task => {
        taskList.appendChild(task.render());
      });
    }
  }
  
  const tasks = [];
  
  document.getElementById('addButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();
  
    if (taskDescription !== '') {
      const task = new ToDo(taskDescription);
      tasks.push(task);
      taskInput.value = '';
      task.updateDOM();
    } else {
      alert('Please enter a valid task.');
    }
  });
  
  
  