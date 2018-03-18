const fs        = require('fs');
const _         = require('lodash');
const yargs     = require('yargs');

const notes     = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

// console.log (`Command: ${command}`);
// console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (_.isEmpty(note)) 
        console.log ('Note with given title already exists');
    else {
        console.log ('Note added');
        notes.printNote(note);
    }

} else if (command === 'list') {
    var note;
    var allNotes = notes.getAll();

    allNotes.forEach((note) => notes.printNote(note));

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (_.isEmpty(note))
        console.log('Note not found');
    else {
        console.log('Here is your note:');
        notes.printNote(note);
    }

} else if (command === 'remove') {
    var message = notes.removeNote(argv.title) ? 'Note removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Command not recognized')

}


