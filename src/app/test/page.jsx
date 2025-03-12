"use client";

import { useState } from "react";

export default function TestPage() {
    const [model, setModel] = useState("users");
    const [id, setId] = useState("");
    const [method, setMethod] = useState("GET");
    const [jsonData, setJsonData] = useState(
        JSON.stringify({
            user_id: "usr_12345",
            user_name: "Ayush Kumar Gaur",
            user_gender: "male",
            user_password: "securepassword",
            user_phone: "+911234567890",
            role: "admin",
            client_avg_rating: 4.5,
            forget_pass_ans: "MyFirstCar",
            more_info: { interests: ["AI", "ML"], bio: "Loves AI and ML" }
        }, null, 2) // Some sample data for testing
    );
    const [response, setResponse] = useState(null);

    const handleRequest = async () => {
        try {
            const url = id ? `/api/route?model=${model}&id=${id}` : `/api/route?model=${model}`;
            const options = {
                method,
                headers: { "Content-Type": "application/json" },
                ...(method !== "GET" && method !== "DELETE" ? { body: jsonData } : {}),
            };

            const res = await fetch(url, options);
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            setResponse(`Error: ${error.message}`);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-xl font-bold mb-4">API Tester</h1>
            <label className="block mb-2">
                Model:
                <select value={model} onChange={(e) => setModel(e.target.value)} className="border p-2 w-full">
                    <option value="users">Users</option>
                    <option value="drivers">Drivers</option>
                    <option value="sessions">Sessions</option>
                    <option value="itinerary">Itinerary</option>
                    <option value="rides">Rides</option>
                    <option value="distress">Distress</option>
                </select>
            </label>
            <label className="block mb-2">
                ID (optional for GET/PUT/DELETE):
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="border p-2 w-full" />
            </label>
            <label className="block mb-2">
                Method:
                <select value={method} onChange={(e) => setMethod(e.target.value)} className="border p-2 w-full">
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </label>
            {(method === "POST" || method === "PUT") && (
                <label className="block mb-2">
                    JSON Data:
                    <textarea value={jsonData} onChange={(e) => setJsonData(e.target.value)} className="border p-2 w-full h-32" />
                </label>
            )}
            <button onClick={handleRequest} className="bg-blue-500 text-white p-2 rounded w-full">Send Request</button>
            {response && (
                <div className="mt-4 p-2 border">
                    <strong>Response:</strong>
                    <pre className="bg-gray-100 p-2">{response}</pre>
                </div>
            )}
        </div>
    );
}
