import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Table from "./components/Table";
import Input from "./components/Input";
import Container from "./components/Container";
import Loading from "./components/Loading/Loading";
import { columnType } from "./components/Types";

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
const placeholderMap  = new Map([
  ['code' , 'Type a country code ...'],
  ['name' , 'Type a country name ...'],
  ['native' , 'Type a country native name ...'],
  ['phone' , "Type a country phone indicator ..."],
  ['capital' , "Type a country captial name ..."],
  ['currency' , 'Type a country currency ...'],
])

function App() {
  
  // PLACEHOLDER STATE
  const [initialPlaceholder,setPlaceHolder] = useState<string | undefined>(placeholderMap.get('code'))

  // COLUMNS STATE 
  const [initialColumns , setColumns] = useState<columnType[]>(columns)

  // COUNTRYCODE
  const [countryCode, setCountry] = useState<string>("");

  // SEARCH BY
  const [filterByField,setFilterByField] = useState<string>('code')

  // QUERY RESPONSE
  const { data, loading, error } = useQuery(OUNTRIES_QUERY, { client });

  // Event HANDLER UPDATE COLUMNS
  const handleUpdateColumns = (data:columnType[]) =>{
    setColumns(data)
  
  }

  // EVENT HANDLER ONCHNAGE 
  const handleChange = (data:string) => {
    setCountry(data);
  };
  
  // EVENT HANDLER UPDATE COLUMN TO FILTER BY
  const handleupdateFilterByField = (col : columnType) : void => {
    setFilterByField(col.name);
    setPlaceHolder(placeholderMap.get(col.name))
  }

  // LOADING OR ERROR MESSAGE
  if (loading || error) {
    return <Loading>{error ? error.message : "Loading..."}</Loading>;
  }
  return (
   
      <Container>

        <Input 
            onChange={handleChange} 
            value={countryCode} 
            placeholder={initialPlaceholder} 
          />

        <Table 
            columns={initialColumns} 
            rows={data.countries} 
            currentSearch={countryCode} 
            filterByField={filterByField} 
            updateColumns={handleUpdateColumns} 
            updateFilterByField={handleupdateFilterByField}
          />
          
      </Container>

    
  );
}

export default App;