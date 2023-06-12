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



function makeSureNotToLeaveBoard(coordinateArray) {
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
      function addMoves(modifierOne, modifierTwo) {
        let tested = [x + modifierOne, y + modifierTwo]
        if (makeSureNotToLeaveBoard(tested)) {
          field.possibleMoves.push(tested)
        }
      }
      addMoves(+2, +1)
      addMoves(-2, -1)
      addMoves(+2, -1)
      addMoves(-2, +1)

      addMoves(+1, +2)
      addMoves(-1, -2)
      addMoves(+1, -2)
      addMoves(-1, +2)
      result.push(field);
    }
  }
  return result;
}
let board = createBoard();
//console.log(board)
//console.log(board.find((e) => (e.coordinates.toString() === '2,2')));

function knightMoves(start, destination, path = []) { //paths are repeating too much

  let shortestPathFoundYetLength = Infinity
  let shortestPathFoundYet = null
  let shortestPathsToFields = []

  for (let j = 0; j < board.length; j++) {
    let fieldToAdd = board[j]
    fieldToAdd.shortestDistanceFromStart = Infinity
    shortestPathsToFields.push(fieldToAdd)
  }

  function knightMovesRecursion(start, destination, path = []) {
    // paths to all field are set as infinity
    // if the shortest path to the start field is longer than the path taken in this recursion
    // update the path in the array


    //the below does not fire, check why
    if (shortestPathsToFields.find((e)=>JSON.stringify(e.coordinates) === JSON.stringify(start).shortestPathsToFields > path.length)) {//if path is longer than shortest visited, return
      console.log("the new if runs")
      console.log(shortestPathsToFields.find((e)=>JSON.stringify(e.coordinates === JSON.stringify(start))))


    } else{//do all rest

    }


    if (path.length > shortestPathFoundYetLength) {//path longer than the longest path to the searched field
      console.log(shortestPathFoundYetLength)
      console.log("path too long, returning, path is:")
      console.log(path)
      return
    } else if (start.toString() === destination.toString()) {//searched field found
      console.log(path.length)
      console.log(shortestPathFoundYet)
      console.log(shortestPathFoundYetLength)
      if (path.length < shortestPathFoundYetLength) {
        shortestPathFoundYet = path
        shortestPathFoundYetLength = shortestPathFoundYet.length
      }
      console.log("found")
      console.log(path)
      return
    } else {//continue



      let availableMoves = board.find((e) => e.coordinates.toString() === start.toString()).possibleMoves

      for (let i = 0; i < availableMoves.length; i++) {
        if (!path.some((e) => JSON.stringify(e) === JSON.stringify(availableMoves[i]))) {
          knightMovesRecursion(availableMoves[i], destination, [...path, start])
        }

      }


    }
  }

  knightMovesRecursion(start, destination, path = [])

  console.log(shortestPathFoundYet)
  return shortestPathFoundYet
  // CONCLUSION, USE ONLY AFTER COMPARING TESTEDPATHS
  // console.log(`=> You made it in ${currentPath.length === 1 ? currentPath.length + ' move' : currentPath.length + ' moves'}!  Here's your path:`)
  // currentPath.forEach((e) => console.log(e))
  // console.log(destination)
  // console.log(iteration)
  // return `Function concluded successfully.`
}

//console.log(knightMoves([0, 0], [0, 0]))
console.log(knightMoves([1, 2], [0, 0]))
//console.log(knightMoves([0, 0], [1, 2]))

// console.log(knightMoves([0, 0], [3, 3])) //[[0,0],[1,2],[3,3]]

// console.log(knightMoves([3, 3], [0, 0]))// [[3,3],[1,2],[0,0]]

// console.log(knightMoves([2, 2], [3, 4]))//one move


