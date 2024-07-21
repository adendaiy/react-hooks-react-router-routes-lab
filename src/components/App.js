// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import Actors from "./Actors";
// import Directors from "./Directors";
// import Movies from "./Movies";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

// function App() {
//   return(
//   <Router>
//   <div>
//     <NavBar />
//       <Switch>
//       <Route exact path="/Movies">
//       <Movies />
//       </Route>

//       <Route  exact path="/Directors">
//       <Directors />
//       </Route> 

//       <Route exact path="/Actors">
//       <Actors />
//       </Route>

//       <Route exact path="/">
//       <Home />
//       </Route>
//       </Switch>
    
//   </div>
//   </Router>
//   )
// }

// export default App;

import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/directors">
            <Directors />
          </Route>
          <Route exact path="/actors">
            <Actors />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



