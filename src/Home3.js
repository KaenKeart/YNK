// import { useEffect, useState } from "react";
// import {
//   Container,
//   Header,
//   Segment,
//   Image,
//   Modal,
//   Button,
// } from "semantic-ui-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import "semantic-ui-css/semantic.min.css";
// import "./Home.css";

// import contact1 from "./img/1.contact.jpg";
// import contact2 from "./img/2.contact.jpg";
// import contact3 from "./img/3.contact.jpg";

// // ... (import statements)

// function Hello3() {
//   const peopleImg = [
//     {
//       image: contact1,
//     },
//     {
//       image: contact2,
//     },
//     {
//       image: contact3,
//     },
//   ];
//   const [peopleData, setPeopleData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://my-team.kongkeart254620.repl.co/members"
//         );
//         const data = await response.json();
//         console.log("API Response:", data); // Log the response
//         setPeopleData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedPerson, setSelectedPerson] = useState(null);

//   const openModal = (person) => {
//     setSelectedPerson(person);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedPerson(null);
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <Navbar />
//       <Container className="Home">
//         <Segment className="segmentHome">
//           <Header as="h1">Welcome to Our Website</Header>
//           {peopleData.map((person, index) => (
//             <div
//               key={index}
//               className="personContainer"
//               onClick={() => openModal(person)}
//             >
//               <Image src={peopleImg[index].image} className="personImage" />
//               <p className="personInfo">{person.nickName}</p>
//             </div>
//           ))}
//         </Segment>
//       </Container>
//       <Footer />
//       {/* Modal for displaying person's details */}
//       <Modal open={modalOpen} onClose={closeModal} size="mini">
//         <Modal.Header>{selectedPerson?.nickName}'s Details</Modal.Header>
//         <Modal.Content>
//           {selectedPerson && (
//             <Image
//               src={peopleImg[peopleData.indexOf(selectedPerson)].image}
//               size="medium"
//               centered
//             />
//           )}
//           <p>Full name: {selectedPerson?.fullName}</p>
//           <p>Nick name: {selectedPerson?.nickName}</p>
//           <p>Student ID: {selectedPerson?.studentId}</p>
//           <p>Age: {selectedPerson?.age}</p>
//           <p>Gender: {selectedPerson?.gender}</p>
//         </Modal.Content>
//         <Modal.Actions>
//           <Button onClick={closeModal} primary>
//             Close
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </div>
//   );
// }

// export default Hello3;

import { useEffect, useState } from "react";

import {
  Container,
  Header,
  Segment,
  Image,
  Modal,
  Button,
} from "semantic-ui-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";
import "./Home.css";

import contact1 from "./img/1.contact.jpg";
import contact2 from "./img/2.contact.jpg";
import contact3 from "./img/3.contact.jpg";

const Home = () => {
  const peopleData = [
    {
      fullName: "Nathakron Phikromsuk",
      nickName: "Not",
      id: "6410210735",
      age: "21",
      gender: "Male",
      image: contact1,
    },
    {
      fullName: "Kongkeart Narakulmongkol",
      nickName: "Kaen",
      id: "6410210721",
      age: "20",
      gender: "Male",
      image: contact2,
    },
    {
      fullName: "Yada Suwannachote",
      nickName: "Yada",
      id: "6410210087",
      age: "20",
      gender: "Female",
      image: contact3,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPerson(null);
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Container className="Home" text>
        <Segment className="segmentHome">
          <Header as="h1">Welcome to Our Website</Header>
          {peopleData.map((person, index) => (
            <div
              key={index}
              className="personContainer"
              onClick={() => openModal(person)}
            >
              <Image src={person.image} className="personImage" />
              <p className="personInfo">{person.nickName}</p>
            </div>
          ))}
        </Segment>
      </Container>
      <Footer />
      {/* Modal for displaying person's details */}
      <Modal open={modalOpen} onClose={closeModal} size="mini">
        <Modal.Header>{selectedPerson?.nickName}'s Details</Modal.Header>
        <Modal.Content>
          <Image src={selectedPerson?.image} size="medium" centered />
          <p>Full name : {selectedPerson?.fullName}</p>
          <p>Nick name : {selectedPerson?.nickName}</p>
          <p>Student ID : {selectedPerson?.id}</p>
          <p>Age : {selectedPerson?.age}</p>
          <p>Gender : {selectedPerson?.gender}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal} primary>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Home;
