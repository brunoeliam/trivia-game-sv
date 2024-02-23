import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 939,
        canvasHeight: 685,
        windowWidth: 960,
        windowHeight: 583,
    },
});
