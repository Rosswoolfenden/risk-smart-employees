import useCreateNewEmployee from '../../hooks/useCreateNewEmployee';
import Modal from './Modal';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

type Props = { 
    isNewEmployeeOpen: boolean,
    setIsNewEmployeeOpen: (isNewEmployeeOpen: boolean) => void
}

const CreateNewEmployeeModal = (props: Props) => {
    const { isNewEmployeeOpen, setIsNewEmployeeOpen } = props;

    const {
        handleJobChange,
        handleNicknameChange,
        handleFnChange,
        handleLnChange,
        handleEmailChange, 
        first,
        last, 
        emailAdress, 
        job,
        setCreateEmployee,
        error, 
        loading,
        succsess
    }= useCreateNewEmployee();

    return (
        <Modal 
            isOpen={isNewEmployeeOpen}
            setOpen={setIsNewEmployeeOpen} 
            children={
                <div> 
                    <div className='flex flex-col'>
                        <h1 className='text-3xl mr-12 ml-12 text-white font-bold '>
                            Hire new Employee Infomation
                        </h1>
                        <p className='mr-12 ml-12 mt-6'>
                            Hopfully they are better than the current ones.
                        </p>
                        {error && 
                            <div className='alert alert-error mt-10'>
                                <XCircleIcon className='h-6 fill-red'/>
                                <h1>{error}</h1>
                            </div>
                        }
                        {succsess && 
                            <div className='flex justify-center mt-6 '>
                                <span className='flex justify-center '><CheckCircleIcon className='w-20 fill-success'/></span>
                            </div>
                        }
                        {!loading && !succsess &&
                            <>
                                <div className=' mt-6 mr-12 ml-12'>
                                    <h2>First Name</h2>
                                    <input onChange={handleFnChange} type='text' placeholder={'First Name' } className={`input input-bordered  w-full max-w-xs mt-2 ${first? 'input-success' : 'input-error'}`} />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Family Name</h2>
                                    <input onChange={handleLnChange} type='text' placeholder={'family Name'} className={`input input-bordered  w-full max-w-xs mt-2 ${last? 'input-success' : 'input-error'}`} />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Position</h2>
                                    <input onChange={handleJobChange} type='text' placeholder={'position'} className={`input input-bordered  w-full max-w-xs mt-2 ${job? 'input-success' : 'input-error'}`} />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Email</h2>
                                    <input onChange={handleEmailChange} type='text' placeholder={'email'} className={`input input-bordered  w-full max-w-xs mt-2 ${emailAdress? 'input-success' : 'input-error'}`} />
                                </div>
                                <div className='mr-12 ml-12 mt-6'>
                                    <h2>Know as</h2>
                                    <input onChange={handleNicknameChange} type='text' placeholder={'Know as? (default first name)'} className='input input-bordered input-success w-full max-w-xs mt-2' />
                                </div>
                            </>
                        }
                        {!succsess && !loading &&  
                            <div className='flex mt-6 justify-center mr-10'>
                                <button className='btn w-40 mr-10' onClick={() =>{setIsNewEmployeeOpen(false)}}>
                                    <h3>
                                        Cancel
                                    </h3>
                                </button>
                                                        
                                    <button className='btn btn-secondary w-40' onClick={() => {setCreateEmployee(true)}}>
                                        <h3>
                                            Add Employee
                                        </h3>
                                    </button>
                                
                            </div>
                        }
                        {succsess && 
                            <div className='flex flex-col justify-center'>
                                <h2 className='flex  justify-center'>
                                    New Hire Confirmed 
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
            }
        />
    );
}
export default CreateNewEmployeeModal;