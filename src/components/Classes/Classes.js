import React,{useState,useEffect} from 'react'
import Heading from '../../UI/Heading/Heading'
import './Classes.css'
import ClassesInfo from './ClassesInfo/ClassesInfo'
import ClassesButton from './ClassesButton/ClassesButton'
const Classes = (props)=> {
    const [state, setState] = useState({
        heading:'',
        image:'',
        text:'',
        activeLink:''
    })

    const values = {
        1:{
            heading:'First Training Class',
            image:'first',
            text:'Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.',
        },
        2:{
            heading:'Second Training Class',
            image:'second',
            text:'Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        3:{
            heading:'Third Training Class',
            image:'third',
            text:'Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.',
        },
        4:{
            heading:'Fourth Training Class',
            image:'fourth',
            text:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.',
        },
    }

    useEffect(() => {
       setState({
           heading:values[1].heading,
           image:values[1].image,
           text:values[1].text,
           activeLink:1
       }) 
    }, [])

    const contentChangeHandler = (id)=>{
        console.log(id)
        setState({
            heading:values[id].heading,
            image:values[id].image,
            text:values[id].text,
            activeLink:id,
        })
    }

    
    const arrText = ['first training class','second training class','third training class','fourth training class']
    return (
        <div className="Classes" id="classes">
            <Heading heading="our" colored='classes' text="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."/>

            <div className="classes-container">
                <div className="classes-buttons">
                    {arrText.map((text,index)=>(
                        <ClassesButton active={(index+1)===state.activeLink?"colored":null} key={index} text={text} changeContent={()=>contentChangeHandler(index+1)}/>
                        ))}
                    <button className="extra-button">View All Schedules</button>
                </div>
                <div className="classes-content">
                    <ClassesInfo image={state.image} heading={state.heading} text={state.text}/>
                </div>
            </div>
        </div>
    )
}

export default Classes
