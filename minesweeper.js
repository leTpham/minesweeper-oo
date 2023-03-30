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
 *                  gameOver(boolean)

 *  - methods:      findSpot
 *                  handleClick function (needs binding),
 *                  makeBoard function,
 *                  makeHTMLBoard function,
 *                  checkForLoss/checkForWin?
 *                  endGame

 * one class for each tile
 * - contructor: isBomb (boolean)
 *                isHidden (have been clicked or not)
 *               value (if not bomb, how many bombs are around it)
 *
 */

