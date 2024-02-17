"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  setCurrentScreen: (index: number) => void;
  setCurrentUser: Dispatch<SetStateAction<Admin | null>>;
  admins: Admin[];
}

export default function Hero(p: Props) {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    //check if admin
    for (const admin of p.admins) {
      if (admin.pass == pass && admin.title == login) {
        p.setCurrentUser(admin);
        p.setCurrentScreen(2);
        setLogin("");
        setPass("");
        return;
      }
    }
    alert("Wrong login or password");
  };

  return (
    <div>
      <h1>Team builder</h1>
      <button
        className="underline"
        onClick={() => {
          p.setCurrentScreen(1);
        }}
      >
        Build Team
      </button>

      <br />
      <br />

      <h1>Amin login</h1>
      <input
        type="text"
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        placeholder="Login"
      />
      <input
        type="text"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="Pass"
      />
      <button className="underline" onClick={handleSubmit}>
        Log-in
      </button>
    </div>
  );
}
