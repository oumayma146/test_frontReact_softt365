import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function TableModal({ table, setTable,id }) {
  const [tableData, setTableData] = useState([]);
  const Table = useSelector(state => state.mensualite.Table);

  useEffect(() => {
    setTableData(Table);
  }, [Table]);

  return (
    <Modal open={table} onClose={() => setTable(false)} size="xl">
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Période</TableCell>
              <TableCell>Solde début</TableCell>
              <TableCell>Mensualité</TableCell>
              <TableCell>Capital remboursé</TableCell>
              <TableCell>Solde fin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData ? (
              tableData.map(elem => (
                <TableRow key={elem.id}>
                  <TableCell>{elem.periode}</TableCell>
                  <TableCell>{elem.solde_debut}</TableCell>
                  <TableCell>{elem.mensualite}</TableCell>
                  <TableCell>{elem.interet}</TableCell>
                  <TableCell>{elem.capital_rembourse}</TableCell>
                  <TableCell>{elem.solde_fin}</TableCell>
                </TableRow>
              ))
            ) : null}
          </TableBody>
        </Table>
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={() => setTable(false)}>
          Close
        </Button>
      </div>
    </Modal>
  );
}
