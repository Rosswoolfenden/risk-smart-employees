import { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import EditEmployee from "../graphql/mutations/editEmployee";

type Props = { 
    eid: number,
    firstName: string
    familyName: string
    knowAs?: string
    position: string
    email: string
    edit: boolean
}

const useEditEmployee = (props:  Props) => {
    const {  firstName, familyName, knowAs, position, email, eid, edit } = props;
    const [ first, setFirst ] = useState(firstName);
    const [ last, setLast ] = useState(familyName);
    const [ emailAdress, setEmail ] = useState(email);
    const [ nickname, setNickname ] = useState(knowAs);
    const [ job, setJob ] = useState(position);
    const [ succsess, setSuccsess ] = useState<boolean | null>(null);
    const [editEmpoye, {
        loading,
        error,
        data,
    }] = useMutation(EditEmployee, {});


    const handleFnChange = (e: any) => {
        setFirst(e.target.value);
    }

    const handleLnChange = (e: any) => {
        setLast(e.target.value);
    }
    const handleNicknameChange = (e: any) => {
        setNickname(e.target.value);
    }

    const handleJobChange = (e: any) => {
        setJob(e.target.value);
    }

    const handleEmailChange = (e: any) => { 
        setEmail(e.target.value);
    }

    useEffect(() => {

        if(!edit) return;
        editEmpoye({variables : {
            eid: eid,
            firstName: first,
            familyName: last,
            email: emailAdress,
            knowAs: nickname,
            position: job
        }
        });
    }, [edit]);

    useEffect(() => {
        if(data && !error) {
            setSuccsess(true);
        }
    } ,[ loading, data, error]);

    return {
        handleJobChange,
        handleNicknameChange,
        handleFnChange,
        handleLnChange,
        handleEmailChange,
        loading,
        error,
        succsess
    }
}

export default useEditEmployee;
