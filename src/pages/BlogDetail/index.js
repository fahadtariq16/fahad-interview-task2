import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Container, Row, Col} from "reactstrap"
import eyeIcon from "../../assets/icons/Eye.png";
import store from '../../redux/store/store.js';

const BlogDetail = () => {
    const [singleBlogData, setSingleBlogData] = useState({});
    const {id} = useParams();

    useEffect(()=> {
      store.dispatch({ type: 'INCREMENT' });
  },[])

  const count = store.getState().reducer.count;

    useEffect(()=> {
      const getSingleBlogData = async() => {
         const data = await axios.get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`)
         setSingleBlogData(data.data);
      }
      getSingleBlogData();
    })

    console.log(singleBlogData)

    return(
     <>
       <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={4} style={{marginTop: "20px"}}>
          <span style={{color: "grey", fontSize: "12px"}}>Posted on October 2021</span>
          <span style={{paddingLeft: "20px"}}><img src={eyeIcon} alt="eye"/></span>
          <span style={{color: "grey", fontSize: "12px", paddingLeft: "10px"}}>{count} Views</span>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={6} style={{marginTop: "20px"}}>
            <h3>{singleBlogData?.Title}</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={6}>
            <img src={singleBlogData?.Image} alt="img"/>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={7} style={{marginTop: "20px"}}>
            <h4>{singleBlogData?.Subtitle}</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={7}>
            <span style={{color: "#232536", fontSize: "16px"}}>{singleBlogData?.Article}</span>
          </Col>
        </Row>
       </Container>
     </>
    )
}

export default BlogDetail;  