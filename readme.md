var is globally scoped
you can reasign values with let
Array.isArray(array)
array.indexOf('number')

Object literals are key == value pairs
Array of objects e.g.

const todos = [
    {
        id: 1,
      text: 'my name is texr',
      isComplete: false
    },
      {
        id: 1,
      text: 'my name is texr',
      isComplete: false
    },
      {
        id: 1,
      text: 'my name is texr',
      isComplete: false
    }
]

console.log(todos[1].text)

const todoJson = JSON.strigify(todos)
console.log(todoJson)

LOOP
while loop
for loop
for( let todo of todos){
    console.log(todo)
}