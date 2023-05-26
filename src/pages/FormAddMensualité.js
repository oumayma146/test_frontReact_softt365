import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCapital } from '../store/action/montant';
import Select from 'react-select';
import { Button, FormControl, FormControlLabel, FormLabel, Input, Grid } from '@mui/material';

export default function FormAddMensualité({
    duree,
    setDuree,
    capital,
    setCapital,
    taux_interet_annuel,
    setTauxInteretAnnuel,
  addHandler
}) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCapital())
    }, [])
  const Capital = useSelector((state) => state.montant.NewCapitaList);
 
  const formattedCapital = Capital.map((elem) => {
    return { value: elem.id, label: elem.montant_brut }
  })


  const addTauxHandler = (e) => {
    setTauxInteretAnnuel(e.target.value);
  };
  const addDureeHandler = (e) => {
    setDuree(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormControl component="form" className="row g-3" onSubmit={onSubmit}>
      <Grid item md={6}>
        <FormLabel htmlFor="inputName">Capital</FormLabel>
        <Select
          defaultValue={capital}
          onChange={setCapital}
          options={formattedCapital}
          id="validationDefault01"
          required
        />
      </Grid>
      <Grid item md={6}>
        <FormLabel htmlFor="date">Durée</FormLabel>
        <Input
          type="number"
          value={duree}
          onInput={(e) => addDureeHandler(e)}
          id="validationDefault02"
          required
        />
      </Grid>
      <Grid item xs={6}>
        <FormLabel>Taux Intéret Annuel</FormLabel>
        <Input
          type="number"
          value={taux_interet_annuel}
          onInput={(e) => addTauxHandler(e)}
          id="validationDefault03"
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
