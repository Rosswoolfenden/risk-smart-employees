import { useState } from 'react';
import EmployeeTable from '../Employees/EmployeeTable';
import CreateNewEmployeeModal from '../Modal/CreateNewEmployeeModal';

const Employees = () => {
    const [ isNewEmployeeOpen, setIsNewEmployeeOpen ] = useState(false);
    return (
        <div>
            <div className='flex '> 
                <button className='btn btn-secondary' onClick={() => setIsNewEmployeeOpen(true)}>Create new Employee (Ross Maybe?)</button>
            </div>
            <div className='mt-10'>
                <EmployeeTable />
            </div>
            <CreateNewEmployeeModal
                isNewEmployeeOpen = {isNewEmployeeOpen}
                setIsNewEmployeeOpen = {setIsNewEmployeeOpen}
            />
        </div>   
    )
};

export default Employees;