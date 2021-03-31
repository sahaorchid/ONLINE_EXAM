import React, { useEffect,useRef } from "react"
import Menu from './Menu';
import {useParams,withRouter} from 'react-router-dom'
import Qus from './Qus';
import './home.css'
import {useState} from 'react';
import axios from 'axios'


function Home(props){
//states for countdown
    const[timerSec,settimerSec]=useState(0)
    const[timerMinute,settimerMinute]=useState(0)
    const[timerHours,settimerHours]=useState(0)
    const[timerDays,settimerDays]=useState(0)

    const[urlid,seturlid]=useState()

    //states for api get req
    const [qno, setqno] = useState()
    const [qus, setqus] = useState("")
    const [op1, setop1] = useState("")
    const [op2, setop2] = useState("")
    const [op3, setop3] = useState("")
    const [op4, setop4] = useState("")

    //state for post request to api to create a json object
    const [qusans, setqusans] = useState({'qusno':0,'qus':'','ans':''})

//countdown code    
    let interval=useRef();

 //function that run every 1sec   
 const startTimer=()=>{
    const cowntDownDate=new Date('Mar 30,2021 00:08:00').getTime()//start time
    interval=setInterval(()=>{
        const now=new Date().getTime()
        const distance=cowntDownDate-now;
        const days=Math.floor(distance/(1000*60*60*24))
        const hours=Math.floor((distance%(1000*60*60*24)/(1000*60*60)))
        const minutes=Math.floor((distance%(1000*60*60))/(1000*60))
        const secs=Math.floor((distance%(1000*60))/(1000))

        if(distance<0){
            clearInterval(interval.current)    
            props.history.push("/success") //after timeover redirect to home page
        


        }else{
            //change states value
            settimerDays(days)
            settimerHours(hours)
            settimerMinute(minutes)
            settimerSec(secs)
        }
    },1000)
}//end countdown function


//fetch parameter from url which we use as a qustion number
    const id=useParams()
    const urlpara=parseInt(id.id)//convert url qusnumber into integer so that we 
    var urlpara1=urlpara.toString() // remove the zero which is present before id
    
    var url='http://127.0.0.1:8000/getqus/';//api endpoint for get request
    var qusno=0;
    qusno=(urlpara)+1;
    var qusnob="/home/"+qusno.toString()//create a dynamic url

    //after every ans submit it create a json data with qusnumber,answer and qus
    const inputdata=(e)=>{
        setqusans({'qusno':qno,'qus':qus,'ans':e.target.value}) 
    } 
    
//after every form submit it make post request in api
    const onsub=(e)=>{
         console.log(qusans)
        seturlid(urlpara)
        // axios.post('http://127.0.0.1:8000/postans/',qusans).then((res)=>{
        //     alert(res)
        // })
        e.preventDefault();
        props.history.push(qno<5?qusnob:"/success")//after post req it redirect to next qus
                                            //in case of final submission it redirect home page
        

    }




    useEffect(()=>{
        
        startTimer();//call countdown function
        
       //get req to api 
        async function getdata()
        {
            const res=await axios.get(url.concat(urlpara1))
            setqno(res.data.qno)
            setqus(res.data.qus)
            setop1(res.data.op1)
            setop2(res.data.op2)
            setop3(res.data.op3)
            setop4(res.data.op4)
        }
        getdata();
    })

        return(
            <>
                <div className= {(timerHours<1 && timerMinute<6)?"div_stime":"div_ltime"}>
                    <p className={(timerHours<1 && timerMinute<15)?"p_s":"p_l"}>Time Left: {timerHours}:{timerMinute}:{timerSec}</p>
                </div>
                <Menu qno={qno}/>
                <Qus urlid={urlid}/>
            
                <div className="cls">
                <p className="qus_p">qus no : {id.id} </p>
                    <h1 className="quscss">{qus}</h1>
                    <form onSubmit={onsub} style={{backgroundColor:"#ffffff"}}>
                        <input style={{marginTop:"20px"}}  type="radio" id="male" name="gender" value={op1} onChange={inputdata}/>
                        <label className="qus_lbl" >{op1}</label><br/>
                        <input  style={{marginTop:"20px"}}   type="radio" id="female" name="gender" value={op2} onChange={inputdata}/>
                        <label  className="qus_lbl">{op2}</label><br/>
                        <input  style={{marginTop:"20px"}}   type="radio" id="other" name="gender" value={op3} onChange={inputdata} />
                        <label  className="qus_lbl">{op3}</label><br/>
                        <input  style={{marginTop:"20px"}}   type="radio" id="other" name="gender" value={op4} onChange={inputdata}/>
                        <label  className="qus_lbl">{op4}</label><br/> 
                        <div style={{marginLeft:"230px",backgroundColor:"#ffffff"}}>              
                        <button type="submit" className="btn">{qno<5?"save & continue":"save & submit"}</button>
                        </div>
                    </form>
                    </div>
            </>
        )
    }

export default withRouter(Home);


