import { useState } from "react"
import useEditEmployee from "../../hooks/useEditEmployee"
import Modal from "./Modal"
import { CheckCircleIcon } from "@heroicons/react/solid"

type Props = { 
    eid: number,
    firstName: string
    familyName: string
    knowAs?: string
    position: string
    email: string
    index: number
    isEditOpen: boolean,
    setIsEditOpen: (openModal: boolean) => void
}

const EmployeeModal = (props: Props) => { 
    const {  firstName, familyName, knowAs, position, email, setIsEditOpen, isEditOpen } = props;
    const [edit, setEdit ] =  useState<boolean>(false);
    const {
        handleJobChange,
        handleEmailChange,
        handleNicknameChange,
        handleFnChange,
        handleLnChange, loading, succsess
    } =  useEditEmployee({...props, edit});

    return (
        <Modal 
            isOpen={isEditOpen}
            setOpen={setIsEditOpen} 
            children={
                <div>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl mr-12 ml-12 text-white font-bold '>
                            Edit Employee Infomation
                        </h1>
                        <p className='mr-12 ml-12 mt-6'>
                            if you edit and leave them blank they will not change.
                        </p>
                        {loading && 
                            <div className=' mt-6 mr-12 ml-12'>
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
                        }
                        {succsess && 
                            <div className='flex justify-center mt-6 '>
                                <span className="flex justify-center "><CheckCircleIcon className='w-20 fill-success'/></span>
                            </div>
                        }
                        {!loading && !succsess &&
                            <>
                                <div className=' mt-6 mr-12 ml-12'>
                                    <h2>First Name</h2>
                                    <input onChange={handleFnChange} type="text" placeholder={firstName }className="input input-bordered input-success w-full max-w-xs mt-2" />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Family Name</h2>
                                    <input onChange={handleLnChange} type="text" placeholder={familyName} className="input input-bordered input-success w-full max-w-xs mt-2" />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Position</h2>
                                    <input onChange={handleJobChange} type="text" placeholder={position} className="input input-bordered input-success w-full max-w-xs mt-2" />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Email</h2>
                                    <input onChange={handleEmailChange} type="text" placeholder={email} className="input input-bordered input-success w-full max-w-xs mt-2" />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Know as</h2>
                                    <input onChange={handleNicknameChange} type="text" placeholder={knowAs} className="input input-bordered input-success w-full max-w-xs mt-2" />
                                </div>
                            </>
                        }
                        <div>
                        {!succsess && !loading &&  
                            <div className='flex mt-6 justify-center mr-10'>
                                <button className='btn w-40 mr-10' onClick={() =>setIsEditOpen(false)}>
                                    <h3>
                                        Cancel
                                    </h3>
                                </button>
                                                        
                                    <button className='btn btn-secondary w-40' onClick={() => {setEdit(true)}}>
                                        <h3>
                                            Edit employee
                                        </h3>
                                    </button>
                                
                            </div>
                        }
                        {succsess && 
                            <div className='flex flex-col justify-center'>
                                <h2 className='flex  justify-center'>
                                    Succsesfully Completed Edit
                                </h2>
                                <button className='ml-16 btn btn-success w-80 mt-10 ' onClick={() => {window.location.reload();}}>
                                    <h3>
                                        Close
                                    </h3>
                                </button>
                            </div>
                        } 
                        </div>
                    </div>
                </div>
            }
        />
    )
};

export default EmployeeModal;