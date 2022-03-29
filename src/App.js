import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Countries } from "./Countries";
import { CountryDetail } from "./CountryDetail";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
     <Header />
     
     <div className="container">
       <BrowserRouter>
       <Routes>
          <Route path="/*" element={<Countries/>} />
          <Route path="/details/:name" element={<CountryDetail />} />
          <Route path="Countries-list/details/:name" element={<CountryDetail />} />
          <Route path="Countries-list/*" element={<Countries/>} />
       </Routes>
       </BrowserRouter>


     </div>


    </div>
  );
}

export default App;
