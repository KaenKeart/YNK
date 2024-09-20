// import React, { useState } from "react";
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

// const Home = () => {
//   const peopleData = [
//     { name: "N'Not'", id: "6410210735", age: "21", image: contact1 },
//     { name: "Kean", id: "6410210721", age: "20", image: contact2 },
//     { name: "Yada", id: "6410210087", age: "20", image: contact3 },
//   ];

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
//       <Container className="Welcome" text>
//         <Segment className="segmentHome">
//           <Header as="h1">Welcome to Our Website</Header>
//         </Segment>
//       </Container>

//       <Container className="person01" text>
//         <Segment className="segmentHome">
//           <Header as="h1">{peopleData[0].name}</Header>
//           <div
//             className="personContainer"
//             onClick={() => openModal(peopleData[0])}
//           >
//             <Image src={peopleData[0].image} className="personImage" />
//             <p className="personInfo">{peopleData[0].name}</p>
//             <p className="personInfo">Student ID: {peopleData[0].id}</p>
//           </div>
//         </Segment>
//       </Container>

//       <Container className="person02" text>
//         <Segment className="segmentHome">
//           <Header as="h1">{peopleData[1].name}</Header>
//           <div
//             className="personContainer"
//             onClick={() => openModal(peopleData[1])}
//           >
//             <Image src={peopleData[1].image} className="personImage" />
//             <p className="personInfo">Student ID: {peopleData[1].id}</p>
//           </div>
//         </Segment>
//       </Container>

//       <Container className="person03" text>
//         <Segment className="segmentHome">
//           <Header as="h1">{peopleData[2].name}</Header>
//           <div
//             className="personContainer"
//             onClick={() => openModal(peopleData[2])}
//           >
//             <Image src={peopleData[2].image} className="personImage" />
//             <p className="personInfo">{peopleData[2].name}</p>
//             <p className="personInfo">Student ID: {peopleData[2].id}</p>
//           </div>
//         </Segment>
//       </Container>

//       <Footer />

//       {/* Modal for displaying person's details */}
//       <Modal open={modalOpen} onClose={closeModal} size="mini">
//         <Modal.Header>{selectedPerson?.name}'s Details</Modal.Header>
//         <Modal.Content>
//           <Image src={selectedPerson?.image} size="medium" centered />
//           <p>Name: {selectedPerson?.name}</p>
//           <p>Student ID: {selectedPerson?.id}</p>
//         </Modal.Content>
//         <Modal.Actions>
//           <Button onClick={closeModal} primary>
//             Close
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </div>
//   );
// };

// export default Home;
