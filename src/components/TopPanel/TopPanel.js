import React from 'react';
import classes from './TopPanel.module.css';
import Button from "../Button/Button";

const TopPanel = ({playerPoint, computerPoint, changeTime, startGame}) => {
    return (
        <div className={classes.TopPanel}>

            {/*Строка-счет*/}
            <h2>Счет</h2>
            <table style={{margin: 'auto'}}>
                <thead>
                <tr>
                    <th>Игрок / </th>
                    <th>Компьютер</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{playerPoint}</td>
                    <td>{computerPoint}</td>
                </tr>
                </tbody>
            </table>

           {/* Инпут для ввода времени в mc*/}
            <input type="text" onChange={changeTime} placeholder="2000" />

            {/*Кнопка "Начать"*/}
            <Button onClick={startGame}>Начать</Button>

        </div>
    )
};

export default TopPanel;