import { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
const Login = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e: any) => {
    if(username==='' && password==='') return 0
    e.preventDefault();
    fetch("http://localhost:8000/login/log", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const togglePasswordView = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="shadow-lg rounded-xl px-5 bg-white w-[20rem] h-[20rem] flex flex-wrap justify-start items-center"
      >
        <h1 className="w-full text-4xl text-center">
          XcitEdu
          <span className="text-blue-400 font-bold">Admin</span>
        </h1>
        <div className="flex w-full bg-slate-100 items-start gap-1">
          <input
            type="text"
            className="py-1 px-2 bg-slate-100 w-full"
            placeholder="username"
            onChange={(e: any) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="flex w-full bg-slate-100 items-start gap-1">
          <input
            type={showPassword ? "text" : "password"}
            className="py-1 px-2 bg-slate-100 w-full"
            placeholder="password"
            
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          {!showPassword ? (
            <Eye
              className="mr-3 mt-1"
              type="button"
              onClick={togglePasswordView}
            />
          ) : (
            <EyeSlash
              type="button"
              onClick={togglePasswordView}
              className="mr-3 mt-1"
            />
          )}
        </div>

        <button
          type="submit"
          className="rounded-xl bg-blue-500 hover:shadow-xl text-white w-full font-semibold  py-2 px-5"
        >
          login
        </button>
      </form>
    </div>
  );
};
export default Login;
