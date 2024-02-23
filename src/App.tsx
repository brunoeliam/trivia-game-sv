import QuestionComp from './components/Question';
import StatBar from './components/StatBar';
import questions from './questions.json';
import { Questions } from './types';
import { useState } from 'react';
import App_module from './App.module.scss';
import Reset from './components/Reset';
import Answer_module from './components/Answer.module.scss';
import Classnames from 'classnames';
import MenuScreen from './components/MenuScreen'; //

function App() {
    const allQuestions = questions as Questions;

    // 
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [waitingToAdvance, setWaitingToAdvance] = useState(false);
    // state variables

    const onStartQuiz = () => {
        setCurrentQuestionIdx(0);
    };

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);
        setWaitingToAdvance(true);
    };

    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setWaitingToAdvance(false);
    };

    if (currentQuestionIdx === -1) {
        return <MenuScreen onStartQuiz={onStartQuiz} isModalOpen/>;
    } else if (currentQuestionIdx >= allQuestions.questions.length) {
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswers}
                onPress={reset}
            />
        );
    }

    return (
        <div className={App_module.app}>
            <StatBar
                currentQuestion={currentQuestionIdx + 1}
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp
                question={allQuestions.questions[currentQuestionIdx]}
                onSubmit={onSubmit}
            />
            {waitingToAdvance && (
                <button
                    onClick={advance}
                    className={Classnames(Answer_module.answer, App_module['next-btn'])}
                >
                    Siguiente pregunta...
                </button>
            )}
        </div>
    );
}

export default App;