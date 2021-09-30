import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


// define portal component in test for better transparency
// 1) create root element in real DOM (it needs for test purposes, in real app we usually already have root element in "index.html")
const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

// 2) create react-component with portal
const Modal = ({ onClose, children }) => {
  // create DOM element in which we will add our JSX. At first render this element is unmounted but we will mount it after render in useEffect()
  const el = document.createElement("div");

  useEffect(() => {
    // render our portal inside the root element after mounting
    modalRoot.appendChild(el);
    // delete our portal from the root element before unmounting
    return () => modalRoot.removeChild(el);
  })

  return createPortal(
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        { children }
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    el
  )
}


// 3) Portal testing
describe('Portal', () => {
  it('modal shows the children and a close button', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal onClose={handleClose}>
        <div>My Portal</div>
      </Modal>
    )

    expect(getByText("My Portal")).toBeInTheDocument();   // positive result show that portal rendered passed children successfully
    userEvent.click(getByText(/close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);     // we checked that Portal was also rendered successfully, because it contains the button and we checked its logic
  })

  it('should be unmounted', () => {
    const handleClose = jest.fn();
    const { getByText, unmount, queryByText } = render(
      <Modal onClose={handleClose}>
        <div>My Portal</div>
      </Modal>
    )

    expect(getByText("My Portal")).toBeInTheDocument();
    unmount();
    expect(queryByText("My Portal")).not.toBeInTheDocument();
    // or   expect(queryByText("My Portal")).toBeNull();
  })
})