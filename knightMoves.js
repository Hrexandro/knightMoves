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
      addMoves(+1, +2)
      addMoves(-1, -2)
      addMoves(+1, -2)
      addMoves(-1, +2)
      
      addMoves(+2, +1)
      addMoves(-2, -1)
      addMoves(+2, -1)
      addMoves(-2, +1)

      result.push(field);
    }
  }
  return result;
}
let board = createBoard();

function knightMoves(start, destination, path = []) {

  let errorMessage = "Incorrect input."

  if (!Array.isArray(start) || !Array.isArray(destination)){
    return errorMessage
  } else if (!makeSureNotToLeaveBoard(start) || !makeSureNotToLeaveBoard(destination)){
    return errorMessage
  }
  let lengthOfPathToDestination = Infinity
  let currentShortestPathToDestination = []
  let shortestPathsToFields = []

  let queue = [{ 
    start, 
    destination, 
    path: []
  }]

  for (let j = 0; j < board.length; j++) {
    let fieldToAdd = board[j]
    fieldToAdd.shortestDistanceFromStart = Infinity
    shortestPathsToFields.push(fieldToAdd)
  }

  function knightMovesRecursion(start, destination, path = []) {
    if (queue.length < 1){
      return
    }
    if (start.toString() === destination.toString()) {//searched field found
      if (path.length < lengthOfPathToDestination) {
        currentShortestPathToDestination = path
        lengthOfPathToDestination = currentShortestPathToDestination.length
      }
      return
    } else {//continue

      let availableMoves = board.find((e) => e.coordinates.toString() === start.toString()).possibleMoves

      for (let i = 0; i < availableMoves.length; i++) {
        if (!path.some((e) => JSON.stringify(e) === JSON.stringify(availableMoves[i]))) {
          queue.push({
            start: availableMoves[i],
            destination: destination,
            path: [...path, start]
          })
        }
      }
    }
    queue.shift()
    knightMovesRecursion(queue[0].start, queue[0].destination, queue[0].path)
  }

  knightMovesRecursion(queue[0].start, queue[0].destination)

  if (currentShortestPathToDestination.length < 1){
    return errorMessage
  } else {
    console.log(`=> You made it in ${currentShortestPathToDestination.length + (currentShortestPathToDestination.length === 1 ? ' move' : ' moves')}!  Here's your path:`)
    currentShortestPathToDestination.forEach((e) => console.log(e))
    console.log(destination)
  
    return `Function concluded successfully.`
  }

}
  
  
  
  //console.log(knightMoves([0, 0], [0, 0]))
  //console.log(knightMoves([1, 2], [0, 0]))
  //console.log(knightMoves([0, 0], [1, 2]))
  
  console.log(knightMoves([0, 0], [3, 3]))
  
  //console.log(knightMoves([3, 3], [0, 0]))
  
  //console.log(knightMoves([2, 2], [3, 4]))


 