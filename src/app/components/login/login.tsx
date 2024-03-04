'use client'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LoginForm = ()=>{
    return (
        <Row className='m-0'>
            <Col className='d-flex align-content-center justify-content-center '>
                <form >
                    <h5>Login</h5>
                    <label htmlFor='email'>Email</label> <br/>
                    <input id='email' type='email'/> <br/>
                    <label htmlFor='email'>Password</label> <br/>
                    <input id='password' type='password'/> <br/>
                    <button>Dang nhap</button> <br/>
                    <span>or</span> <br/>
                    <button>Dang nhap bang Microsoft</button>
                    
                </form>
            </Col>
        </Row>
        
    )
}
export default LoginForm