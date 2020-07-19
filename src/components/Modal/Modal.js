import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal/Portal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './Modal.css';

const Modal = ({
                   title, isOpen, onCancel, children
               }) => {

    return (
        <>
            { isOpen &&
            <Portal>
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                            <Icon style={{cursor: 'pointer'}} onClick={onCancel}>close</Icon>
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">
                            <Button variant="contained" color="primary" onClick={onCancel}>Закрыть</Button>
                        </div>
                    </div>
                </div>
            </Portal>
            }
        </>
    );
};
Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    children: PropTypes.node
};
Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    children: null
};
export default Modal;