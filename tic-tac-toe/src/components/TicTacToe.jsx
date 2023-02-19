import React, {useState} from 'react'
import {Box, Button} from '@mui/material'
import './tic-tac-toe.css'



function getInitialState(){
    const state = {};
    for(let row = 0; row < 3; row++){
        for(let column = 0; column < 3; column++){
            state[`${row}-${column}`] = null;
        }
        return state 
    }
}

const getKeyFromIndex = (index) =>{
    const row = Math.floor(index / 3); 
    const column = index % 3;
    return `${row}-${column}`
}

const Tictactoe =  () => {
    const [values, setValues] = useState(getInitialState)
    return (
        <Box>
            <h1 className='GameTitle'>Jogo da Velha</h1>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 3,
                color: 'black',
                width: 300,
                height: 300,
            }}
            >
                {Array.from({ length: 9 }).map((item, index) => (
                    <Button sx={{ 
                        color:'white',
                        border: '1px solid white'
                    }}
                      key={index}>
                        {values[getKeyFromIndex(index)]}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}

export default Tictactoe