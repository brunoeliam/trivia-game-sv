import React from 'react';
import ValentineComponent_module from './ValentineComponent.module.scss';
import Classnames from 'classnames';

function ValentineComponent() {
    return (
        <h1
            className={Classnames('playful', ValentineComponent_module['feliz-colours'])}
            aria-label="Feliz san valentin"
        >
            <span aria-hidden="true">F</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">l</span>
            <span aria-hidden="true">i</span>
            <span aria-hidden="true">Z</span>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true">S</span>
            <span aria-hidden="true">a</span>
            <span aria-hidden="true">n</span>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true">v</span>
            <span aria-hidden="true">a</span>
            <span aria-hidden="true">l</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">n</span>
            <span aria-hidden="true">t</span>
            <span aria-hidden="true">i</span>
            <span aria-hidden="true">n</span>
        </h1>
    );
}

export default ValentineComponent;
