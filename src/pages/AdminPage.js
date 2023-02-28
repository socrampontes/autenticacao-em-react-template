
import { useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { AdminContainer, BoxDetail } from './styleAdminPage'
function AdminPage() {

  const [tripDetail] = useRequestData()//use este hook para receber as informações da requisição.
  const { id } = useParams();//use este hook do houter para conseguir fazer a requisição através do id








  return (
    <AdminContainer>
      <h1>Administração: Detalhes da Viagem</h1>
      <hr />
      {id !== 'undefined' ?
        <BoxDetail >
          <h3>{tripDetail.name}</h3>
          <p>{tripDetail.description}</p>
          <p><b>Duração em dias: </b>{tripDetail.durationInDays}</p>
          <p><b>Data: </b>{tripDetail.date}</p>
          <p><b>Planeta: </b>{tripDetail.planet}</p>
        </BoxDetail > :
        <h2>Escolha uma das viagens disponiveis </h2>}

    </AdminContainer>
  );
}

export default AdminPage;
