import {Todo} from './components/Todo.js'


const doToday = new Todo('Today\'s list')


doToday.add('Clean my room')
doToday.add('Do workout')
doToday.add('Study')
doToday.add('Charge my phone')
doToday.add('Check the weather')



doToday.list()

doToday.edit(0, 'Wash my clothes')
doToday.remove(0)


doToday.print()

doToday.list()

doToday.changeStatus(1, true)
doToday.changeStatus(2, true)

doToday.print()

doToday.remove(10)

doToday.print()

doToday.selectCompletedOnly()

doToday.selectNotCompleted()