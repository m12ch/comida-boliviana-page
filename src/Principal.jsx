import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Estilos.css'

function Uno(props){
    return(
        <div className='hijo1'>
            <h2>ESTA ES LA PAGINA 1</h2>
            <img src="./image.png" alt="" />
        </div>
    );
}
function Dos(props){
    return(
        <div className='hijo2'>
            <h2>ESTA ES LA PAGINA 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sed nostrum quam est id, nobis eaque? Aut assumenda, 
                nobis temporibus illo ullam rem rerum vero numquam quasi 
                officia esse hic quae?</p>
        </div>
    );
}
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Tres(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className='hijo3'>
        <h2>ESTA ES LA PAGINA 3</h2>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Principal(props){
    return(
        <div className='padre'>
            <h1>Aqui esta el titulo principal</h1>
            <ul>
              <li><Link to="/">Enlace Pag 1</Link></li>
              <li><Link to="/dos">Enlace Pag 2</Link></li>
              <li><Link to="/tres">Enlace Pag 3</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Uno></Uno>}></Route>
                <Route path='/dos' element={<Dos></Dos>}></Route>
                <Route path='/tres' element={<Tres></Tres>}></Route>
            </Routes>
        </div>

    );
}
export default Principal;

