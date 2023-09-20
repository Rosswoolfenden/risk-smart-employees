import { useState } from 'react';
import EmployeeTable from '../Employees/EmployeeTable';
import CreateNewEmployeeModal from '../Modal/CreateNewEmployeeModal';

const Employees = () => {
    const [ isNewEmployeeOpen, setIsNewEmployeeOpen ] = useState(false);
    const [ search, setSearch ] = useState('');

    const handleSearchChange = (e: any) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <div className='flex w-full'> 
                <button className='btn btn-secondary' onClick={() => setIsNewEmployeeOpen(true)}>Create new Employee (Ross Maybe?)</button>
                <input type="text" onChange={handleSearchChange} placeholder="Search (First Name, Last Name, Email)" className="input input-bordered input-secondary w-full ml-10" />
            </div>
            <div className='mt-10'>
                <EmployeeTable search={search}/>
            </div>
            <CreateNewEmployeeModal
                isNewEmployeeOpen = {isNewEmployeeOpen}
                setIsNewEmployeeOpen = {setIsNewEmployeeOpen}
            />
        </div>   
    )
};

export default Employees;