import React from 'react';
import './TableCell.css';

const TableCell = props => {

    const colors = ['button'];

    if (props.isCurrent) {
        colors.push('checked')
    }

    return (
        <button
            className={colors.join(' ')}
            onClick={() => props.onChangeName(props.name)}
        >
            {props.name}
        </button>
    )
};

export default TableCell;