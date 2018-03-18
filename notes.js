const fs = require('fs');

const NOTE_DB_FILE = 'notes.json'

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
        // .filter gets called once for every element in notes array
        // if true is returned for a given element it is added to duplicateNotes array
        // this is written in the short ES6 arrow function syntax

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return (note);
    }
    // in javascript, if you don't return anything then undefined is returned by the function
};

var getAll = () => {
    return(fetchNotes());
};

var getNote = (title) => {
    var notes = fetchNotes();
    var mynotes = notes.filter((note) => note.title === title);
    return (mynotes[0]);
    // in javascript, if you don't return anything then undefined is returned by the function
};

var removeNote = (title) => {
    var notes = fetchNotes();
    notesRemoved = notes.filter((note) => note.title !== title);
    saveNotes(notesRemoved);

    return (notes.length !== notesRemoved.length);
};

var printNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    printNote
};

var fetchNotes = () => {
    var notes = [];

    try {
        // open data file - if it exists
        var noteString = fs.readFileSync(NOTE_DB_FILE);
        notes = JSON.parse(noteString);
    }
    catch(e) {
    }
    return (notes);
};

var saveNotes = (notes) => {
    fs.writeFileSync(NOTE_DB_FILE, JSON.stringify(notes));
};
