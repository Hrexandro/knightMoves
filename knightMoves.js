// Your task is to build a function knightMoves that shows the shortest possible way
//to get from one square to another by outputting all squares the knight will stop on along the way.

// You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
// Put together a script that creates a game board and a knight.
// Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.
// Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
// Use the chosen search algorithm to find the shortest path
// between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
//   > knightMoves([3,3],[4,3])
//   => You made it in 3 moves!  Here's your path:
//     [3,3]
//     [4,5]
//     [2,4]
//     [4,3]

// how to use this graph structure?
// in JS terms should the board be an object or an array of arrays?
// is the board even necessary? I could just code the limit in knight's move rules

function createBoard() {
  let result = [];
  for (let x = 0; x <= 8; x++) {
    for (let y = 0; y <= 8; y++) {
      result.push([x, y]);
    }
  }
  return result;
}
let board = createBoard();
console.log(board);

function knightMoves(start, destination, path = []) {
  console.log('function start')
  console.log('path is ' + path)
  console.log(path)
  console.log(Array.isArray(path))
  console.log('current start is ' + start)
  if (start[0] === destination[0] && start[1] === destination[1]) {
    console.log(`=> You made it in ${path.length === 1 ? path.length + ' move' : path.length + ' moves'}!  Here's your path:`)
    path.forEach((e) => console.log(e))
    console.log(destination)
    return `Function concluded successfully.`
  }

  function movementViabilityTest(coordinateArray) {
    if (path.find((element)=> element[0] === coordinateArray[0] && element[1]===coordinateArray[1])) {
      console.log("already visited")
      return false
    } else if (coordinateArray[0] > 7 || coordinateArray[0] < 0) {
      console.log('larger0')
      return false
    } else if (coordinateArray[1] > 7 || coordinateArray[1] < 0) {
      console.log('larger1')
      return false
    } else {
      return true
    }
  }
  let nextMove = null


  if (movementViabilityTest([start[0] + 1, start[1] + 2])) {
    nextMove = [start[0] + 1, start[1] + 2]
  } else if (movementViabilityTest([start[0] - 1, start[1] + 2])) {
    nextMove = [start[0] - 1, start[1] + 2]
  } else if (movementViabilityTest([start[0] + 1, start[1] - 2])) {
    nextMove = [start[0] + 1, start[1] - 2]
  } else if (movementViabilityTest([start[0] - 1, start[1] - 2])) {
    nextMove = [start[0] - 1, start[1] - 2]
  } else if (movementViabilityTest([start[0] + 2, start[1] + 1])) {
    nextMove = [start[0] + 2, start[1] + 1]
  } else if (movementViabilityTest([start[0] - 2, start[1] + 1])) {
    nextMove = [start[0] - 2, start[1] + 1]
  } else if (movementViabilityTest([start[0] + 2, start[1] - 1])) {
    nextMove = [start[0] + 2, start[1] - 1]
  } else if (movementViabilityTest([start[0] - 2, start[1] - 1])) {
    nextMove = [start[0] - 2, start[1] - 1]
  }
  console.log("next knight Moves runs, the next move is" + nextMove)
  return knightMoves(nextMove, destination, [...path, start])

  //return nextMove
}
// knightMoves([start[0] + 1, start[1] + 2], destination),
// knightMoves([start[0] - 1, start[1] + 2], destination),
// knightMoves([start[0] + 1, start[1] - 2], destination),
// knightMoves([start[0] - 1, start[1] - 2], destination),
// knightMoves([start[0] + 2, start[1] + 1], destination),
// knightMoves([start[0] - 2, start[1] + 1], destination),
// knightMoves([start[0] + 2, start[1] - 1], destination),
// knightMoves([start[0] - 2, start[1] - 1], destination),


console.log(knightMoves([0, 0], [3, 3]))

//console.log(knightMoves([0, 0], [2, 4]))

//console.log([[1],[2]])
// move1: knightMoves([start[0] + 1, start[1] + 2], destination),
// move2: knightMoves([start[0] - 1, start[1] + 2], destination),
// move3: knightMoves([start[0] + 1, start[1] - 2], destination),
// move4: knightMoves([start[0] - 1, start[1] - 2], destination),
// move5: knightMoves([start[0] + 2, start[1] + 1], destination),
// move6: knightMoves([start[0] - 2, start[1] + 1], destination),
// move7: knightMoves([start[0] + 2, start[1] - 1], destination),
// move8: knightMoves([start[0] - 2, start[1] - 1], destination),

