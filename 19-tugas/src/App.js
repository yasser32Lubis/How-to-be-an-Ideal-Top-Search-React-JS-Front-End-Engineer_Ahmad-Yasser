import './App.css';

import { gql, useQuery } from '@apollo/client';

const getTodolist = gql`
query MyQuery {
  table_anggota {
    Nama
    id
  }
}
`;

// Using client.query to make graphql query

function App() {
  const{data,error} = useQuery(getTodolist)
  if(error){
    console.log(error)
    return null
  }

  return (
    <div>
      {data.table_anggota.map((v, i) =>(
        <getTodolist
        key ={i}
        id ={i}
        checked={v.Nama}
        />
      ))}
    </div>
  )
};



export default App;
