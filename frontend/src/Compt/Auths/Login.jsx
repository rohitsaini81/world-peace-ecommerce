import  { useState } from "react";
import axios from "axios";

export default function Login() {
  const URI = "http://localhost:4000/";
  const [formType, setFormType] = useState("signin");
  const [Uname, setUname] = useState("");
  const [username, setEmail] = useState("");
  const [passWd, setPassWd] = useState("");
  const [rePass, setRePass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === "signin") {
      if (username === "" || passWd === "") return;
      const Data = { username, password: passWd };

      try {
        const result = await axios.post(URI + "login", Data, {
          withCredentials: true,
        });

        console.log(result.data);
      } catch (error) {
        console.error("Login Error:", error.message);
      }
    } else if (formType === "signup") {
      if (!username || !passWd || !Uname || !rePass || rePass !== passWd) return;
      const Data = {
        Name: Uname,
        age: -1,
        username,
        password: passWd,
        gender: false,
      };

      try {
        const result = await axios.post(URI + "register", Data, {
          withCredentials: true,
        });
      
        console.log("Signup Success:", result.data);  // ✅ Log API response
      } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);
      }
    }

    setUname("");
    setEmail("");
    setPassWd("");
    setRePass("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 bg-white shadow-lg rounded-xl p-6">
        {/* Tab Switcher */}
        <div className="flex justify-around border-b pb-2">
          <button
            onClick={() => setFormType("signin")}
            className={`w-1/2 text-center font-bold p-2 ${
              formType === "signin" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setFormType("signup")}
            className={`w-1/2 text-center font-bold p-2 ${
              formType === "signup" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {formType === "signup" && (
            <input
              type="text"
              placeholder="Username"
              value={Uname}
              onChange={(e) => setUname(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          )}

          <input
            type="username"
            placeholder="username Address"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={passWd}
            onChange={(e) => setPassWd(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />

          {formType === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={rePass}
              onChange={(e) => setRePass(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
          >
            {formType === "signin" ? "Sign In" : "Sign Up"}
          </button>

          {formType === "signin" && (
            <div className="text-center text-sm text-gray-500 mt-2">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
