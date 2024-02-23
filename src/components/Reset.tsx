import App_module from '../App.module.scss';
import Answer_module from './Answer.module.scss';
import Classnames from 'classnames';
import Reset_module from './Reset.module.scss';
import React from 'react';

type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

function Reset(props: Props) {
    const resultado: string = `${(props.correctQuestions / props.totalQuestions) * 100}`;
    
    return (
        <div className={Reset_module['div-final']}>
            <div>
                <h1 className={Reset_module['reset-text']}>
                    Tu puntaje fue: {resultado}%
                </h1>
            </div>
            <div className={Reset_module['final-buttn']}>
                <button
                    onClick={props.onPress}
                    className={Classnames(
                        App_module['next-btn'],
                        Answer_module.answer,
                        Reset_module['reset-btn']
                    )}
                >
                    Jugar de nuevo
                </button>
            </div>
        </div>
    );
}

export default Reset;
