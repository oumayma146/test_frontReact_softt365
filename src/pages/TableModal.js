import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function TableModal({ table, setTable, id }) {
  const [tableData, setTableData] = useState([]);

  const tableDataFrom = useSelector(state => state.mensualite.table);
  useEffect(() => {
    setTableData(tableDataFrom);
  }, [tableDataFrom]);
  return (
    <Dialog open={table} onClose={() => setTable(false)} maxWidth="xl">
      <DialogTitle>Tableau d'amortissement</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Période</TableCell>
              <TableCell>Solde début</TableCell>
              <TableCell>Mensualité</TableCell>
              <TableCell>Intérêt</TableCell>
              <TableCell>Capital remboursé</TableCell>
              <TableCell>Solde fin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((elem) => (
              <TableRow key={elem.id}>
                <TableCell>{elem.periode}</TableCell>
                <TableCell>{elem.solde_debut}</TableCell>
                <TableCell>{elem.mensualite}</TableCell>
                <TableCell>{elem.interet}</TableCell>
                <TableCell>{elem.capital_rembourse}</TableCell>
                <TableCell>{elem.solde_fin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={() => setTable(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
