import EmployeeTable from '../Employees/EmployeeTable';

const Employees = () => {

    return (
        <div>
            <div className='flex '> 
                <button className='btn btn-secondary'>Create new Employee (Ross Maybe?)</button>
            </div>
            
            <div className='mt-10'>
                <EmployeeTable />
            </div>
            
        </div>
        
    )
    
}

export default Employees;