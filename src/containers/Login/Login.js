import React, {Component} from 'react'
import {
    Container,
    Row,
    Col,
    CardGroup,
    Card,
    CardBody,
    Button,
    Input,
    InputGroup,
    InputGroupAddon} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { FakeAuth } from '../../utils/FakeAuth';
class Login extends Component {
  constructor(){
    super();
    this.state = {
      redirectToReferrer: false,
      email :'',
      password:''
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
    

      handleLogin(event) {
        event.preventDefault();
        const payload={
          "email":this.state.email,
          "password":this.state.password
        }

        const successCallBack = () => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        }

        const callBackUnAuthorized = () => {
          this.setState({password:''})
          alert("wrong email or password");
        }
       
        FakeAuth.authenticate(
          payload,
          successCallBack,
          callBackUnAuthorized
          )
      }
      render() {
        const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
        const { redirectToReferrer } = this.state
    
        if (redirectToReferrer === true) {
          return <Redirect to={from} />
        }   
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-4">
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <form onSubmit={ this.handleLogin}>
                      <InputGroup className="mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="icon-user"></i>
                          </span>
                        </div>
                        <Input
                        type="text"
                        name="email"
                        placeholder="Email" 
                        required="requiered"
                        onChange = {
                          (event) => {
                            this.setState({email:event.target.value});
                          }
                        }/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="icon-lock"></i>
                          </span>
                        </div>
                        <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        required="requiered"
                        onChange = {
                          (event) => {
                            this.setState({password:event.target.value});
                          }}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Please contact the system administrator in order to have access to SwitchLuz.</p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;