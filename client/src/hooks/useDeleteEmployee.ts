import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import SackEmployee from '../graphql/mutations/deleteEmployee';

type Props = {
    eid: number;
    fire: boolean;
}
const useDeleteEmployee = (props: Props) => {
    const { eid, fire } =  props;
    const [ succsess, setSuccsess ] = useState<boolean | null>(null);

    const [fireEmployee, {
        loading,
        error,
        data,
    }] = useMutation(SackEmployee, {});

    useEffect(() => {
        if(!fire) return ;
        if(!eid) return;
        fireEmployee({variables: {eid: eid}})
    }, [fire]);

    useEffect(() => {
        if(!loading || error) return;
        setSuccsess(true);
        
     }, [loading, error, data]);

    return {
        loading,
        succsess
    }
}

export default useDeleteEmployee;