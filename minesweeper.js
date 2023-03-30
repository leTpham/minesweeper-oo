"use strict";

/** Minesweeper
 *
 * Create a board (n by m) with random amount of bombs.
 * Player has 2 (or 3) options for each tile.
 * - click (dig)
 * - flag (assume there's a bomb)
 * - *maybe (placeholder?)
 *
 * one class for a game
 *  - constructor:  height & width,
 *                  gameOver(boolean),
 *                  *nums of bombs

 *  - methods:      makeBoard function,
 *                  makeHTMLBoard function,
 *                  findSpot
 *                  handleClick function (needs binding),
 *                  checkForLoss/checkForWin?
 *                  endGame

 * one class for each tile
 * - contructor: isBomb (boolean)
 *                isHidden (have been clicked or not)
 *               value (if not bomb, how many bombs are around it)
 *
 */

class Game {
  constructor(height = 10, width = 10) {
    this.height = height;
    this.width = width;
    this.gameOver = false;

  }
  /** makeBoard: create in-JS board structure
   * board = array of rows. each row is array of tiles (board[y][x])
   */
  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  /** makeHTMLBoard: make HTML table and row of column tops */

  makeHTMLBoard() {
    const board = document.getElementById('board');
    board.innerHTML = ' ';

    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < this.width; x++) {
        const tile = document.createElement('td');
        tile.setAttribute('id', `${y}-${x}`);
        tile.addEventListener('click', this.handleClick);
        row.append(tile);
      }
      board.append(row);
    }
  }

}
