import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const BasicCounterDynamic = () => {
    const initialState = 0;
    const reducer = (state,action) => {
        console.log("action", action);
        if(action?.type === "INCREMENT"){
            return state+action?.payload?.value;
        }
        else if(action?.type === "DECREMENT"){
            return state-action?.payload?.value;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const funcForDis =(p)=>{
        if(p?.payload?.in ===true){
            let value = prompt("Please enter how many?", "");
            p.payload.value=Number(value);
            dispatch(p);
        }
        else if(p?.payload?.in === false){
            let value = prompt("Please enter how many?", "");
            p.payload.value=Number(value);
            dispatch(p);
        }
    }
    return (
        <div className='container pt-3'>
            <h4>Dynamic</h4>
        <div className='mb-5'>
           <h4><span className='fw-bold text-danger'>State Count :</span> {state}</h4>
           <Button variant='success'className='mt-2'  size='sm' onClick={()=> funcForDis({ type: "INCREMENT", payload:{in: true}})}>INCREMENT</Button>
           <Button variant='danger' className='mt-2 ms-2' size='sm' onClick={()=>funcForDis({type: "DECREMENT", payload: {in: false}})}>DECREMENT</Button>
       </div>
   </div>
    );
};

export default BasicCounterDynamic;