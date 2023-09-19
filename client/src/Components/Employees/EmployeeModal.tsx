
type Props = { 
    eid: number,
    firstName: string
    familyName: string
    knowAs?: string
    position: string
    email: string
    edit: boolean
}

const EmployeeModal = (props: Props) => { 
    const {  firstName, familyName, knowAs, position, email, eid } = props;


    return (
        <div className='flex flex-col '>
            <h1 className='text-3xl mr-12 ml-12 text-white font-bold '>
                Edit Employee Infomation
            </h1>
            <p className='mr-12 ml-12 mt-6'>
                if you edit and leave them blank they will not change.
            </p>
            <div className=' mt-6 mr-12 ml-12'>
                <h2>First Name</h2>
                <input type="text" placeholder={firstName }className="input input-bordered input-success w-full max-w-xs mt-2" />
            </div>
            <div className='mr-12 ml-12 mt-6'>
                <h2>Family Name</h2>
                <input type="text" placeholder={familyName }className="input input-bordered input-success w-full max-w-xs mt-2" />
            </div>
            <div className='mr-12 ml-12 mt-6'>
                <h2>Position</h2>
                <input type="text" placeholder={position }className="input input-bordered input-success w-full max-w-xs mt-2" />
            </div>
            <div className='mr-12 ml-12 mt-6'>
                <h2>Email</h2>
                <input type="text" placeholder={email}className="input input-bordered input-success w-full max-w-xs mt-2" />
            </div>
            <div className='mr-12 ml-12 mt-6'>
                <h2>Know as</h2>
                <input type="text" placeholder={knowAs}className="input input-bordered input-success w-full max-w-xs mt-2" />
            </div>

            
        </div>
    )
};

export default EmployeeModal;