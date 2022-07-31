import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";



// id: 1,
// emoji: "💪",
// name: "Tense Biceps",
// meaning:
//   "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// },
function createEntery(emojiTerm) {
  return <Entery 
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    description={emojiTerm.meaning}
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntery)}
      </dl>
    </div>
  );
}

export default App;
