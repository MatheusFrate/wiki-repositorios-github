import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api'

import {Container} from './styles';
function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] =  useState([]);


  const handleSearchRepo = async () => {
    
    try{
      const { data } = await api.get(`repos/${currentRepo}`);
      console.log(data);
      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id);
        if(isExist){
          alert('Repositório já adicionado');
          setCurrentRepo('');
          return;
        }
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return 
      }
    }
    catch(e){
      alert('Repositorio não encontrado');
      setCurrentRepo('');
      console.log(e);
    }
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'></img>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map( repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}

    </Container>
  );
}

export default App;
