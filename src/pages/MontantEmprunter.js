import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Modal from '../pages/Modal';
import MensualiteFrom from '../pages/FormAddMensualité';
import ArticleIcon from '@mui/icons-material/Article';
import { AddMontant, getMontant } from '../store/action/montant';
import FormAddMontant from './FormAddMontant';
const useStyles = makeStyles((theme) => ({
  table: {
    marginBottom: theme.spacing(4),
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  inputGroup: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  addButton: {
    marginRight: 'auto',
  },
  iconButton: {
    marginRight: theme.spacing(1),
  },
}));

const MontantEmprunter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getMontant());    
  }, []);
  const MontantList = useSelector((state) => state.montant.NewMontantList);

  //add state
  const [visible, setVisible] = useState(false);
  const [montant, setMontant] = useState();
  const [fond, setFond] = useState();

  const addMontantHandler = () => {
    dispatch(AddMontant(montant,fond)).then(() => {
      dispatch(getMontant());
      setVisible(false);
      setMontant();
      setFond();
    });
  };


  return (
    <>
     
    
          <Card className={classes.table}>
          
           
              <Button className={classes.iconButton} onClick={() => setVisible(!visible)} variant="contained">
                ADD
              </Button>
              <Modal title={'Add new Montant'} visible={visible} setVisible={setVisible}>
                <FormAddMontant
                  setFondPropre={setFond}
                  setMontantAchat={setMontant}
                  montant_achat={montant}
                  fond_propre={fond}
                  addHandler={() => addMontantHandler()}
                />
              </Modal>
           
          </Card>
     
      
      <Table className={classes.table} align="middle" hover responsive>
        <TableHead>
          <TableRow>
            <TableCell>Montant D'achat</TableCell>
            <TableCell>Fond Propre</TableCell>
            <TableCell>Frais D'achat</TableCell>
            <TableCell>Fonds Hypotheque</TableCell>
            <TableCell>Montant Emprunter Brut </TableCell>
            <TableCell>Montant Emprunter Net </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MontantList.map((elem) => {
            return (
              <TableRow key={elem.id}>
                <TableCell>{elem.montant_achat}</TableCell>
                <TableCell>{elem.fonds_propre}</TableCell>
                <TableCell>{elem.frais_achat}</TableCell>
                <TableCell>{elem.fonds_hypotheque}</TableCell>
                <TableCell>{elem.montant_brut}</TableCell>
                <TableCell>{elem.montant_net}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default MontantEmprunter;
