import { Employee } from '../../types';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import EmployeeModal from '../Modal/EditEmployeeModal';
import { useState } from 'react';
import DeleteEmployeeModal from '../Modal/DeleteEmployeeModal';

type Props = {
    employee : Employee,
    index: number
}

const EmployeeRow = (props: Props) => {
    const { eid, firstName, familyName, dateJoined, knowAs, position, email } = props.employee;
    const [ isEditOpen, setIsEditOpen ] = useState<boolean>(false);
    const [ isDeleteOpen, setIsDeleteOpen] =  useState<boolean>(false);
    return (
        <>
            <tr className='hover'>
                <th>
                    <button className='btn btn-secondary' onClick={() =>setIsEditOpen(true)}>
                        <label htmlFor='my-modal-2' > 
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
                    <button className='btn btn-red'  onClick={()=> {setIsDeleteOpen(true)}}>
                        <label htmlFor='my-modal-1' >
                            <TrashIcon className='h-6' />
                        </label>
                    </button>
                </th>
            </tr>
            <EmployeeModal 
                eid={eid}
                firstName={firstName}
                familyName={familyName}
                knowAs={knowAs}
                email={email}
                position={position}
                index={props.index}
                isEditOpen={isEditOpen}
                setIsEditOpen={setIsEditOpen}
            />
            <DeleteEmployeeModal
                eid={eid}
                firstName={firstName}
                setIsDeleteOpen={setIsDeleteOpen}
                isDeleteOpen={isDeleteOpen}
            />
        </>
    )
}

export default EmployeeRow;