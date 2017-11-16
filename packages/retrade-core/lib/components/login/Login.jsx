import React from 'react';
import styled from 'styled-components'
import {boxShadow, borderRadius, transition} from '../../stylesheets/style.utils.js';
import Header from '../common/layouts/header/Header.jsx'
import Footer from '../common/layouts/footer/Footer.js'
import {ButtonPrimary} from '../common/presentational-components/buttons/ButtonPrimary.js'

const Banner = styled.div`
  background-image: url('/packages/retrade_core/lib/static/Electronics.png');
  height: 250px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  justify-content: center;
  overflow: hidden;
  //align-items: center;

  ${transition("all", ".5s")}

  img {
    position: absolute;
    right: 30%;
    z-index: -1;
  }

  h1 {
    margin-top: 50px;
    color: white;
    font-family: Lulo Clean;
  }
`;

const Filter = styled.div`
  background: rgba(0, 0, 0, 0.75);
  height: 250px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

const SignupContainer = styled.div`
  height: 500px;
  width: 400px;
  padding: 22px;
  background: white;
  position: absolute;
  left: 50%;
  top:50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  ${boxShadow("1px", "1px", "10px", "0", "rgba(0, 0, 0, 0.38)")}

  img {
    margin-top: 20px;
  }

  b {
    text-align: center;
    margin-top: 20px;
  }
`;

const AuthForm = styled.form`
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 50px;

  input {
    width: 325px;
  }

  .input-row {
    width: 80%;

    .icon-container {
      height: 39px;
    }
  }
`;

const IconContainer = styled.div`
      position: absolute;
      color: gray;
      align-items: center;
      justify-content: center;
      left: 1px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      background: #ebf7ff;
      width: 42px;
      height: 46px;
      ${borderRadius("5px")}
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-right: thin solid lightgray;
`;

const Input = styled.input`
    padding-left: 50px
`;


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit(ev) {
        ev.preventDefault();
    }


    render() {

        return (
            <div className="flex-column">
                <Header/>
                <Filter/>
                <Banner className="flex-row">
                    <h1>LOGIN</h1>
                </Banner>

                <SignupContainer className="flex-column">
                    <img src="/packages/retrade_core/lib/static/login.svg" height="60"/>
                    <b>Login below to search for products.</b>

                    <AuthForm onSubmit={this.handleSubmit} className="flex-column">
                        <div className="flex-column align-center justify-center full-width">

                            <div className="relative flex-row align-center justify-center">
                                <IconContainer className="flex-row">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </IconContainer>
                                <Input placeholder="Email"/>
                            </div>

                            <div className="relative flex-row align-center justify-center">
                                <IconContainer className="flex-row">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </IconContainer>
                                <Input placeholder="Password"/>
                            </div>
                        </div>


                        <ButtonPrimary type="submit">LOGIN</ButtonPrimary>

                    </AuthForm>
                </SignupContainer>

                <Footer/>
            </div>
        )
    }
}

/*
 App.propTypes = {
 connected: React.PropTypes.bool,
 loading: React.PropTypes.bool,
 likes: React.PropTypes.number,
 friends: React.PropTypes.number
 };*/
