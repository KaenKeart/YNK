import React, { useState, useEffect } from "react";
import axios from "axios";

const NasaApiComponent = () => {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "Eh21pufqwIprUMJkaVmN9I1mYh9WylUX1LEguOC9";
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );

        setNasaData(response.data);
      } catch (error) {
        console.error("Error fetching NASA data", error);
      }
    };

    fetchData(); // เรียกในครั้งแรก

    const interval = setInterval(() => {
      fetchData(); // เรียกในทุกๆ 5 นาที (หรือเวลาที่คุณต้องการ)
    }, 300000); // 300000 มีค่าเป็น 5 นาที (300,000 มิลลิวินาที)

    // ใน useEffect นี้จะถูกเรียกเมื่อ component ถูก unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nasa-container">
      {nasaData && (
        <>
          <h2>{nasaData.title}</h2>
          <img src={nasaData.url} alt={nasaData.title} />
          <p>{nasaData.explanation}</p>
        </>
      )}
    </div>
  );
};

export default NasaApiComponent;
