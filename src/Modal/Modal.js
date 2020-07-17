import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal/Portal';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

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
                            <Icon name="times" onClick={onCancel} />
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">
                            <Button onClick={onCancel}>Закрыть</Button>
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