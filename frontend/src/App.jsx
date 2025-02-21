import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:3000/bfhl", { data: JSON.parse(input) });
            setResponse(res.data);
            setError("");
        } catch (err) {
            setError("Invalid JSON format or request error.");
            setResponse(null);
        }
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh", 
            width: "100vw",
            backgroundColor: "#f5f5f5", 
            fontFamily: "Arial, sans-serif" 
        }}>
            <h2 style={{ color: "#333", marginBottom: "20px" }}>Full Stack Challenge</h2>
            <textarea 
                rows="6" 
                cols="50" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
            />
            <br />
            <button 
                onClick={handleSubmit} 
                style={{ 
                    padding: "10px 20px", 
                    backgroundColor: "#007BFF", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: "pointer", 
                    fontSize: "16px" 
                }}
            >
                Submit
            </button>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

            {response && (
                <div style={{ 
                    marginTop: "20px", 
                    color: "black",
                    padding: "10px", 
                    backgroundColor: "#fff", 
                    borderRadius: "5px", 
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" 
                }}>
                    <h3 style={{ color: "#333" }}>Response</h3>
                    <pre style={{ textAlign: "left", backgroundColor: "#eee", padding: "10px", borderRadius: "5px" }}>
                        {JSON.stringify(response, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default App;
