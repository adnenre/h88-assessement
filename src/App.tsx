import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Table from "./components/Table";
import Input from "./components/Input";
import Container from "./components/Container";
import Loading from "./components/Loading/Loading";

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com"
});

// COLUMN TO DISPLAY 
const columns = [{ id: '1', name: 'code' }, { id: '2', name: 'name' }]
// write a GraphQL query that asks for names and codes for all countries
const OUNTRIES_QUERY = gql`
  {
    countries {
      name
      code
    }
  }
`;


function App() {

  // COUNTRYCODE
  const [countryCode, setCountry] = useState<string>("");

  // SEARCH BY
  const [filterByField] = useState<string>('code')

  // QUERY RESPONSE
  const { data, loading, error } = useQuery(OUNTRIES_QUERY, { client });

 

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
        <Table columns={columns} rows={data.countries} currentSearch={countryCode} filterByField={filterByField} />
      </Container>
    
  );
}

export default App;