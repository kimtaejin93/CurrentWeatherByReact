import React from 'react'
import { BreadcrumbItem, Button, CarouselItem } from 'react-bootstrap';

const WeatherButton = (props) => {
  
  return (
    <div>
        <Button variant={props.city?"warning":"dark"} onClick={()=>props.setCity("")}>CurrentLocation</Button>

        {props.cities.map((item)=>{
          return(
          <Button variant={item==props.city?"dark":"warning"} onClick={()=>props.setCity(item)}>{item}</Button>
          )
        })}
    </div>
  );
};

export default WeatherButton