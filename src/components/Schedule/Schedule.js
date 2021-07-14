import React,{useState} from 'react'
import Header from '../../UI/Heading/Heading'
import './Schedule.css'
import TableRow from '../../UI/TableRow/TableRow'
const Schedule = () => {
    const [state, setstate] = useState({
        currentDay:1
    })
    const [days, ] = useState({
        1:{
           fitness:{
               morning:'10:00AM - 11:30AM',
               evening:''
           },
           body:{
            morning:'',
            evening:'2:00PM - 3:30PM'
           },
        },
        2:{
            fitness:{
                morning:'',
                evening:'2:00PM - 3:30PM'
            },
            body:{
             morning:'10:00AM - 11:30AM',
             evening:''
            },
        },
        3:{
            yoga:{
             morning:'10:00AM - 11:30AM',
             evening:''
            },
            advanced:{
             morning:'',
             evening:'2:00PM - 3:30PM'
            }
        },
        4:{
            muscle:{
             morning:'',
             evening:'2:00PM - 3:30PM'
            },
            advanced:{
             morning:'10:00AM - 11:30AM',
             evening:''
            }
        },
        5:{
            muscle:{
             morning:'10:00AM - 11:30AM',
             evening:''
            },
            yoga:{
             morning:'',
             evening:'2:00PM - 3:30PM'
            },
        },
    })

    const daysArray=['Monday','Tuesday','Wednesday','Thursday','Friday']

    const scheduleHandler = (id)=>{
        setstate({
            currentDay:id,
        })
    }
    return (
        <div className="Schedule"  id="schedules">
            <Header theme="dark" heading="classes" colored="schedule" text="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."/>

            <ul className="schedule-filter">
                {daysArray.map((day,index)=>(
                    <li key={index} onClick={()=>scheduleHandler(index+1)}><span className={(index+1)===state.currentDay?"active":''}>{day}</span>{index===(daysArray.length-1)?null:" /"}</li>
                ),[])}
            </ul>

            <table className="table">
                <tbody>
                    <TableRow one="Fitness Class" two={days[state.currentDay].fitness?days[state.currentDay].fitness.morning:null} three={days[state.currentDay].fitness?days[state.currentDay].fitness.evening:null} four="William G. Stewart"/>
                    <TableRow one="Muscle Training" two={days[state.currentDay].muscle?days[state.currentDay].muscle.morning:null} three={days[state.currentDay].muscle?days[state.currentDay].muscle.evening:null} four="Paul D. Newman" />
                    <TableRow one="Body Building" two={days[state.currentDay].body?days[state.currentDay].body.morning:null} three={days[state.currentDay].body?days[state.currentDay].body.evening:null} four="Boyd C. Harris" />
                    <TableRow one="Yoga Training Class" two={days[state.currentDay].yoga?days[state.currentDay].yoga.morning:null} three={days[state.currentDay].yoga?days[state.currentDay].yoga.evening:null} four="Hector T. Daigle" />
                    <TableRow one="Advanced Training" two={days[state.currentDay].advanced?days[state.currentDay].advanced.morning:null} three={days[state.currentDay].advanced?days[state.currentDay].advanced.evening:null} four="Bret D. Bowers" />
                    
                </tbody>
            </table>
        </div>
    )
}

export default Schedule
