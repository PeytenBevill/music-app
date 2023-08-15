import Form from '../components/Form'

function Login(props) {
  return (
    <>
    <Form setIsLoggedIn={props.setIsLoggedIn}/>
    </>
  );
}

export default Login;
