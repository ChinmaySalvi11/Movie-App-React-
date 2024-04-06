import "./App.css";
import Home from "./HomePage/Home";
import ContactUs from "./ContactUs/ContactUs";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AllMovies from "./Movies/AllMovies";
import DetailsPage from "./DetailsPage/DetailsPage";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allmovies" element={<AllMovies />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
