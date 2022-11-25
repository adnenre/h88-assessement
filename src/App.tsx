import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Table from "./components/Table";
import Input from "./components/Input";
import Container from "./components/Container";
import Loading from "./components/Loading/Loading";
import { columnsType, columnType } from "./components/Types";

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com"
});

// COLUMN TO DISPLAY 
// initialState
const columns : columnType[]= [
  { id: '1', name: 'code' ,checked:true},
 { id: '2', name: 'name',checked:true },
 { id: '3', name: 'native',checked:false },
 { id: '4', name: 'phone',checked:false },
 { id: '5', name: 'capital',checked:false },
 { id: '6', name: 'currency',checked:false }

]
// write a GraphQL query that asks for names and codes for all countries
const OUNTRIES_QUERY = gql`
  {
    countries {
      name
      code
      native
      phone 
      capital
      currency
    }
  }
`;


function App() {
  const [initialColumns , setColumns] = useState<columnType[]>(columns)
  // COUNTRYCODE
  const [countryCode, setCountry] = useState<string>("");

  // SEARCH BY
  const [filterByField] = useState<string>('code')

  // QUERY RESPONSE
  const { data, loading, error } = useQuery(OUNTRIES_QUERY, { client });
  console.log(data)
  // Event HANDLER UPDATE COLUMNS
  const handleUpdateColumns = (data:columnType[]) =>{
    setColumns(data)
  }

  // EVENT HANDLER ONCHNAGE 
  const handleChange = (data:string) => {

    setCountry(data);
  };
  
  // LOADING OR ERROR MESSAGE
  if (loading || error) {
    return <Loading>{error ? error.message : "Loading..."}</Loading>;
  }
  return (
   
      <Container>
        <Input onChange={handleChange} value={countryCode} placeholder='Type a country code ...' />
        <Table columns={initialColumns} rows={data.countries} currentSearch={countryCode} filterByField={filterByField} updateColumns={handleUpdateColumns} />
      </Container>
    
  );
}

export default App;