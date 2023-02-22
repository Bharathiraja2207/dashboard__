import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CardMedia from '@mui/material/CardMedia';
import Chart from 'react-apexcharts'
import { useState } from 'react'



export function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='boardcontent'>
        <h3>Dashboard</h3>
        <div> <Button variant="contained" size='small' startIcon={<DownloadIcon/>}>Generate</Button></div>
        </div>
        <br/>
           <Dash/>
           <br/>
           <div className='mainchart'>
           <div><Chart1/></div>
           <div><Chart2/></div>
           </div>
           <br/>
       <div className='maincontainers'>
           <div>
            <Container/>
           </div> 
           <div>
           < Cardmedia/>
           <br/>
           <Cardmedia1/>
           </div>
       </div>    
    </div>   
  );
}

function Dash(){
  const data=[
        {earn:"Earning(monthly)",
        doller:"$40,000",
        icon:<CalendarMonthIcon/>,
        style:{
          backgroundColor: "white",
          width: "150px",
          borderRadius:"5px",
          borderLeft:"5px solid #4e73df" 
        },
        color:{color:"#4e73df"} 
}, 
        {earn:"Earning(Annual)",
        doller:"$215,000",
        icon:<AttachMoneyIcon/>,
        style:{
          backgroundColor: "white",
          width: "150px",
          borderRadius:"5px",
          borderLeft:"5px solid #1cc88a" 
        },
        color:{color:"#1cc88a"} 
},
        {earn:"Tasks",
         doller:"50%",
         icon:<ContentPasteIcon/>,
         style:{
          backgroundColor: "white",
          width: "150px",
          borderRadius:"5px",
          borderLeft:"5px solid #36b9cc" 
        },
        color:{color:"#36b9cc"} 
},
        {earn:"Pending Request",
        doller:"18",
        icon:<QuestionAnswerIcon/>,
        style:{
          backgroundColor: "white",
          width: "150px",
          borderRadius:"5px",
          borderLeft:"5px solid #f6c23e" 
        },
        color:{color:"#f6c23e"} 
}]
  return(
    <div className='containerlist'>
{data.map((dt)=><Content data={dt}/>)}
    </div>
  )
}


function Content({data}){
  return(
    <div className='container' style={data.style}>
      <div className='containercontent'>
        <p  style={data.color} >{data.earn}</p>
        <p>{data.doller}</p>
      </div>
      <div>
        {data.icon}
      </div>
    </div>
  )
}


