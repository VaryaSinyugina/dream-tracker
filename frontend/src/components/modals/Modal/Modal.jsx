import { createPortal } from "react-dom";
import Icon from "../../ui/Icon/Icon";

import './Modal.scss';

export default function Modal({ className, isOpen, onClose, children }) {
  return createPortal(
    <div className={`modal ${className} ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal__close" onClick={onClose}>
          <Icon name="x" width={30} height={30} />
        </button>
      </div>
    </div>,
    document.body
  );
}
