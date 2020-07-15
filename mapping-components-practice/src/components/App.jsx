import React from "react";
import Entry from "./Entry";
import emojis from "../emojipedia";

function createEntry(contents) {
  return (
    <Entry
      key={contents.id}
      emoji={contents.emoji}
      name={contents.name}
      meaning={contents.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}

export default App;
