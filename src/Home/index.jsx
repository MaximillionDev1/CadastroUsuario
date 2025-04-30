import { useRef } from "react"
import api from '../services/api'



import {Title, Container, TopBackground, Form, ContainerInput, Input, InputLabel, Button } from './styles.js'
import UserImages from "../assets/users.png"


function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

async function registerNewUser() {
 const data= await api.post('/user' , {
    email:inputEmail,
    age:inputAge,
    name:inputName
  })
  console.log(data)
}


  return (

    <Container>
      <TopBackground>
        <img src={UserImages} alt="Imagem-usuários" />
      </TopBackground>
      <Form>
        <Title>Cadastrar usuário</Title>
        <ContainerInput>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName}></Input>
          </div>

          <div>
            <InputLabel>Idade:<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInput>
        <div style={{ width: '100%'}}>
          <InputLabel>E-mail:<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>
        <Button type="button" onClick={registerNewUser}>Cadastrar usuário</Button>
      </Form>



    </Container>


  )
}

export default Home