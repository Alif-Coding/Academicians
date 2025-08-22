import { Link } from "react-router-dom";
import { useState, FormEvent, ChangeEvent } from "react";
import { supabase } from "/src/supabase-client.js";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    grade: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server response:", data);
      setResponse(data.message);
    } catch (error) {
      console.error("Error:", error);
    }

    console.log(formData); // send this to Flask backend
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-b border-b-black"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b border-b-black"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-b border-b-black"
          />
        </div>

        <div>
          <label htmlFor="grade">Grade</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="border-b border-b-black"
          >
            <option value="">-- Select Grade --</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
              <option key={g} value={g}>
                Grade {g}
              </option>
            ))}
          </select>
        </div>
        <Link to="/Login">Already have an account?</Link>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Registration;
