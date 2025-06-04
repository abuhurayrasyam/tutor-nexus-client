import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import SignInWithGoogle from '../components/SignInWithGoogle';
import { Link, useLocation, useNavigate } from 'react-router';
import signInAnimation from '../../../assets/LottieFiles/signin-animation.json';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);
    
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(() => {
            navigate(`${location.state ? location.state : '/'}`);
            Swal.fire({
                icon: "success",
                title: "Welcome! You’ve logged in successfully.",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === "auth/invalid-credential") {
                Swal.fire({
                    title: "Incorrect email or password. Please try again.",
                    icon: "error",
                    draggable: true
                });
            }
        })
    }

    return (
        <div className="hero bg-base-100 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-90 md:w-100' animationData={signInAnimation} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 border border-gray-300 w-full max-w-sm shrink-0 shadow-sm pb-3">
                    <div className="card-body">
                        <h1 className="font-semibold text-center text-xl">Login Your Account</h1>
                        <form onSubmit={handleSignIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Enter your email" required />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} className="input" name="password" placeholder="Enter your password" required />
                            <button type='button' onClick={() => {setShowPassword(!showPassword)}} className='absolute top-3 right-7 cursor-pointer'>
                                {
                                    showPassword ? <IoEyeOutline size={15} /> : <IoEyeOffOutline size={15} />
                                }
                            </button>
                        </div>
                        <div> Forgot password?</div>
                        <input type="submit" className="btn btn-neutral border-dotted shadow-none border-gray-50 mt-4" value="Login" />
                        </form>
                        <h4 className="text-gray-500 text-center">Don't Have An Account ? <Link to={'/auth/signup'} className="text-red-600">SignUp</Link></h4>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 border-t border-gray-400"></div>
                            <h4 className="text-gray-600 text-sm">Or</h4>
                            <div className="flex-1 border-t border-gray-400"></div>
                        </div>
                        <SignInWithGoogle></SignInWithGoogle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;