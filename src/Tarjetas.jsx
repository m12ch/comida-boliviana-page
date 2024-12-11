import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Tarjetas(props){
  return (
    <Card
      body
      outline
      style={{
        width: '18rem'
      }}
    >
      <img style={{width: "100%", height: "300px", objectFit: "cover",}}
        alt="Sample"
        src={props.img}
      />
      <CardBody>
        <CardTitle tag="h3">
          {props.titulo}
        </CardTitle>
        <CardText tag="h8" style={{textAlign: "left",}}>
          {props.texto} <br /> <br/ >
        </CardText>
        <Button>
          <a
            href={props.video} // URL del video de YouTube
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" // Seguridad adicional
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Video Preparación
          </a> 
        </Button>
      </CardBody>
    </Card>
  );
};

export default Tarjetas;
