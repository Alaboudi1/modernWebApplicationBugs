import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Custom Hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// Components
import Stage from "./Stage";
import Display from "./Display";
import { StyledStartButton } from './styles/StyledStartButton';


const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const gameContainer = React.useRef(null);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    const pos = { x: dir, y: 0 };

    if (!checkCollision(player, stage, pos)) {
      updatePlayerPos({ pos });
    }
  };



  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
    gameContainer.current.focus();
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    const pos = {};
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      pos.y = 1;
      pos.x = 0;
      pos.collided = false;
      updatePlayerPos({ pos });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      pos.y = 0;
      pos.x = 0;
      pos.collided = true;
      updatePlayerPos({ pos });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
        setDropTime(1000 / (level + 1));
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }

    }
  }


  return (
    <StyledTetrisWrapper
      role="button"
    >
      <StyledTetris>

        <Stage
          onKeyUp={move}
          stage={stage} />
        <aside>
          {gameOver ? (

            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}

          <StyledStartButton
            onClick={startGame}>
            Start Game
          </StyledStartButton>

        </aside>
      </StyledTetris>
    </StyledTetrisWrapper >
  );
};

export default Tetris;
