import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        Swal.fire("Log In Success!", "", "success");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        Swal.fire("Google Login Success ful!", "", "success");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        Swal.fire("Git Hub Login Success ful!", "", "success");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="hero min-h-[80vh] bg-base-200">
        <h2 className="text-center">Please Login</h2>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-[#f4a492] hover:bg-[#9accc9] text-white">
                Login
              </button>
            </div>
          </form>
          <div className="px-10 py-4 text-center space-x-3">
            <button onClick={handleGoogleLogin} className="btn">
              Google
            </button>
            <button onClick={handleGithubLogin} className="btn">
              GitHub
            </button>
          </div>

          <div className="px-10 pb-10">
            <p>
              New to ?
              <Link
                className="text-blue-500 font-medium ps-2"
                to="/registration"
              >
                Sing Up!
              </Link>
            </p>
          </div>
          <div>
            {error && (
              <p className="text-red-600 ps-10 pb-5 font-semibold"> {error}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
