import React, { useState } from 'react';
import './Modal.scss';
import MenuScreen_module from './MenuScreen.module.scss';
import Classnames from 'classnames';

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            <button
                onClick={toggleModal}
                className={Classnames('btn-modal', MenuScreen_module['activar-btn'])}
            >
                Para vos
            </button>

            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <h2 className="title-modal">Quiz por San Valentin</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui id justo ultricies, sagittis pulvinar dolor iaculis. In vitae sagittis felis, vel condimentum velit. Nullam ac lacus id turpis tincidunt egestas in ac erat. Sed commodo dapibus ultrices. Nulla consectetur velit eu arcu bibendum malesuada. Suspendisse in nibh ut leo lacinia suscipit nec vitae turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin consectetur hendrerit semper. Sed blandit venenatis tempor. Nam ut purus fringilla, vehicula nisl eget, fringilla mi. Cras ut vehicula mi, et gravida arcu. Cras quis lectus accumsan, faucibus dolor quis, eleifend lorem.
                        Nullam placerat dictum laoreet. Donec in ligula nec enim efficitur porta. Aenean efficitur leo nec pellentesque dictum. Vestibulum porta feugiat lobortis. Nunc viverra aliquam leo. Nulla facilisi. Sed vehicula, ante ut elementum iaculis, magna orci elementum mi, ac pharetra erat tortor et mi. Pellentesque sagittis magna sit amet.<br/>
                        <p className='date-modal'>06/12/06</p> 
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
