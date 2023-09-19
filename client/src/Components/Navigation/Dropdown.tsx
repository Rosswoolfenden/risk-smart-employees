import { Link } from 'react-router-dom';

type Props = {
    name: string;
    dropdownItems: { name: string; url: string; }[];
}

const Dropdown = ( props: Props ) => {
    const { name, dropdownItems } =  props;

    return (
        <div className='dropdown dropdown-hover'>
            <label tabIndex={0}>
                { name }
            </label>
            <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
            {dropdownItems.map(({ name, url }, index) => (  
                <li key={index}>
                    <Link to={url}>{name}</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}


export default Dropdown;