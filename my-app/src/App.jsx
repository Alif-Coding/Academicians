import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "./App.css";
import Mainpage from "./pages/mainPage.jsx";
import Lecturehall from "./components/lectureHall.jsx";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );


function App() {
// const [instruments, setInstruments] = useState([]);
// useEffect(() => {
//   getInstruments();
// }, []);
// async function getInstruments() {
//   const { data, error } = await supabase.from("instruments").select();
//   if (error) {
//     console.error("Supabase error:", error.message);
//     return;
//   }
//   setInstruments(data || []);
// }

//<h1>hello</h1>
//    <ul>
//    {instruments.map((instrument) => (
//    <li key={instrument.name}>{instrument.name}</li>
//     ))}
//    </ul>
  console.log('✅ App component rendered');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/lecturehall" element={<Lecturehall />} />
      </Routes>
    </Router>);}

export default App;
