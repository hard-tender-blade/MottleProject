import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  persons: Person[];
  requests: TeamRequest[];
  setRequests: Dispatch<SetStateAction<TeamRequest[]>>;
  setCurrentScreen: (index: number) => void;
}

export default function Builder(p: Props) {
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
  const [selectedPersons, setSelectedPersons] = useState<Person[]>([]);
  const [heslo, setHeslo] = useState("");

  return (
    <div className="flex">
      <div>
        <h1>Nabidka clenu</h1>
        <div>
          {persons.map((person, i) => {
            return (
              <div key={i}>
                {person.title}

                <div>
                  <button
                    onClick={() => {
                      setSelectedPersons([...selectedPersons, person]);
                      setPersons(
                        persons.filter((p) => p.title !== person.title)
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={heslo}
          onChange={(e) => {
            setHeslo(e.target.value);
          }}
          placeholder="heslo"
        />
        <button
          onChange={() => {
            //reset
            setHeslo("");
            setSelectedPersons([]);
            setPersons(p.persons);

            p.setRequests([
              ...p.requests,
              {
                title: heslo,
                cost: selectedPersons.reduce(
                  (acc, person) => acc + person.cost,
                  0
                ),
                membersCount: selectedPersons.length,
              },
            ]);

            p.setCurrentScreen(0);
          }}
        >
          odeslat
        </button>
      </div>

      <div>
        {selectedPersons.map((person, i) => {
          return (
            <div key={i}>
              {person.title}

              <div>
                <button
                  onClick={() => {
                    setPersons([...persons, person]);
                    setSelectedPersons(
                      selectedPersons.filter((p) => p.title !== person.title)
                    );
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
