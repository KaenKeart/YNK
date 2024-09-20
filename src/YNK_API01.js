import { useState, useEffect } from "react";
import "./YNK_API.css";
import { Container, Header, Table } from "semantic-ui-react";
import axios from "axios";

function YNK_API01() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://sheet.best/api/sheets/d41e4581-a349-4d3b-b5cc-b5eb1d4fb6e1")
      .then((res) => {
        // Assuming the API response is an array of data
        const apiData = res.data;

        // Get the last item from the array
        const lastItem = apiData[apiData.length - 1];

        // Set the last item to the state
        setData([lastItem]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData(); // เมื่อคอมโพเนนต์โหลด, เรียก fetchData เพื่อดึงข้อมูลแรกครั้ง
    const intervalId = setInterval(fetchData, 5000); // ทุก 60 วินาที, เรียก fetchData เพื่อ Refresh ข้อมูล
    return () => clearInterval(intervalId); // เมื่อคอมโพเนนต์ถูกถอดจาก DOM, ลบ interval
  }, []);
  console.log(data);
  return (
    <Container className="container">
      <br />
      <Header as="h2">Value Device1</Header>
      <hr />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Temp</Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
            <Table.HeaderCell>Light</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((val, idx) => (
            <Table.Row key={idx}>
              <Table.Cell>{val.Date}</Table.Cell>
              <Table.Cell>{val.Time}</Table.Cell>
              <Table.Cell>{val.temp}</Table.Cell>
              <Table.Cell>{val.humidity}</Table.Cell>
              <Table.Cell>{val.light}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default YNK_API01;
