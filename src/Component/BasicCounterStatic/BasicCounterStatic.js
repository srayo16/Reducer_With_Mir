import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const BasicCounterStatic = () => {
    const initialState = 0;
    const reducer = (state,action) => {
        if(action.type === "INCREMENT"){
            return state+1;
        }
        else if(action.type === "DECREMENT"){
            return state-1;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='container pt-3'>
             <div>
                <h4>Static</h4>
                <h4><span className='fw-bold text-danger'>State Count :</span> {state}</h4>
                <Button variant='success'className='mt-2'  size='sm' onClick={()=> dispatch({type: "INCREMENT"})}>INCREMENT</Button>
                <Button variant='danger' className='mt-2 ms-2' size='sm' onClick={()=>dispatch({type: "DECREMENT"})}>DECREMENT</Button>
            </div>
        </div>
    );
};

export default BasicCounterStatic;