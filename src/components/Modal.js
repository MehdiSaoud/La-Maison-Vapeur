import '../styles/Modal.css'


const Modal = ({children, data, modalIsOpen, upDateModalIsOpen}) => {



    console.log(modalIsOpen)

    return modalIsOpen && 
        (<div className="container" onClick={() => upDateModalIsOpen(false)}>
            <div className="container-modal" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>) 
}

export default Modal