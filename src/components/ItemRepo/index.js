import { ItemContainer } from './styles'
const ItemRepo = ({repo, handleRemoveRepo}) => {
  
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer >
        <h3>
            {repo.name}
        </h3>    
        <p>
            {repo.full_name}
        </p>
        <p>
            {repo.description}
        </p>
        <a href={repo.html_url} rel='noreferrer' target = "blank">ver repositorio</a> <br />
        <button onClick={handleRemove} className='remover'>Remover repositorio</button>
        <hr />
    </ItemContainer>
  )
}
export default ItemRepo
