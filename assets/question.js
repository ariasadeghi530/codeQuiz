
// array of elements storing questions and related items
const questions = 
[{prompt: 'What character is needed when decalring an object literal?',
choices: ['{}','[]',`''`,`""`],
answer: '{}'
},
{ prompt: 'What is the type of the true keyword?',
  choices: ['string', 'number', 'object', 'boolean'],
  answer: 'boolean'
},
{ prompt: 'How do you print to the console?',
  choices: ['System.out.print()', 'console.log()', 'print()', 'display()'],
  answer: 'console.log()'
},
{ prompt: 'Which is a falsey value?',
  choices: [`'false'`, `42`, '0', `[false, false, false]`],
  answer: `0`
},
{ prompt: `Which of these isn't a truthy value?`,
  choices: [`'0'`, '[]', `'false`, `''`],
  answer: `''`
}];