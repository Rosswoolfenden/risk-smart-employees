import { Employee } from '../../types';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import EmployeeModal from './EmployeeModal';
import { useState } from 'react';

const EmployeeRow = (employee :Employee) => {
    const { eid, firstName, familyName, dateJoined, knowAs, position, email } = employee;
    const [ edit, setEdit ] = useState<boolean>(false);
    const [ updateSuccess, setUpdateSuccess ] = useState<boolean>(false);
    
    return (
        <>
            <tr className='hover'>
                <th>
                    <button className='btn btn-secondary'>
                        <label htmlFor="my-modal-2" > 
                            <PencilAltIcon className='h-6' />
                        </label>
                    </button>
                </th>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <div className='font-bold'>{eid}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <div className='font-bold'>{firstName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <div className='font-bold'>{familyName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <div className='font-bold'>{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <div className='font-bold'>{position}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <div className='font-bold'>{knowAs}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <div className='font-bold'>{dateJoined?.toString()}</div>
                        </div>
                    </div>
                </td>
                <th>
                    <button className='btn btn-red'  onClick={()=> {}}>
                        <label htmlFor="my-modal-1" >
                            <TrashIcon className='h-6' />
                        </label>
                    </button>
                </th>
            </tr>

            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal bg-gray-800">
                <div className="modal-box relative bg-gray-800">
                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex flex-col '>
                        <h1 className='text-3xl mr-12 ml-12 text-white font-bold '>
                            Edit Employee Infomation
                        </h1>
                        <p className='mr-12 ml-12 mt-6'>
                            if you edit and leave them blank they will not change.
                        </p>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal bg-gray-800">
                <div className="modal-box relative bg-gray-800">
                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {!updateSuccess   &&
                        <EmployeeModal 
                            eid={employee.eid}
                            firstName={employee.firstName}
                            familyName={employee.familyName}
                            knowAs={employee.knowAs}
                            email={employee.email}
                            position={employee.position}
                            edit={edit}
                            setUpdateSuccess={setUpdateSuccess}
                        />
                    }
                    {updateSuccess && 
                        <>
                            Update Succsess!
                        </>

                    }
                    <div className='flex mr-12 ml-12'>
                        {updateSuccess &&
                            <button className='btn w-40 mt-6 mr-10 '>
                                <label htmlFor="my-modal-2" onClick={() => {window.location.reload();}}>
                                    Cancel
                                </label>
                            </button>
                        }
                        {!updateSuccess   &&
                            <>
                                <button className='btn w-40 mt-6 mr-10 '>
                                    <label htmlFor="my-modal-2" >
                                        Cancel
                                    </label>
                                </button>
                            
                                <button className='btn btn-secondary w-40 mt-6' onClick={() => {setEdit(true)}}>
                                    Edit
                                </button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>

        
    )
}

export default EmployeeRow;