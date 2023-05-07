import React, {useEffect, useState} from "react";
import {Row, Col, Input, Button, Table} from "reactstrap"
import store from '../../redux/store/store';



const PropertySearchTool = () => {
    const [search, setSearch] = useState("");
    const [filteredData, setFilterdData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);

    useEffect(()=> {
        // Dispatch the INCREMENT action
        store.dispatch({ type: 'PROPERTY' });
    },[])

    const data = store.getState().reducer2.propertyData;


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const checkClick = (e, value) => {
        if (e.target.checked){
       setSelectedRow([...selectedRow, value]);
        }else{
        setSelectedRow(selectedRow.filter(item => item !== value));
        }
    }

    console.log(selectedRow)

    const searchClick = () => {
        const result = data?.filter((d)=> {
                 return (d.address.toLowerCase().match(search.toLowerCase()) || d.propertytype.toLowerCase().match(search.toLowerCase()) || d.rooms.toLowerCase().match(search.toLowerCase()) || d.area.toLowerCase().match(search.toLowerCase())) 
        })
        setFilterdData(result)
    }

    return (
        <>
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
        <h4>Property Search Tool</h4>
        </div>
        <Row style={{marginTop: "20px"}}>
            <Col lg={2}></Col>
            <Col lg={6}>
              <Input onChange={handleChange}/>
            </Col>
            <Col lg={2}><Button color="warning" onClick={searchClick}>Search</Button></Col>
        </Row>
        <Row>
            <Col lg={2}></Col>
            <Col lg={2} style={{marginTop: "20px"}}><strong>selected result</strong></Col>
        </Row>
        <Row style={{marginTop: "20px"}}>
            <Col lg={3}></Col>
            <Col lg={6}>
            <Table
>
  
  <thead>
  <tr>
      <th>
        #
      </th>
      <th>
        Address
      </th>
      <th>
        PostCode
      </th>
      <th>
        Property Type
      </th>
      <th>
        Number of rooms
      </th>
      <th>
        Floor area
      </th>
    </tr>
  </thead>
    {selectedRow?.map((d)=> {
        return(
            <tbody>
    <tr>
      <th scope="row">
        {d.id}
      </th>
      <td>
        {d.address}
      </td>
      <td>
        {d.postalcode}
      </td>
      <td>
        {d.propertytype}
      </td>
      <td>{d.rooms}</td>
      <td>{d.area}</td>
    </tr>
  </tbody>
        )
    })}
   
</Table></Col>
        </Row>
        <Row>
            <Col lg={2}></Col>
            <Col lg={2} style={{marginTop: "20px"}}><strong>searched result</strong></Col>
        </Row>
        <Row style={{marginTop: "20px"}}>
            <Col lg={3}></Col>
            <Col lg={6}>
            <Table
>
  
  <thead>
  <tr>
      <th>
        #
      </th>
      <th>
        Address
      </th>
      <th>
        PostCode
      </th>
      <th>
        Property Type
      </th>
      <th>
        Number of rooms
      </th>
      <th>
        Floor area
      </th>
    </tr>
  </thead>
    {filteredData?.map((d)=> {
        return(
            <tbody>
    <tr>
      <th scope="row">
        {d.id}
      </th>
      <td>
        {d.address}
      </td>
      <td>
        {d.postalcode}
      </td>
      <td>
        {d.propertytype}
      </td>
      <td>{d.rooms}</td>
      <td>{d.area}</td>
    </tr>
  </tbody>
        )
    })}
   
</Table></Col>
        </Row>
        <Row>
            <Col lg={2}></Col>
            <Col lg={2} style={{marginTop: "20px"}}><strong>Data</strong></Col>
        </Row>
        <Row style={{marginTop: "20px"}}>
            <Col lg={3}></Col>
            <Col lg={6}>
            <Table
>
  <thead>
  <tr>
      <th>
        #
      </th>
      <th>
        Address
      </th>
      <th>
        PostCode
      </th>
      <th>
        Property Type
      </th>
      <th>
        Number of rooms
      </th>
      <th>
        Floor area
      </th>
    </tr>
  </thead>
    {data?.map((d)=> {
        return(
            <tbody>
    <tr>
    
      <th scope="row">
        {d.id}
      </th>
      <td><Input type="checkbox" onClick={(e) => checkClick(e,d)}/></td>
      <td>
        {d.address}
      </td>
      <td>
        {d.postalcode}
      </td>
      <td>
        {d.propertytype}
      </td>
      <td>{d.rooms}</td>
      <td>{d.area}</td>
    </tr>
  </tbody>
        )
    })}
   
</Table></Col>
        </Row>
        </>
    )
}


export default PropertySearchTool