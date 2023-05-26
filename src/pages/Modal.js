import React from 'react';
import {Button ,Modal, Box,Typography } from '@mui/material';

export default function CustomModal({ title, visible, setVisible, children, addHandler, size }) {
  return (
   
    <Modal open={visible} onClose={() => setVisible(false)} aria-labelledby="modal-title" >
       <Box >
      <div className={size ? "sm" : "xl"}>
        <Typography variant="h6" component="h2" id="modal-title">
          {title}
        </Typography>
        {children}
      </div>
      <Button variant="contained"  onClose={() => setVisible(true)}>
            close
      </Button>
      </Box>
    </Modal>
    
  );
}

