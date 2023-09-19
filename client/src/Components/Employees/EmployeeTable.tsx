
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = () => {



    return (
        <div className='overflow-x-auto'>
            <table className='table'>
                <thead>
                    <tr>
                        
                    </tr>
                    <th>Employee</th>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Family Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Known as</th>
                    <th>Date Joined</th>
                </thead>
                <tbody>
                    <EmployeeRow 
                        eid={1}
                        firstName={'Moss'}
                        familyName={'Muarice'}
                        dateJoined={new Date(2000, 1, 1)}
                        knowAs={'Moss'}
                        email={'Moss@moss.com'}
                        position='IT'
                    />
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;