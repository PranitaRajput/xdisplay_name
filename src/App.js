import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Access form fields using the event target (form element)
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        {/* Input for First Name */}
        <div>
          <label>
            First Name:{" "}
            <input
              type="text"
              name="firstName" // The `name` should match the key used to retrieve the value
              placeholder="Enter First Name"
              required
            />
          </label>
        </div>

        {/* Input for Last Name */}
        <div style={{ marginTop: "20px" }}>
          <label>
            Last Name:{" "}
            <input
              type="text"
              name="lastName" // The `name` should match the key used to retrieve the value
              placeholder="Enter Last Name"
              required
            />
          </label>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: "20px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Display Full Name */}
      {fullName && <h2 style={{ marginTop: "30px" }}>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;

