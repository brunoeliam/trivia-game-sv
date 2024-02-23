import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';

export default createBoard({
    name: 'AnswerGreen',
    Board: () => <Answer text="opcion1" color="green" />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 333,
    },
});
