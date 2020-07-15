import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        tele={contacts[0].phone}
        email={contacts[0].email}
        name={contacts[0].name}
        img={contacts[0].imgURL}
      />
      <Card
        tele={contacts[1].phone}
        email={contacts[1].email}
        name={contacts[1].name}
        img={contacts[1].imgURL}
      />
      <Card
        tele={contacts[2].phone}
        email={contacts[2].email}
        name={contacts[2].name}
        img={contacts[2].imgURL}
      />
    </div>
  );
}

export default App;
