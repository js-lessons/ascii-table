require('../src/index');

var STUDENTS = [
  { Name: 'Douglas Crockford', Github: 'douglascrockford' },
  { Name: 'Tony Morris', Github: 'tonymorris' },
  { Name: 'Slava Pestov', Github: 'slavapestov' },
  { Name: 'Graydon Hoare', Github: 'graydon' },
  { Name: 'Nikodemus Siivola', Github: 'nikodemus' },
  { Name: 'Max Bolingbroke', Github: 'batterseapower' },
  { Name: 'Daniel Spiewak', Github: 'djspiewak' },
  { Name: 'Rich Hickey', Github: 'richhickey' },
  { Name: 'David Nolen', Github: 'swannodette' }
]

console.log(new Table(objectToRows(STUDENTS)).draw());
