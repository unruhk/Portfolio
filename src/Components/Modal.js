import React, { View, Text } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ open, data, onClose }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal">

                <div className="modal-content">
                    <span class="close">&times;</span>
                    <p>{data}</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal