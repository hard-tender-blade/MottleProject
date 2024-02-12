import React from "react";

interface Props {
  setCurrentScreen: (index: number) => void;
  currentUser: Admin | null;
  requests: TeamRequest[];
}

export default function Admin(p: Props) {
  return (
    <div className="flex flex-col">

      <button onClick={() => {p.setCurrentScreen(0)}}>go back</button>

      Admin tool
      <div>
        <p>current user: {p.currentUser?.title}</p>
      </div>
      <div className="flex flex-col gap-10 bg-red-200">
        {p.requests.map((request, i) => {
          return (
            <div key={i}>
              <p>{request.title}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          console.log(p.currentUser);
        }}
      >
        log
      </button>
      <div></div>
      <div></div>
    </div>
  );
}
