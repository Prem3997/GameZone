import React from 'react'
import CardComponent from '../Components/CardComponent'
import GameDescriptionComponent from '../Components/GameDescriptionComponent'
import NavigationBar from '../Components/NavigationBar'
import SearchComponent from '../Components/SearchComponent'
import SideBar from '../Components/SideBar'
import SupportComponent from '../Components/SupportComponent'
import MenuIcon from '../Images/MenuIcon'

const HomePage = () => {
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Basic YWRtaW46Y29udHJvbCo4OA==");
    // // myHeaders.append("Access-Control-Allow-Origin", "*");
    // // myHeaders.append("Access-Control-Allow-Credentials", "true");
    // // myHeaders.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // // myHeaders.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow',
    // };

    // fetch("https://testscans.tk/job/testing/build?token=testing", requestOptions)
    //     .then(result => console.log(result.status))
    //     .catch(error => console.log('error', error));

    // fetch("https://10.220.201.56:8443/rest/api/latest/queue/XRAYP-XRAYP?bamboo.variable.test=1234&bamboo.variable.test=TESTING&bamboo.variable.test=TESTING&bamboo.variable.ISSUE_KEY=TESTINGISSUEKEY&bamboo.variable.PROJECT_KEY=TESTINGPROJECTKEY&bamboo.variable.USER=TESTINGPREM&bamboo.variable.test=TESTINGtest&bamboo.variable.TESTS_KEY=TESTINGtest1,TESTING2", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));


    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Basic YWRtaW46Y29udHJvbCo4OA==");

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // fetch("http:192.168.1.14:8080/job/testing/build?token=testing", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result,"Result"))
    //     .catch(error => console.log('error', error));

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Basic YWRtaW46Y29udHJvbCo4OA==");
    // myHeaders.append("Cookie", "JSESSIONID=9F6B5CEF50D381EFF8F0B75C8C676DD3");

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // fetch("https://bamboo.testscans.tk/rest/api/latest/queue/XRAY-XRAY", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    // https://bamboo.testscans.tk/rest/api/latest/queue/XRAY-XRAYP?bamboo.variable.test=testparameter&bamboo.variable.ISSUE_KEY=TES-17&bamboo.variable.TESTS_KEY=TES-14%2CTES-15%2CTES-18%2CTES-13%2CTES-16%2CTES-19&bamboo.variable.PROJECT_KEY=TES&bamboo.variable.USER=Prem+Balaji

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YWRtaW46Y29udHJvbCo4OA==");
    myHeaders.append("Cookie", "JSESSIONID=34A09824C492657ED7DD8CBB09CA372B");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://bamboo.testscans.tk/rest/api/latest/queue/XRAY-XRAYP?bamboo.variable.test=testparameter&bamboo.variable.ISSUE_KEY=TES-17&bamboo.variable.TESTS_KEY=TES-14%2CTES-15%2CTES-18%2CTES-13%2CTES-16%2CTES-19&bamboo.variable.PROJECT_KEY=TES&bamboo.variable.USER=Prem+Balaji", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return (
        <div className='flex flex-row gap-5 h-screen'>
            <aside className='flex flex-col justify-start mt-5'>
                <header className='flex flex-row gap-5 pt-2 pb-2 pl-3 items-center'>
                    <MenuIcon />
                    <p className='font-bold text-white cursor-default text-3xl hover:cursor-pointer hover:text-cyan-500'>GameZone</p>
                </header>
                <div className='h-2/3'>
                    <NavigationBar />
                </div>
                <div className='h-3/3'>
                    <SupportComponent />
                </div>
            </aside>
            <div className='w-4/5'>
                <SearchComponent />
                <GameDescriptionComponent />
                <CardComponent />
            </div>
            <SideBar />
        </div>
    )
}

export default HomePage