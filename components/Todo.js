class Todo {                                         // inicijuojame objekta
    constructor (name) {                            // constructor priimta viena objekta su parametru (name)
        this.name = name;                          // inicijuojame globalius kintamuosius
        this.tasks = [];
    }

    list() {                                     // objekto funkcija kuri atlieka saraso isspaudinima
        const tasks = `You have ${this.tasks.length} tasks left for today`; // inicijuojame kintamaji ir nurodome norimus parametrus (siuo atveju tekstas)
        console.log(tasks);                     // isspausdiname tasks nurodyta teksta i console
    }

    add(text) {                                 // objekto funkcija kuri atlieka pridejimo funkcija su vienu parametru text
        this.tasks.push({                       // nurodome, kad i kintamaji this.tasks=[] pridedame siuos irasus
            text: text,                         // kintamasis text bus lygus objekto funkcijos nurodytam parametrui add(text)
            completed: false});                 // pagal nutylejima visi irasai objekte tures papildoma kategorija su false reiksme
            console.log(`New task was added successfully`)      // po inicijavimo isspausdiname tinkama zinute

    }

    edit(index, text){                          // objekto funkcija kuri atlieka redagavimo funkcija su dviem parametrais index(kuri irasa keisti) text(naujas iraso tekstas)
        if (index < 0 || index > this.tasks.length){    // tikriname, jeigu nurodytas iraso index nurodytas neteisingai (tokio nera)
            console.error ('ERROR: Task was not found') // ismeta klaida
        }
        this.tasks[index] = text;                       // jeigu klaidu nera, objekte su nurodytu index tekstas bus pakeistas nauju tekstu
    }

    remove(index) {                             // objekto funkcija kuri atlieka salinimo funkcija su vienu parametri index(kuri irasa trinti) 
        if (index < 0 || index > this.tasks.length){  // tikriname, jeigu nurodytas iraso index nurodytas neteisingai (tokio nera)
            console.error ('ERROR: Task was not found') // ismeta klaida
        } else {
            console.log(`Task no. ${index} was removed successfully`) // jeigu klaidu nera, po inicijavimo isspausdiname tinkama zinute
        }

        const newList = [];                                         // inicijuojame kintamaji kuriame saugosime nauja sarasa be nurodyto(kuri norime pasalinti)
        for (let i = 0; i < this.tasks.length; i++){                // inicijuojame cikla
            if (i !== index){                                       // tikriname kuris nurodytas saraso elementas (index) nesutampa su i, pvz, i = 0 index = 2, i = 1 index = 2 
                newList.push(this.tasks[i]);                        // visus kurie nesutampa irasome i nauja kintamaji
            }
        }
        this.tasks = newList;                                       // po ciklo visi saraso elememtai isskyrus nurodyta (index) grazinami i tasks=[]
    }

    print(){                                                        // objekto funkcija kuri atlieka isspausdinimo fukkcija 
        console.table(this.tasks);                                  // nurodome, kad norime matyti rezultata kaip lentele console
    }

    changeStatus(index, status){                                    // objekto funkcija su dviem kintamaisiais, skirta keisti completed statusa 
        if (index < 0 || index > this.tasks.length){                // tikriname, jeigu nurodytas iraso index nurodytas teisingai (tokio nera)
            console.error ('ERROR: Task was not found')             // ismeta klaida, 
            return;
        }
        if (typeof status !== 'boolean'){                           // tikriname ar status nurodyta reiksme yra true/false <- boolean
            console.error ('ERROR: set status true/false')          // jeigu ne ismeta klaida
        } else{
           console.log(`Task no. ${index} status was changed`)      // jeigu taip, po inicijavimo isspausdiname tinkama zinute
        }

        console.log(this.tasks.length);
        
        this.tasks[index].completed = status                         // pakeiciame atitinkama iraso completed reiksme
            
    }

    selectCompletedOnly() {                                         // objekto funkcija skirta atrinkti tik uzbaigtas uzduotis (completed:true)
        // const completedList = []                                    // inicijuojame sarasa kuriame saudosime completed:true rastus irasus
        // for (const task of this.tasks) {                            // inicijuojame cikla, kuris eina per sarasa this.task
        //     if (task.completed === true) {                          // tikriname ar yra sarase elementu su completed:true
        //         completedList.push(task);                           // jeigu taip, irasome i sarasa
        //     }
        // }   console.table(completedList);                           // isspausdiname kaip lentele visus rastus elementus

        const completedList = this.tasks.filter(task => task.completed === true);
        console.table(completedList);
    }

    selectNotCompleted(){                                           // objekto funkcija skirta atrinkti tik neuzbaigtas uzduotis (completed:false)
    //     const notCompletedList = []                                 // inicijuojame sarasa kuriame saudosime completed:false rastus irasus
    //     for (const task of this.tasks) {                            // inicijuojame cikla, kuris eina per sarasa this.task
    //         if (task.completed === false) {                         // tikriname ar yra sarase elementu su completed:false
    //             notCompletedList.push(task);                        // jeigu taip, irasome i sarasa
    //         }
    //     }   console.table(notCompletedList);                        // isspausdiname kaip lentele visus rastus elementus
    // }

    const notCompletedList = this.tasks.filter(task => task.completed === false);
    console.table(notCompletedList);

    }

}

export {Todo};