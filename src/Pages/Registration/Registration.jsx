import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
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
      .then((result) => {
        Swal.fire("Registration Success!", "", "success");
        e.target.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="min-h-[80vh] bg-base-200">
        <h2 className="text-center text-5xl font-semibold py-10 lg:py-16">
          Registration
        </h2>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
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
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
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
