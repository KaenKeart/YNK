import { useEffect, useState } from "react";
import axios from "axios";
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

const Home1 = () => {
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

export default Home1;
