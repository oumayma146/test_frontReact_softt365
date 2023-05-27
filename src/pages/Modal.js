import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function Modal({ title, visible, setVisible, children, addHandler, size }) {
  return (
    <Dialog open={visible} onClose={() => setVisible(false)} fullWidth={false} maxWidth={size ? "sm" : "xl"}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button  color="secondary" onClick={() => setVisible(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}






