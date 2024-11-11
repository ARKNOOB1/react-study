import {useState,useEffect, useContext } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import '../App.css';
import { 재고Context } from '../App.js';
// let Box = styled.div`
//     padding : 20px;
//     color : grey;
// `;
// let YelloBtn = styled.button`
//     background : ${props => props.bg};
//     color : black;
//     padding : 10px;
// `;
function TabContent(props) {
    let [fade, setFade] = useState('')
    useEffect(() => {
        setTimeout(()=>{ setFade('end')},100)
    return () => {
        setFade('')
    }
    },[props.탭])
    return (
        <div className={'start '+ fade}>
            {[<div>내용 0</div>,<div>내용 1</div>,<div>내용 2</div>][props.탭]}
        </div>
    )
}

function Detail (props) {
    // useEffect(() => {
    //     console.log("안녕안녕");
    // });
    // let [count, setCount] = useState(0);

    let {id} = useParams();
    let myItem = props.shoes.find(function(x) {
        return x.id == id
    });
    let [탭, 탭변경] = useState(0)
    let [fade2, setFade2] = useState('')

    useEffect(() => {
        // myItem.id가 이미 배열에 있으면 추가하지 말아주세용
        // if 문 써가지고 하면 쉬울 거 같은데...
        // 중복제거하는 자료형 ==> set(집합)
        // array를 set으로 변환하면?? 중복 제거 효과
        // let 꺼낸거 = localStorage.getItem('watched')
        // 꺼낸거 = JSON.parse(꺼낸거) // string 데이터를 JSON로 파싱
        // 꺼낸거.push(myItem.id)
        
        // 꺼낸거 = new Set(꺼낸거) //set으로 변환
        // 꺼낸거 = Array.from(꺼낸거) // Array로 변환
        // localStorage.setItem('watched',JSON.stringify(꺼낸거))
    }, [])

    useEffect(() => {
        setTimeout(()=>{ setFade2('end')},100)
    return () => {
        setFade2('')
    }
    },[])

    // let [alert, setAlert] = useState(true)
    // useEffect(() => {
    //     let timer = setTimeout(()=> {setAlert(false)}, 2000)
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [] )

    let {재고} = useContext(재고Context)
    return (
        <div className={'container start ' +fade2}>
            <div>{재고}</div>
            <div className="row">
                <div className="col-md-6">
                    <img src="/shoe1.png" width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <div>
                    {/* <Box>
                        <YelloBtn bg="orange" onClick={()=> {setCount(count+1)}}>오렌지버튼</YelloBtn>
                        <YelloBtn bg="blue">파란 버튼</YelloBtn>
                        {alert == true ? <YelloBtn>2초후 사라짐</YelloBtn> : null}
                    </Box> */}
                    <Nav variant="tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼 0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent 탭={탭}/>
                </div>
            </div>
        </div>
    )
}
export default Detail;