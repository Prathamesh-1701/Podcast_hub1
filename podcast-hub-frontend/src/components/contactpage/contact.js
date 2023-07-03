import React, { useState } from 'react';
import './contact.css';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      // className="feedback-form-container"
      style={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "flex-start",
          justifyContent: "center",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.130)",
          padding: "0 2rem",
        }}
      >
        <h2 style={{ margin:'1rem auto', color: "white", fontWeight: "800",textAlign:'center' }}>Feedback Form</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <p htmlFor="name">Name:</p>
          <input
            style={{
              boxShadow: "0px 5px 20px rgba(0,0,0,0.130)",
              backgroundColor: "transparent",
              border: "none",
              width: "70%",
              height: "50px",
            }}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <p htmlFor="email">Email:</p>
          <input
            style={{
              boxShadow: "0px 5px 20px rgba(0,0,0,0.130)",
              backgroundColor: "transparent",
              border: "none",
              width: "70%",
              height: "50px",
            }}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <p htmlFor="message">Message:</p>
          <textarea
            style={{
              boxShadow: "0px 5px 20px rgba(0,0,0,0.130)",
              backgroundColor: "transparent",
              border: "none",
              width: "70%",
              height: "50px",
            }}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          style={{
            margin: "1rem auto",
            width: "30%",
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
          type="submit"
        >
          Submit
        </button>
      </div>

      {/* <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default FeedbackForm;
