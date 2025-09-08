import React, { useState } from "react";

export default function AuthPage({signup, setSignup}) {
  const [role, setRole] = useState(null);
  const [isLogin, setIsLogin] = useState(false); // NEW toggle for login/signup

  return (
    <>
      {signup && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#2E4B93] p-6">
          {!role && (
            <div className="flex flex-col items-center justify-center gap-6 border bg-white border-gray-900 rounded-md shadow-lg" style={{height: "15rem", width: "27rem"}}>
              <h1 className="text-[#2E4B93] text-3xl font-bold">Welcome To BlueShield</h1>
              <h1 className="text-2xl font-bold">Choose Your Role</h1>
              <div className="flex gap-4">
                <button 
                  onClick={() => setRole("Citizen")} 
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                  Citizen
                </button>
                <button 
                  onClick={() => setRole("Analyst")} 
                  className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
                >
                  Analyst
                </button>
                <button 
                  onClick={() => setRole("Administrator")} 
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
                >
                  Administrator
                </button>
              </div>
            </div>
          )}

          {/* Signup/Login Form */}
          {role && (
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center items-center gap-2">
                <h2 className="text-2xl text-center font-bold mb-4">
                  {role} {isLogin ? "Login" : "Signup"}
                </h2>
                {role==="Analyst" &&
                  <i className="fa-solid fa-chart-line text-4xl mb-3"></i>}
                {role==="Administrator" &&
                  <i className="fa-solid fa-user-tie text-4xl mb-3"></i>}
                {role==="Citizen" &&
                  <i className="fa-regular fa-user text-4xl mb-3"></i>}
              </div>

              {/* Example Form */}
              <form className="flex flex-col gap-3.5">
                <label className="grid grid-rows-2">
                  Username
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-2"
                  />
                </label>

                {!isLogin && (
                  <>
                    <label className="grid grid-rows-2">
                      Email
                      <input
                        type="email"
                        className="border border-gray-300 rounded p-2"
                      />
                    </label>
                    <label className="grid grid-rows-2">
                      Password
                      <input
                        type="password"
                        className="border border-gray-300 rounded p-2"
                      />
                    </label>

                    {/* Extra fields depending on role */}
                    {role === "Citizen" && (
                      <label className="grid grid-rows-2">
                        City/State
                        <input
                          type="text"
                          className="border border-gray-300 rounded p-2"
                        />
                      </label>
                    )}

                    {role === "Analyst" && (
                      <label className="grid grid-rows-2">
                        Research Area
                        <input
                          type="text"
                          className="border border-gray-300 rounded p-2"
                        />
                      </label>
                    )}

                    {role === "Administrator" && (
                      <label className="grid grid-rows-2">
                        Admin Code
                        <input
                          type="text"
                          className="border border-gray-300 rounded p-2"
                        />
                      </label>
                    )}
                  </>
                )}

                {isLogin && (
                  <>
                    <label className="grid grid-rows-2">
                      Password
                      <input
                        type="password"
                        className="border border-gray-300 rounded p-2"
                      />
                    </label>
                  </>
                )}

                <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick = {()=> setSignup(false)}>
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </form>

              {/* Back button */}
              <div className="flex justify-around">
                <button 
                  onClick={() => {
                    setRole(null);
                    setIsLogin(false);
                  }} 
                  className="mt-4 text-sm text-gray-500 hover:underline"
                >
                  ← Back to Role Selection
                </button>

                {/* Toggle Signup/Login */}
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-sm mt-4 text-blue-600 hover:underline"
                >
                  {isLogin ? "New here? Signup" : "Already registered? Login"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
