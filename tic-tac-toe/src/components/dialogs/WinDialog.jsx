/* eslint-disable react/react-in-jsx-scope */
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

function WinDialog ({ reset, score, winner }) {
  return (
    <Dialog
        open={winner === 1 || 2}
        close={reset}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
           Jogador {winner} venceu o jogo!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Jogador 1 {score.player1} x {score.player2} Jogador 2
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <RestartAltIcon className='restart' onClick={reset}/>
        </DialogActions>
      </Dialog>
  )
}
export default WinDialog
