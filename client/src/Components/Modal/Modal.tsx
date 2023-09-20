import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

type ModalProps = {
    children:       React.ReactNode;
    isOpen:         boolean;
    setOpen:        (value: boolean) => void;
    className?:     string;
}
const Modal = (props: ModalProps) => {
    const { 
        children,
        isOpen          = true,
        setOpen,
        className       = ''
    } = props;

    return (
        <Dialog
            as="div"
            open={isOpen} 
            onClose={() => setOpen(false)}
            className='fixed top-0 left-0 z-950 w-full '
        >
            <Dialog.Overlay
                className='fixed bg-black/30 w-full h-full top-0 left-0 z-960 overflow-auto '
            >
                <div 
                    className="flex items-center justify-center w-full top-0 left-0"
                >
                    <Dialog.Panel 
                        className={`modal-box relative bg-gray-800 z-970 m-16 p-8 w-auto h-auto ${className}`}
                    >
                        <button 
                            className="absolute w-10 h-10 top-6 right-6 fill-current text-modal-close-button hover:text-black focus-visible:text-black"
                            onClick={() => {
                                window.location.reload();
                                setOpen(false);
                            }}
                        >
                            <XIcon />
                        </button>
                        { children }
                    </Dialog.Panel>
                </div>
            </Dialog.Overlay>
        </Dialog>
    );
};

export default Modal;