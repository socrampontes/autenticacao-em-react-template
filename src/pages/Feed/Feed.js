import React, { useEffect } from 'react'
import CardPost from '../../components/CardPost/CardPost'
import CriarPost from '../../components/CriarPost/CriarPost'
import useRequestData from '../../hooks/useRequestData'
import { FeedContainer } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { irParaLogin } from '../../routes/coordinator'


export default function Feed() {
  const token = localStorage.getItem("token")
  const headers = {
    headers:{
      Authorization:token
    }
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
irParaLogin(navigate)
    }
  },[])
  const [posts] = useRequestData([], '/posts' ,headers)
  
  axios.get(BASE_URL/posts , token)
  .then((response)=>{
    console.log(response.data.token)
  })
  .catch((error)=>{
    
    console.log(error.data.token)
  })

  return (
    <FeedContainer>
      <h1>Feed</h1>
      <section>
        <h3>Novo post</h3>
        <CriarPost />
      </section>
      {
        posts.map((post) => {
          return <CardPost key={post.id} post={post} />
        })
      }
    </FeedContainer>
  )
}
