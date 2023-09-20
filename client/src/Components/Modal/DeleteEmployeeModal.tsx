import { useState } from "react"
import Modal from "./Modal"
import useDeleteEmployee from "../../hooks/useDeleteEmployee"

type Props = {
    eid: number,
    firstName: string,
    isDeleteOpen: boolean,
    setIsDeleteOpen: (setIsDeleteOpen: boolean) => void
}

const DeleteEmployeeModal = (props: Props) => { 
    const { eid, isDeleteOpen, setIsDeleteOpen, firstName } = props
    const [fire, setFire ] =  useState<boolean>(false);
    const { succsess } =  useDeleteEmployee({eid, fire});
    return (
        <Modal
            isOpen={isDeleteOpen}
            setOpen={setIsDeleteOpen}
            children={ 
                <div>
                    {!succsess  &&
                        <>
                            <div className='flex flex-col '>
                                <h1 className='text-3xl mr-12 ml-12 text-white font-bold '>
                                    Are you sure you want to sack {firstName} 
                                </h1>
                                <p className='mr-12 ml-12 mt-6'>
                                    They will be gone forever and proably dislike you
                                </p>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <button className='ml-16 btn btn-error w-80 mt-10 ' onClick={() => {setFire(true)}}>
                                    <h3>
                                        FIRE
                                    </h3>
                                </button>
                            </div>
                        </>
                    }
                        {succsess && 
                            <>
                                <div className='flex flex-col '>
                                    <h1 className='text-3xl mr-12 ml-12 text-white font-bold '>
                                        YOU SACKED {firstName} 
                                    </h1>
                                    <p className='mr-12 ml-12 mt-6'>
                                        They will be gone forever and proably dislike you
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <button className='ml-16 btn btn-error w-80 mt-10 ' onClick={() => {window.location.reload();}}>
                                        <h3>
                                            Congrats -  you can close now.
                                        </h3>
                                    </button>
                                </div>
                            </>
                        }
                    
                </div>
            }
        />
    )
}

export default DeleteEmployeeModal;


