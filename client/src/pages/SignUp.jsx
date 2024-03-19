import React from "react";
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-md"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-md"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-md"
          id="password"
        />
        <button className="bg-slate-700 text-white P-3 rounded-md uppercase hover:oppacity-95 disabled:opacity-80">
        SignUp
        </button>
      </form>
      <div className="flex gap-2 mt-5 justify-center">
        <p>
          Have ana account?
        </p>
        <Link to={'/sign-in'}>
        <span className="text-blue-700 underline">Sign In</span>

        </Link>
      </div>
    </div>
  );
}
