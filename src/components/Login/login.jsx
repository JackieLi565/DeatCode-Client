import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ handleRegister }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const submit = async () => {
    const req = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (!req.data.redirectURL) {
      setError(true);
      return;
    }

    navigate(req.data.redirectURL);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-headline text-4xl font-bold">DeatCode</h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-paragraph">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-paragraph"
            >
              email
            </label>
            <div className="mt-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-black outline-none sm:text-sm sm:leading-6 p-3"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-paragraph"
              >
                Password
              </label>
              <div className="text-sm">
                <button
                  onClick={() => navigate("/Reset")}
                  className="font-semibold text-paragraph hover:text-third"
                >
                  Forgot your password?
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-black outline-none sm:text-sm sm:leading-6 p-3"
              />
            </div>
            {error ? (
              <p className="text-error flex justify-center pt-2">
                Password or Email is inccorect
              </p>
            ) : (
              <p></p>
            )}
          </div>

          <div>
            <button
              onClick={submit}
              className="flex w-full justify-center rounded-md bg-button px-3 py-1.5 text-sm font-semibold leading-6 text-headline shadow-sm hover:bg-opacity-70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-paragraph">
          Not a member? &nbsp;
          <button
            onClick={() => handleRegister()}
            href="#"
            className="font-semibold leading-6 text-headline hover:text-third"
          >
            register for free
          </button>
        </p>
      </div>
    </>
  );
}

export default Login;
