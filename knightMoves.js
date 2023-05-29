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

// function Node(data, left = null, right = null) {
//     return {
//       data,
//       left,
//       right,
//     };
//   }

function knight(
  curentPosition,
  move1,
  move2,
  move3,
  move4,
  move5,
  move6,
  move7,
  move8
) {
  return {
    curentPosition,
    move1,
    move2,
    move3,
    move4,
    move5,
    move6,
    move7,
    move8,
    // move1:[position[0] + 1, position[1] + 2],
    // move2:[position[0] - 1, position[1] + 2],
    // move3:[position[0] + 1, position[1] - 2],
    // move4:[position[0] - 1, position[1] - 2],
    // move5:[position[0] + 2, position[1] + 1],
    // move6:[position[0] - 2, position[1] + 1],
    // move7:[position[0] + 2, position[1] - 1],
    // move8:[position[0] - 2, position[1] - 1]
  };
}

function knightMoves(start, destination, path = [start]) {
  if (start[0] > 8 || start[0] < 0 || start[1] > 8 || start[1] < 0) {
    return;
  }
  console.log(start);
  //console.log(destination);

  if (start === destination) {
    return "success";
  } else {
    return {
      curentPosition: start,
      move1: knightMoves([start[0] + 1, start[1] + 2], destination),
      move2: knightMoves([start[0] - 1, start[1] + 2], destination),
      move3: knightMoves([start[0] + 1, start[1] - 2], destination),
      move4: knightMoves([start[0] - 1, start[1] - 2], destination),
      move5: knightMoves([start[0] + 2, start[1] + 1], destination),
      move6: knightMoves([start[0] - 2, start[1] + 1], destination),
      move7: knightMoves([start[0] + 2, start[1] - 1], destination),
      move8: knightMoves([start[0] - 2, start[1] - 1], destination),
    };
  }

  knightMoves([start[0] + 1, start[1] + 2], destination);
  knightMoves([start[0] - 1, start[1] + 2], destination);
  knightMoves([start[0] + 1, start[1] - 2], destination);
  knightMoves([start[0] - 1, start[1] - 2], destination);

  knightMoves([start[0] + 2, start[1] + 1], destination);
  knightMoves([start[0] - 2, start[1] + 1], destination);
  knightMoves([start[0] + 2, start[1] - 1], destination);
  knightMoves([start[0] - 2, start[1] - 1], destination);
  //knight has position
  //possible knight moves should be
  //[+1,+2][-1,+2][+1,-2][-1,-2]
  //[+2,+1][-2,+1][+2,-1][-2,-1]
}

function testMoves(start, destination, path = [start]) {
  if (start[0] > 8 || start[0] < 0 || start[1] > 8 || start[1] < 0) {
    console.log("end reached")
    return;
  }
  console.log(start);
  //console.log(destination);


  //try restricting the next move by conditionals
  //so some of them are not returned in this iteration

  if (start === destination) {
    return "success";
  } else {
    return {
      curentPosition: start,
      move1: testMoves([start[0] + 1, start[1] + 0], destination),
      move2: testMoves([start[0] - 1, start[1] + 0], destination),
      move3: testMoves([start[0] + 1, start[1] - 1], destination),
      move4: testMoves([start[0] + 1, start[1] + 0], destination),
      move5: testMoves([start[0] + 0, start[1] + 1], destination),
      move6: testMoves([start[0] - 1, start[1] + 1], destination),
      move7: testMoves([start[0] + 0, start[1] - 1], destination),
      move8: testMoves([start[0] - 1, start[1] - 1], destination),
    };
  }
}

console.log(testMoves([0, 0], [1, 2]));
