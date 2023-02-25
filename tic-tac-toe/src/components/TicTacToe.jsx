/* eslint-disable no-unreachable-loop */
import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import './tic-tac-toe.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

function getInitialState () {
  const state = {}
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      state[`${row}-${column}`] = null
    }
    return state
  }
}

const getKeyFromIndex = (index) => {
  const row = Math.floor(index / 3)
  const column = index % 3
  return `${row}-${column}`
}

const getLabel = (value) => {
  if (!value) {
    return null
  }
  return value > 0 ? '⭕' : '❌'
}

const Tictactoe = () => {
  const [values, setValues] = useState(getInitialState)
  const [player, setPlayer] = useState(1)
  const [winner, setWinner] = useState(null)

  function handleClick (key) {
    if (values[key] || values[key]) {
      return
    }
    const newValues = {
      ...values,
      [key]: player
    }
    setValues(newValues)
    setPlayer(player * (-1))
    const newWinner = getWinner(newValues)

    if (newWinner) {
      setWinner(newWinner > 0 ? 1 : -1)
    }
  }
  function reset () {
    setWinner(null)
    setValues(getInitialState)
    setPlayer(1)
  }
  const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner
  function getWinner (values) {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        const sumRow = values[`${row}-${column}`] +
        values[`${row}-${column + 1}`] +
        values[`${row}-${column + 2}`]
        if (sumRow === 3 || sumRow === -3) {
          return sumRow
        }

        const sumCol =
        values[`${row}-${column}`] +
        values[`${row + 1}-${column}`] +
        values[`${row + 2}-${column}`]
        if (sumCol === 3 || sumCol === -3) {
          return sumCol
        }

        const sumDiagonal =
        values[`${row}-${column}`] +
        values[`${row + 1}-${column + 1}`] +
        values[`${row + 2}-${column + 2}`]
        if (sumDiagonal === 3 || sumDiagonal === -3) {
          return sumDiagonal
        }

        const sumReverseDiagonal =
        values[`${row}-${column}`] +
        values[`${row + 1}-${column - 1}`] +
        values[`${row + 2}-${column - 2}`]
        if (sumReverseDiagonal === 3 || sumReverseDiagonal === -3) {
          return sumReverseDiagonal
        }
      }
    }
    return null
  }
  return (
        <Box>
            <h1 className='GameTitle'>Jogo da Velha</h1>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 3,
              color: 'black',
              width: 300,
              height: 300
            }}
            >
                {Array.from({ length: 9 }).map((item, index) => (
                    <Button onClick={() => handleClick(getKeyFromIndex(index))} sx={{
                      color: 'white',
                      border: '1px solid white'
                    }}
                      key={index}>
                        {getLabel(values[getKeyFromIndex(index)])}
                    </Button>
                ))}
            </Box>
            {(winner || itsATie) && (
            <Box>
            {winner
              ? (<p>O ganhador é: {winner > 0 ? 'O' : 'X'}</p>)
              : (<p>Houve um empate</p>
                )}
            <RestartAltIcon className='restart' onClick={reset} />
            </Box>
            )}
        </Box>
  )
}

export default Tictactoe
