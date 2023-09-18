import React from "react";
import Link from "next/link"
// Navigation in Next.js is slightly different from react. 
// Look at: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating


function App() {
  return (
    <div className="App">
      <nav>
      <ul>
          <li> Stats </li>
      </ul>
    </nav>
       <h1>Hack Racer</h1>
      <Link href="/gamePage">
          <button>New Game</button>
      </Link>
      <br />
      <Link href="/sentencePage">
          <button>Create Custom Sentences</button>
      </Link>

     
      

      
    </div>
  );
}

export default App;
