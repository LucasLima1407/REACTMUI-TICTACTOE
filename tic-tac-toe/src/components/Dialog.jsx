/* eslint-disable react/react-in-jsx-scope */
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { reset, score, winner, itsATie } from 'TicTacToe'

function endDialog () {
  return (
    <Dialog
        open={winner === 1 || -1}
        onClose={closeDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {
            winner === 1 || -1
              ? `Jogador ${winner} venceu o jogo!`
              : 'Empate, deu velha!'
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              winner === 1 || -1
                ? `Jogador1 ${score.player1} x ${score.player2} Jogador2`
                : 'Ninguém ganhou dessa vez...'
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <RestartAltIcon onCLick={reset}/>
        </DialogActions>
      </Dialog>
  )
}
export default endDialog
