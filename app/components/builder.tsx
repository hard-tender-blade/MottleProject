import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  persons: Person[];
  requests: TeamRequest[];
  setRequests: Dispatch<SetStateAction<TeamRequest[]>>;
  setCurrentScreen: (index: number) => void;
}

export default function Builder(p: Props) {
  const [persons, setPersons] = useState<Person[]>(p.persons);

  const [selectedPersons, setSelectedPersons] = useState<Person[]>([]);
  const [heslo, setHeslo] = useState("");

  return (
    <div className="flex gap-10">
      <button
        onClick={() => {
          p.setCurrentScreen(0);
        }}
      >
        go back
      </button>
      <div>
        <h1>Nabidka clenu</h1>
        <div>
          {persons.map((person, i) => {
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
          className=""
          onClick={() => {
            if (heslo === "") {
              alert("Zadejte heslo");
              return;
            }

            if (selectedPersons.length === 0) {
              alert("Vyberte cleny");
              return;
            }

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
            <div key={i} className="flex gap-5">
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

      <div>
        <p>Pocet clenu</p>
        <p>{selectedPersons.length}</p>

        <p>Cena</p>
        <p>{selectedPersons.reduce((acc, person) => acc + person.cost, 0)}</p>
      </div>
    </div>
  );
}
