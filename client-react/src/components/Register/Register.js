import React from 'react';

const Register = () => {
    return (
        <>
        <form>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="username" className="form-control" placeholder="Full name" type="text"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" className="form-control" placeholder="Email address" type="email"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="password" className="form-control" placeholder="Enter Password" type="password"/>
    </div> 
                             
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
    </div>       
    <p className="text-center">Have an account? <a href="/login">Log In</a> </p>                                                                 
</form>

        </>

    )
}

export default Register;