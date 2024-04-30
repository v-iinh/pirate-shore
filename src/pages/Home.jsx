import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from '../Requests'

const Home = () => {
    return (
        <div>
            <Main />
            <Row rowID='1' title='Popular' fetchURL={requests.requestPopular}/>
            <Row rowID='2' title='Top Rated' fetchURL={requests.requestTopRated}/>
            <Row rowID='3' title='Upcoming' fetchURL={requests.requestUpcoming}/>
            <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
            <Row rowID='6' title='Thriller' fetchURL={requests.requestThriller}/>
            <Row rowID='7' title='Action' fetchURL={requests.requestAction}/>
            <Row rowID='8' title='Drama' fetchURL={requests.requestDrama}/>
            <Row rowID='9' title='Romance' fetchURL={requests.requestRomance}/>
            <Row rowID='10' title='Adventure' fetchURL={requests.requestAdventure}/>
            <Row rowID='11' title='Fantasy' fetchURL={requests.requestFantasy}/>
            <Row rowID='12' title='Comedy' fetchURL={requests.requestComedy}/>
            <Row rowID='13' title='Mystery' fetchURL={requests.requestMystery}/>
            <Row rowID='14' title='Documentary' fetchURL={requests.requestDocumentary}/>
        </div>
    )
}

export default Home