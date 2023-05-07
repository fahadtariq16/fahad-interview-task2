import React, {useState, useEffect} from "react";
import {Container, Row, Col, Card,CardBody} from "reactstrap";
import car from "../../assets/images/car.png";
import axios from "axios";
import eyeIcon from "../../assets/icons/Eye.png";
import { useNavigate } from "react-router-dom";
import store from '../../redux/store/store.js';
import arrowIcon from "../../assets/icons/Arrow.png";

const MainPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);


    useEffect(()=> {
        store.dispatch({ type: 'INCREMENT' });
    },[])


    const count = store.getState().reducer.count;

    useEffect(()=> {
        const getData = async() => {
            const data = await axios.get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
            setData(data.data);
        };
        getData()
    },[])

    console.log(data);

    const blogDetail = (id) => {
        navigate(`/blog-detail/${id}`);
    }

    const searchtool = () => [
        navigate("/property-search")
    ]

    return(
        <Container fluid className="pd-0">
            <Row>
            <Col lg={6} style={{padding: "0px"}}>
                <div className="bg-image">
                    <div className="imageOverlay">
                <div className="outerimageTxtStyling">
                    <h1 className="imageTxtStyling">Our Blog</h1>
                    </div>
                    </div>
                </div>
            </Col>
            <Col lg={6} style={{padding: "0px"}}>
                <div className="outerimgsiderStyling">
                   <Row>
                    <Col lg={1}></Col>
                    <Col lg={8}>
                    <div style={{marginTop: "80px"}}>
                   <h4 style={{color: "white"}}>Diagnose Car Problems If You Don’t Know Much About Cars</h4>
                   <span style={{color: "white", fontSize: "11px"}}>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</span>
                   </div>
                   </Col>
                   </Row>
                </div>
            </Col>
            </Row>
            <Row>
                <Col className="outercardCarStyling">
                    <Card style={{width: "800px", height: "200px", marginTop: "70px"}} onClick={searchtool}>
                        <CardBody>
                            <Row>
                            <Col lg={2}>
                            <img src={car} alt="car" style={{height: "170px"}}/>
                            </Col>
                            <Col lg={1}></Col>
                            <Col lg={9} style={{paddingLeft: "20px"}}>
                                <span style={{color: "grey", fontSize: "12px"}}>Posted on October 2021</span>
                                <span style={{paddingLeft: "20px"}}><img src={eyeIcon} alt="eye"/></span>
                                <span className="viewStyling">{count} Views</span>
                                <span className="featureStyling">FEATURED</span>
                                <div style={{marginTop: "5px"}}>
                                <h4>
                                Should I Buy a New Car or Lease a New Car in 2021?
                                </h4>
                                <span style={{fontSize: "11px", marginRight: "20px", color: "#232536"}}>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</span>
                                <div style={{marginTop: "10px"}}>
                                <strong style={{fontSize: "10px"}}>READ MORE</strong>
                                <img src={arrowIcon} alt="arrow" style={{width: "20px", marginLeft: "10px"}}/>
                                </div>
                                </div>
                            </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingLeft: "50px", paddingRight: "80px"}}>
                {data?.map((blog)=> {
                    return(
                     <Col lg={4} style={{marginTop: "40px"}}>
                        <Card style={{borderColor: "white"}} onClick={() => blogDetail(blog?.id)}><CardBody>
                        <img src={blog?.Image} alt="blogimage" style={{width: "355px", height: "266px"}}/>
                        <div style={{marginTop: "10px"}}>
                        <span style={{color: "grey", fontSize: "12px"}}>Posted on October 2021</span>
                        <span style={{paddingLeft: "20px"}}><img src={eyeIcon} alt="eye"/></span>
                        <span className="viewStyling">{count} Views</span>
                        </div>
                        <h5 style={{marginTop: "20px"}}>{blog.Title}</h5>
                        <span>{blog.Subtitle}</span>
                        </CardBody></Card>
                     </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default MainPage;