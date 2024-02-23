import React from 'react';
import MenuScreen_module from './MenuScreen.module.scss';
import './ValentineComponent.scss';
import ValentineComponent from './ValentineComponent';
import Classnames from 'classnames';
import Modal from './Modal';
import { useState } from 'react';

interface MenuScreenProps {
    onStartQuiz: () => void;
    isModalOpen: boolean;
}

function MenuScreen({ onStartQuiz, isModalOpen }: MenuScreenProps) {
    return (
        <div>
            <div className={MenuScreen_module['text-menu']}>
                <div className={MenuScreen_module['bienvenida-game']}>
                    <ValentineComponent />
                </div>
            </div>
            <div className={MenuScreen_module['menu-btns']}>
                <button onClick={onStartQuiz} className={MenuScreen_module['jugar-btn']}>
                    Jugar
                </button>
                <div className={MenuScreen_module['last-two-btns']}>
                    {isModalOpen && <Modal />}
                    <button className={MenuScreen_module['activar-btn']}>❤</button>
                </div>
            </div>
        </div>
    );
}

export default MenuScreen;