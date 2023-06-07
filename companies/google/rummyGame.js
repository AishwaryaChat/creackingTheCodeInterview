// We are developing a game with tiles. A tile is identified by it's colour(red, black or green), and a digit(1-9) on it. 3*9=27 makes a deck, in which each tile is unique. The game uses 4 decks. i.e all_tiles=[4 *(c, d) for c in [red, black, green] for d in [1...9]], totally 4*3*9=108 tiles.
// A pattern is designed a 3 exactly same tiles or 3 tiles with the same color and consecutive digits.
// (red, 5), (red,5),(red,5) is a pattern
// (black,1), (black, 2), (black, 3) is a pattern
// (black,8), (black, 9), (black, 1) is not a pattern
// (red,2), (black, 2), (green, 2) is not a pattern
// (red,7), (black, 8), (green, 9) is not a pattern
// A hand is 12 tiles. A winning hand is 12 tiles, that can make 4 patterns by using each tile exactly once
// If given hands input has 4 patterns return true otherwise false
// sample input - hands = [[black,1], [black, 2], [black, 3], [red, 5], [red, 5],[red, 5], [green, 5], [green, 5],[green, 5], [green,7], [green, 8], [green, 9]]

// Recursive backtracking function to find winning hands

// TC - O(N!), N factorial
function isPattern(tiles) {
  // Check for three identical tiles
  if (tiles.length < 3) return false;
  if (
    tiles[0][0] === tiles[1][0] &&
    tiles[1][0] === tiles[2][0] &&
    tiles[0][1] === tiles[1][1] &&
    tiles[1][1] === tiles[2][1]
  ) {
    return true;
  }

  // Check for three consecutive tiles of the same color
  if (tiles[0][0] === tiles[1][0] && tiles[1][0] === tiles[2][0]) {
    const digits = tiles.map((tile) => tile[1]).sort((a, b) => a - b);
    if (digits[0] + 1 === digits[1] && digits[1] + 1 === digits[2]) {
      return true;
    }
  }

  return false;
}

function backtrack(hands, patterns, visited, currentTiles) {
  // Base case: check if we have found 4 patterns
  if (patterns.length === 4) {
    return true; // Solution found
  }

  for (let i = 0; i < hands.length; i++) {
    const tile = [...hands[i], i];

    // Skip if the tile is already used
    if (visited[i]) {
      continue;
    }

    currentTiles.push(tile); // Add the tile to the patterns
    visited[i] = true;
    // console.log("currentTiles", currentTiles);
    if (currentTiles.length === 3) {
      if (isPattern(currentTiles)) {
        patterns.push(currentTiles);
        currentTiles = []
        // Recursive call to check the remaining tiles
        if (backtrack(hands, patterns, visited, currentTiles)) {
          return true; // Solution found
        }
        patterns.pop();
      }
      if(currentTiles.length>0) visited[currentTiles.pop()[2]] = false;
      

      // Backtrack: remove the tile from the current patterns
    }
  }

  return false; // No solution found
}

function solve(hand) {
  // Check if a given set of tiles forms a pattern
let patterns = []
  // Start the backtracking with the initial hand
  const ans = backtrack(hand, patterns, {}, []);
  return ans
}

const hands = [
  ["black", 1],
  ["black", 2],
  ["black", 3],
  ["red", 5],
  ["red", 5],
  ["red", 5],
  ["green", 5],
  ["green", 5],
  ["green", 5],
  ["green", 7],
  ["green", 8],
  ["green", 9],
];

console.log(solve(hands));
