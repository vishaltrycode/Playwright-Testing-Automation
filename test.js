import {HelloWorld as HelloWorld01} from './JsPractice.js'
import {HelloWorld as HelloWorld02} from './TsPractice.js'

const hello2 = new HelloWorld01("Sofware testing")
console.log(hello2.name)
console.log(hello2.company)
hello2.greetings()

const hello4 = new HelloWorld02("Sofware testing")
console.log(hello4.name)
console.log(hello4.company)
hello4.greetings()