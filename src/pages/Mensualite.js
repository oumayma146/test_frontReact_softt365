import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddMensualite,getMensualite, getTable } from '../store/action/mensualite';
import { Button, Card, CardHeader,  Stack,Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Modal from '../pages/Modal';
import MensualiteFrom from '../pages/FormAddMensualité';
import ArticleIcon from '@mui/icons-material/Article';
import TableModal from './TableModal';
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

const Mensualite = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getMensualite());    
  }, []);
  const MensualiteList = useSelector((state) => state.mensualite.NewList);

  //add state
  const [visible, setVisible] = useState(false);
  const [duree, setDuree] = useState();
  const [taux, setTaux] = useState();
  const [capital, setCapital] = useState();
  const [table, setTable] = useState(false)
  const addMonsualiteHandler = () => {
    dispatch(AddMensualite(duree,taux,capital)).then(() => {
      dispatch(getMensualite());
      setVisible(false);
      setDuree();
      setTaux();
      setCapital();
    
    });
  };

  const openTableModal = (id) => {
    dispatch(getTable(id))
    setTable(!table)
  }
  return (
    <>
     
    
          <Card className={classes.table}>
          
           
              <Button className={classes.iconButton} onClick={() => setVisible(!visible)} variant="contained">
                ADD
              </Button>
              <Modal title={'Add new Monsualité'} visible={visible} setVisible={setVisible}>
                <MensualiteFrom
                  setDuree={setDuree}
                  setCapital={setCapital}
                  setTauxInteretAnnuel={setTaux}
                  duree={duree}
                  taux_interet_annuel={taux}
                  capital={capital}
                  addHandler={() => addMonsualiteHandler()}
                />
              </Modal>
           
          </Card>
     
      
      <Table className={classes.table} align="middle" hover responsive>
        <TableHead>
          <TableRow>
            <TableCell>Durée</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Taux Annuel</TableCell>
            <TableCell>Taux Mensuel</TableCell>
            <TableCell>Mensualité</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MensualiteList.map((elem) => {
            return (
              <TableRow key={elem.id}>
                <TableCell>{elem.duree}</TableCell>
                <TableCell>{elem.capital}</TableCell>
                <TableCell>{elem.taux_interet_annuel}</TableCell>
                <TableCell>{elem.taux_interet_menseul}</TableCell>
                <TableCell>{elem.mensualite}</TableCell>
                <TableCell>
                  <Button color="primary"  onClick={() => openTableModal(elem.id)}>
                    <ArticleIcon />
                    <TableModal
                        table={table}
                        setTable={setTable}
                        id={elem.id}
                      />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Mensualite;
