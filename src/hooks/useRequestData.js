import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useRequestData(estadoInicial, path) {
    const [dados, setDados] = useState(estadoInicial)
    const recebeDados = () => {

        const aluno = 'darvas'//coloque aqui o nome que você criou no começo da aula
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}${path}`)
          .then((res) => {
            setDados(res.data.trips)
          })
          .catch((err) => { 
            console.log(err.response);
          })
      }
      useEffect(() => {
        recebeDados()
      }, [])
  return [dados]
}
