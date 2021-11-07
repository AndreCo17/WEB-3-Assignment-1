import React, { useState } from 'react';
import Modal from 'react-modal';
import './css/About.css'

export default function About() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="modal-window">
            <button className="about-button" onClick={() => setModalIsOpen(true)}>About</button>
            <Modal isOpen = {modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}>

                <h2>WEB 3 Assignment 1 by Andre Co</h2>
                <p className="modal-content">
                    <ul> Group Members
                        <li>Me, myself, and I</li>
                    </ul>
                    <ul> 
                        <li><a href="https://github.com/AndreCo17/WEB-3-Assignment-1">Github Link</a></li>
                    </ul>
                </p>
                <div>
                    <button className="close-about-button" onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