function Container(){
  const colordata=[{
    name:"Primary",
    code:"#4e73df",
    style:{
      backgroundColor: "#4e73df",
      width:"200px",
      height:"60px",
      borderRadius: "5%",
      textAlign: "center"
    
    }
      },
      {
        name:"Success",
        code:"#1cc88a",
        style:{
          backgroundColor: "#1cc88a",
          width:"200px",
          height:"60px",
          borderRadius: "5%",
          textAlign: "center"
          
        }
          },
          {
            name:"Info",
            code:"#36b9cc",
            style:{
              backgroundColor: "#36b9cc",
              width:"200px",
              height:"60px",
              borderRadius: "5%",
              textAlign: "center"
              
            }
              },{
                name:"Warning",
                code:"#f6c23e",
                style:{
                  backgroundColor: "#f6c23e",
                  width:"200px",
                  height:"60px",
                  borderRadius: "5%",
                  textAlign: "center"
                  
                }
                  },{
                    name:"Danger",
                    code:"#e74a3b",
                    style:{
                      backgroundColor: "#e74a3b",
                      width:"200px",
                      height:"60px",
                      borderRadius: "5%",
                      textAlign: "center"
                      
                    }
                      },{
                        name:"Secondary",
                        code:"#858796",
                        style:{
                          backgroundColor: "#858796",
                          width:"200px",
                          height:"60px",
                          borderRadius: "5%",
                          textAlign: "center"
                          
                        }
                          },{
                            name:"Light",
                            code:"#f8f9fc",
                            style:{
                              backgroundColor: "#f8f9fc",
                              width:"200px",
                              height:"60px",
                              borderRadius: "5%",
                              textAlign: "center"
                              
                            }
                              },{
                                name:"Dark",
                                code:"#5a5c69",
                                style:{
                                  backgroundColor: "#5a5c69",
                                  width:"200px",
                                  height:"60px",
                                  borderRadius: "5%",
                                  textAlign: "center"
                                  
                                }
                                  }]

  return(
    <div className='card'>
      <div className='progress'>
          <Card sx={{maxWidth:500,fontFamily:"arial"}}>
            <CardHeader 
            title="Project" 
            color='primary' 
            action={<IconButton aria-label='settings'>
                  <MoreVertIcon/>
            </IconButton>

            }></CardHeader>
              <CardContent>


               
                <Typography variant='p' color='black'>Server Migration</Typography>
                <Box sx={{width:'100%'}}>
                  <br/>
                  <LinearProgress variant='determinate' color='error' value={20}/>
                </Box>


                <br/>
                <Typography variant='p' color='black'>Salse Tracking</Typography>
                <Box sx={{width:'100%'}}>
                  <br/>
                  <LinearProgress variant='determinate' color='warning'  value={40}/>
                </Box>

                <br/>
                <Typography variant='p' color='black'>Customer Database</Typography>
                <Box sx={{width:'100%'}}>
                  <br/>
                  <LinearProgress variant='determinate' color='primary' value={60}/>
                </Box>

                <br/>
                <Typography variant='p' color='black'>Payout Details</Typography>
                <Box sx={{width:'100%'}}>
                  <br/>
                  <LinearProgress variant='determinate' color='info' value={80}/>
                </Box>

                <br/>
                <Typography variant='p' color='black'>Account Setup</Typography>
                <Box sx={{width:'100%'}}>
                  <br/>
                  <LinearProgress variant='determinate' color='success' value={100}/>
                </Box>

              </CardContent>
          </Card>
      </div>
      <br/>
      <div className='colorbox'> 
       {colordata.map((cd)=> <Color colordata={cd}/>)}
       </div>

    </div>
  )
}


function Cardmedia(){
 

  return(
    <div>
       <Card sx={{maxWidth:500,fontFamily:"arial"}}>
       <CardHeader 
            title="Illustrate" ></CardHeader>
            <CardMedia 
            component='img'
            image='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg'
            alt='img'/>
             <CardContent>
             <Typography variant='p'>Add some quality, svg illustrations to your project courtesy of <a href='#'>unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!<br/>

             <a href='#'>Browse Illustrations on unDraw →</a></Typography>
             </CardContent>
       </Card>     
    </div>
  )
}

function Color({colordata}){
  // const style={colordata.style}
  return(
    <div className='rrr' ><p style={colordata.style}>{colordata.name}<br/>{colordata.code}</p></div>
  )
}

function Cardmedia1(){
  return(
    <Card sx={{maxWidth:500,fontFamily:"arial"}}>
       <CardHeader 
            title="Development Approach" ></CardHeader>

             <CardContent>
             <Typography variant='p'>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance.
              Custom CSS classes are used to create custom components and custom utility classes.
              <br/>
              <br/>
              Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</Typography>
             </CardContent>
       </Card>
  )
}


function Chart1(){
  const [state,setstate]=useState({
          
    series: [{
      name: 'series',
      data:[0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'month',
        categories: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
      },  
    }})
   
  return( 
    <div className='chart'>
      <Card  sx={{maxWidth:600,fontFamily:"arial"}}>
      
      <CardHeader 
            title="Earnings Overview" 
            color='primary' 
            action={<IconButton aria-label='chart'>
                  <MoreVertIcon/>
            </IconButton>

            }></CardHeader>
           

<CardContent>
<div className='col'> <Chart options={state.options} series={state.series} type="area" height={240} width={550} /></div>
</CardContent>
      </Card>
      </div>
  )
}


function Chart2(){
  const [state,setstate]=useState({
          
    series: [15,55,30],
   

    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
    }
  })
  return( <div>
    <Card sx={{maxWidth:500,maxHeight:1000,fontFamily:"arial"}}>
      <CardHeader 
            title="Revenue Sources" 
            color='primary' 
            action={<IconButton aria-label='chart'>
                  <MoreVertIcon/>
            </IconButton>

            }></CardHeader>
    <CardContent>
<div id="chart">
  <Chart options={state.options} series={state.series} type="donut"  width={380} />
</div>
</CardContent>
    </Card>
    </div>
  )
}