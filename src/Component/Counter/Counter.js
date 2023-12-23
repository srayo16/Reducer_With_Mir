import { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Counter = () => {
    const initialState={
        email: "",
        password: "",
        address: "",
        city: "",
        states: "",
        zip: "",
        terms: false,
        formLook: true
    }
const reducer =(state , action)=>{
    console.log("Action", action);
    if(action?.type === "INPUT"){
        return {
            ...state,
            [action?.payload?.name]: action?.payload?.value
        }
    }
   else if(action?.type === "FORM"){
        return {
            ...state,
            [action?.payload?.name]: action?.payload?.value
        }
    }
    else if(action?.type=== "TOGGLE"){
        return {
            ...state,
            terms: !state.terms,
        }
    }
}
    const [state, dispatch] = useReducer(reducer, initialState);

    const reduxFont=async (e)=>{
        e.preventDefault();
        console.log("State", state);
        dispatch({type: "FORM", payload: {name:"formLook",value: false}});
        e.target.reset();
    }
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    return (
        <div className='container pt-3 pb-5'>
            {
                state?.formLook ?                     
            <Form onSubmit={reduxFont}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e)=> dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=> dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" name="address" onChange={(e)=> dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="New York" name="city" onChange={(e)=> dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose..." name='states' onChange={(e)=> dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}>
                            <option>Choose...</option>
                            <option value="mirpur">Mirpur</option>
                            <option value="savar">Savar</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder='1216' name='zip' onChange={(e)=> dispatch({type: "INPUT", payload: {name: e.target.name, value: e.target.value}})}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" name='terms' onClick={()=> dispatch({type: "TOGGLE"})}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>:
            <div>
                <Button variant='primary' onClick={()=> dispatch({type: "FORM", payload: {name:"formLook",value: true}})} size='sm' className='mb-2'>Back To Form</Button>
                {
                    Object.keys(state).map((data,index)=>(
                        <li key={index}>
                          <strong>{capitalizeFirstLetter(data)}:</strong> {(typeof state[data])=="boolean" ? JSON.stringify(state[data]): state[data]}
                        </li>
                      ))
                }
            </div>
}
        </div>
    );
}

export default Counter;