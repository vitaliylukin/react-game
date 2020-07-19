import React from 'react';
import './TableCell.css';

const TableCell = props => {

    const colors = ['button'];

    if (props.isCurrent) {
        colors.push('current')
    } else if (props.isUser) {
        colors.push('user')
    } else if (props.isError) {
        colors.push('error')
    }

    return (
        <button
            color="primary"
            className={colors.join(' ')}
            onClick={() => props.onChangeButton(props.name)}
        >
            {props.name}
        </button>
    )
};

export default TableCell;