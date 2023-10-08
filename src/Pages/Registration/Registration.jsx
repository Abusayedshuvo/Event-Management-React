import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser, updatePro } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("Password at lest 6 charter");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)) {
      setError("Password need a capital letter and a special character");
      return;
    }
    setError("");
    createUser(email, password)
      .then(() => {
        Swal.fire("Registration Success!", "", "success");
        e.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });

    /* updatePro(name)
      .then((result) => console.log(result.message))
      .catch((error) => {
        console.log(error);
      }); */
  };

  return (
    <>
      <div className="hero min-h-[80vh] bg-base-200">
        <h2 className="text-center">Please Login</h2>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-[#f4a492] hover:bg-[#9accc9] text-white ">
                Registration
              </button>
            </div>
          </form>
          <div className="px-10 pb-5">
            <p>
              Already have account ?
              <Link className="text-blue-500 font-medium ps-2" to="/login">
                Login!
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

export default Registration;
