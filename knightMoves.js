// Your task is to build a function knightMoves that shows the shortest possible way
//to get from one square to another by outputting all squares the knight will stop on along the way.

// You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
// Put together a script that creates a game board and a knight.
// Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.
// Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
// Use the chosen search algorithm to find the shortest currentPath
// between the starting square (or node) and the ending square. Output what that full currentPath looks like, e.g.:
//   > knightMoves([3,3],[4,3])
//   => You made it in 3 moves!  Here's your currentPath:
//     [3,3]
//     [4,5]
//     [2,4]
//     [4,3]

// how to use this graph structure?
// in JS terms should the board be an object or an array of arrays?
// is the board even necessary? I could just code the limit in knight's move rules


function makeSureNotToLeaveBoard(coordinateArray) {//ADD CHECKING OF TESTED PATH AND IF ALREADY IS TOO LONG
  if (coordinateArray[0] > 7 || coordinateArray[0] < 0) {
    return false
  } else if (coordinateArray[1] > 7 || coordinateArray[1] < 0) {
    return false
  } else {
    return true
  }
}

function createBoard() {
  let result = [];
  for (let x = 0; x <= 7; x++) {
    for (let y = 0; y <= 7; y++) {
      let field = {
        coordinates: [x, y],
        possibleMoves: []
      }

      for (let z = 0; z <= 7; z++){
        //add possible moves to fields
      }

      field.possibleMoves = [1]
      result.push(field);





    }
  }
  return result;
}
let board = createBoard();
console.log(board);

function knightMoves(start, destination, currentPath = [], iteration = 0, testedPaths = []) {
  console.log('function start')
  console.log(iteration)
  console.log('currentPath is ' + currentPath)
  console.log(currentPath)
  console.log(Array.isArray(currentPath))
  console.log('current start is ' + start)
  if (start[0] === destination[0] && start[1] === destination[1]) {
    //RUN FUNCTION AGAIN WITH TESTED PATHS INCLUDED
  } else if (start === null){
    //RUN FUNCTION AGAIN WITH TESTED PATHS INCLUDED
    console.log('start is null')
    testedPaths.push(path)
    return knightMoves
  }




  // CONCLUSION, USE ONLY AFTER COMPARING TESTEDPATHS
  // console.log(`=> You made it in ${currentPath.length === 1 ? currentPath.length + ' move' : currentPath.length + ' moves'}!  Here's your path:`)
  // currentPath.forEach((e) => console.log(e))
  // console.log(destination)
  // console.log(iteration)
  // return `Function concluded successfully.`

  function movementViabilityTest(coordinateArray) {//ADD CHECKING OF TESTED PATH AND IF ALREADY IS TOO LONG
    if (currentPath.find((element)=> element[0] === coordinateArray[0] && element[1]===coordinateArray[1])) {
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
  return knightMoves(nextMove, destination, [...currentPath, start], iteration + 1, testedPaths)

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


//console.log(knightMoves([0, 0], [3, 3]))

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

