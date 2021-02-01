class Todo {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }

    list() {
        const tasks = `You have ${this.tasks.length} tasks left for today`;
        console.log(tasks);
    }

    add(text) {
        this.tasks.push({
            text: text,
            completed: false});
            console.log(`New task was added successfully`)

    }

    edit(index, text){
        if (index < 0 || index > this.tasks.length){
            console.error ('ERROR: Task was not found')
        }
        this.tasks[index] = text;
    }

    remove(index) {
        if (index < 0 || index > this.tasks.length){
            console.error ('ERROR: Task was not found')
        } else {
            console.log(`Task no. ${index} was removed successfully`)
        }
        const newList = [];
        for (let i = 0; i < this.tasks.length; i++){
            if (i !== index){
                newList.push(this.tasks[i]);
            }
        }
        this.tasks = newList;
    }

    print(){
        console.table(this.tasks);
    }

    changeStatus(index, status){
        if (index < 0 || index > this.tasks.length){
            console.error ('ERROR: Task was not found')
        }
        if (typeof status !== 'boolean'){
            console.error ('ERROR: set status true/false')
        } else{
           console.log(`Task no. ${index} status was changed`) 
        }
       this.tasks[index].completed = status
       
            
    }

    selectCompletedOnly() {
        const completedList = []
        for (const task of this.tasks) {
            if (task.completed === true) {
                completedList.push(task);
            }
        }   console.table(completedList);
    }

    selectNotCompleted(){
        const notCompletedList = []
        for (const task of this.tasks) {
            if (task.completed === false) {
                notCompletedList.push(task);
            }
        }   console.table(notCompletedList);
    }

}

export {Todo};