const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs');



yargs.version('1.1.0')

yargs.command({
    command: "add",
    describe: "add all ",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "my des",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    description: "remove all",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv)=>{
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    description: "all list ",
    handler: ()=>{
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: "read all carefully",
    handler: ()=>{
        console.log('read read read reda done!!');
    }
})

yargs.parse()
// console.log("from yargs", yargs.argv);

