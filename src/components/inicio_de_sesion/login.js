import React from 'react';
import GoogleLogin from 'react-google-login';





  function Login(){

    const responseGoogle = (response) => {

      console.log(response);
      console.log(response.profileObj);
      
      /*Una Vez Logeado Redirecciona al tablero gracias al profileObj(especie de token) 
      if(response.profileObj){
         window.location.href="./dashboard";
      }*/
    
    }

        return(
          <div className="Login">
          <GoogleLogin
        clientId="610559738653-i9icdpdvmh7hdl9espa3pf4i78l5c2tv.apps.googleusercontent.com"
        buttonText="Sign In With Google"
       /* render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          
        )} PERSONALIZAR BOTON */
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        
      />,


        </div>
    
      );
     
        
      
  }

 




  export default Login;
