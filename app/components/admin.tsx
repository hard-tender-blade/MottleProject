"use client";
import React from "react";

interface Props {
  setCurrentScreen: (index: number) => void;
  setCurrentUser: (admin: Admin | null) => void;
  currentUser: Admin | null;
  requests: TeamRequest[];
  persons: Person[];
  setPersons: (persons: Person[]) => void;
}

export default function Admin(p: Props) {
  const [title, setTitle] = React.useState("");
  const [cost, setCost] = React.useState(0);
  const [specialization, setSpecialization] = React.useState("");

  return (
    <div className="flex gap-20">
      <div>
        <button
          onClick={() => {
            p.setCurrentUser(null);
            p.setCurrentScreen(0);
          }}
        >
          go back
        </button>

        <p>Prihlasen jako: {p.currentUser?.title}</p>
      </div>
      <div className="flex flex-col gap-10 ">
        <p>Requests: </p>
        {p.requests.map((request, i) => {
          return (
            <div key={i} className="pl-10">
              <p>title: {request.title}</p>
              <p>cost: {request.cost}</p>
              <p>membersCount: {request.membersCount}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h1>
          Cleny
        </h1>
        <div>
          {
            p.persons.map((person, i) => {
              return (
                <div key={i} className="flex gap-5">
                  <div className="flex gap-2">
                    <p>{person.title}</p>
                    <p>{person.cost}</p>
                    <p>{person.specialization}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        p.setPersons(
                          p.persons.filter((p) => p.title !== person.title)
                        );
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Pridat noviiho clena</h1>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
        />
        <label htmlFor="">Cost</label>
        <input
          type="number"
          value={cost || 0}
          onChange={(e) => {
            setCost(parseInt(e.target.value));
          }}
          placeholder="Cost"
        />
        <label htmlFor="">Specialization</label>
        <input
          type="text"
          value={specialization}
          onChange={(e) => {
            setSpecialization(e.target.value);
          }}
          placeholder="Specialization"
        />
        <button
          onClick={() => {
            if (title === "" || cost === null || specialization === "") {
              alert("Fill all fields");
              return;
            }
            p.setPersons([
              ...p.persons,
              { title, cost, specialization, avalable: false },
            ]);
            setTitle("");
            setCost(0);
            setSpecialization("");
          }}
        >
          Add person
        </button>
      </div>
    </div>
  );
}
