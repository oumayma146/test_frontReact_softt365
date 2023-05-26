import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Input, Grid } from '@mui/material';

export default function FormAddMontant({
  montant_achat,
  setMontantAchat,
  fond_propre,
  setFondPropre,
  addHandler
}) {
 
  const addMontantAchatHandler = (e) => {
    setMontantAchat(e.target.value);
  };
  const addFondPropreHandler = (e) => {
    setFondPropre(e.target.value);
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormControl component="form" className="row g-3" onSubmit={onSubmit}>
      <Grid item md={6}>
        <FormLabel htmlFor="inputName"> Montant d'achat </FormLabel>
        <Input
          type="number"
          value={montant_achat}
          onInput={(e) => addMontantAchatHandler(e)}
          id="validationDefault02"
          required
        />
      </Grid>
      <Grid item md={6}>
        <FormLabel htmlFor="date">Fond Propre</FormLabel>
        <Input
          type="number"
          value={fond_propre}
          onInput={(e) => addFondPropreHandler(e)}
          id="validationDefault02"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button variant="contained" color="primary" type="submit" onClick={addHandler} className="me-md-2">
            Save
          </Button>
        </div>
      </Grid>
    </FormControl>
  );
}
