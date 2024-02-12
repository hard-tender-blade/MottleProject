"use client";
import { useState } from "react";
import Hero from "./components/hero";
import Admin from "./components/admin";
import Builder from "./components/builder";

export default function Home() {
  const [admins, setAdmins] = useState<Admin[]>([
    {
      title: "admin",
      pass: "admin",
    },
    {
      title: "hello",
      pass: "world",
    },
    {
      title: "lukas",
      pass: "helena",
    },
  ]);

  const [persons, setPersons] = useState<Person[]>([
    { title: "Derek", cost: 120, specialization: "IT", avalable: false },
    { title: "Roderick", cost: 150, specialization: "IT", avalable: false },
    { title: "Sarah", cost: 500, specialization: "IT", avalable: false },
    { title: "Inge", cost: 150, specialization: "CIO", avalable: false },
    { title: "Rudolf", cost: 250, specialization: "CIO", avalable: false },
    { title: "Angela", cost: 450, specialization: "IT", avalable: false },
    { title: "Richard", cost: 150, specialization: "CIO", avalable: false },
    { title: "Alex", cost: 500, specialization: "IT", avalable: false },
    { title: "Robert", cost: 550, specialization: "CIO", avalable: false },
  ]);

  const [requests, setRequests] = useState<TeamRequest[]>([
    { title: "test", cost: 420, membersCount: 3 },
    { title: "heslo", cost: 550, membersCount: 5 },
    { title: "test_zadost", cost: 950, membersCount: 3 },
  ]);

  const [currentScreen, setCurrentScreen] = useState(0);
  const [currentUser, setCurrentUser] = useState<Admin | null>(null);

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className={currentScreen == 0 ? "" : "hidden"}>
        <Hero
          setCurrentScreen={setCurrentScreen}
          setCurrentUser={setCurrentUser}
          admins={admins}
        />
      </div>

      <div className={currentScreen == 1 ? "" : "hidden"}>
        <Builder persons={persons} requests={requests} setRequests={setRequests} setCurrentScreen={setCurrentScreen} />
      </div>

      <div className={currentScreen == 2 ? "" : "hidden"}>
        <Admin setCurrentScreen={setCurrentScreen} currentUser={currentUser} requests={requests} />
      </div>
    </main>
  );
}
