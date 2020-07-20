import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TopPanel = ({playerPoint, computerPoint, changeTime, startGame, name}) => {

    const useStyles = makeStyles({
        button: {
            display: 'block',
            margin: '20px auto'
        },
        table: {
            maxWidth: 450,
            margin: '20px auto',
        }
    });

    const classes = useStyles();

    function createData(first, second) {
        return { first, second };
    }

    const rows = [
        createData(playerPoint, computerPoint),
    ];

    return (
        <div>
            {/*Строка-счет*/}
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Игрок</TableCell>
                            <TableCell align="center">Компьютер</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.first}>
                                <TableCell align="center">{row.first}</TableCell>
                                <TableCell align="center">{row.second}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

           {/* Инпут для ввода времени в mc*/}
            <TextField size="small" label="Ввести время" variant="outlined" onChange={changeTime} />

            {/*Кнопка "Начать"*/}
            <Button className={classes.button} variant="contained" color="primary" onClick={startGame}>Начать</Button>

        </div>
    )
};

export default TopPanel;