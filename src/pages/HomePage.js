import { useEffect, useState } from "react";
import axios from "axios"
import Card from "../components/Card";
import { TripsContainer } from "./styleHomePage";

function HomePage() {

  const [trips, setTrips] = useState([])

  const getTrips = () => {

    const aluno = 'darvas'//coloque aqui o nome que você criou no começo da aula
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => { 
        console.log(err);
      })
  }
  useEffect(() => {
    getTrips()
  }, [])

  const allTrips = trips && trips.map((trip) => {
    return (
      <Card
        key={trip.id}
        trip={trip}
      />
    )
  })
  return (
    <TripsContainer>
      {allTrips}
    </TripsContainer>
  );
}

export default HomePage;


