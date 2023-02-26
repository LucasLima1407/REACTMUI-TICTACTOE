import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

function TieDialog ({ reset, ItsATie }) {
  return (
    <Dialog
        open={ItsATie}
        close={reset}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
           Deu empate!!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Parece que deu velha, tente de novo!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <RestartAltIcon className='restart' onClick={reset}/>
        </DialogActions>
      </Dialog>
  )
}
export default TieDialog
