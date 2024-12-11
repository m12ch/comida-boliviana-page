import './estylebol.css'
import Carrusel from './Carrusel.jsx'
import image from '/comidaBol.jpg'
export default function Bolivia(props){
    return(
        <div className="p1">
            <div className='espcio'></div>
            <div className="logobol">
                <img src={image} />
            </div>
            <div className='titulo'>
                <h1>¿Qué comidas deberías comer en tu visita al país de <strong>BOLIVIA</strong>?</h1>
            </div>
            <div className='content'>
                <h3><strong>La gastronomía boliviana guarda para los amantes de la buena cocina dulces sorpresas.</strong></h3>
                <p>Una de las mejores cosas de un viaje internacional es probar la gastronomía local, 
                    <strong> ya que es una oportunidad para conocer otros sabores, formas de preparar los alimentos y costumbres. </strong>
                     Por eso, si vas a viajar a Bolivia, no dejes de probar su variedad de platos, los cuales varían dependiendo de la región geográfica. <br/>

                    Además, <strong>las comidas típicas de Bolivia</strong> tienen influencias de la cocina española e indígena, con una combinación de diferentes 
                    ingredientes. Los platos de este país se caracterizan por su rica diversidad, basada en productos agrícolas locales como la papa, por ejemplo. <br /> 
                    La gastronomía de Bolivia se caracteriza por ser una mezcla de las raíces indígenas, europeas y árabes, con influencia de la cocina argentina; 
                    por lo que sus platillos resaltan por su aroma de especies, sabor y colores que evoca a su tradición. Así mismo, la gastronomía de este país 
                    varía de una región a otra, pues sus zonas geográficas cuentan con distintos orígenes culturales.</p>
            </div>
            <div className='product1'>
                <p>Productos en común que se utilizan en la comida boliviana:</p>
                <ul>
                    <li>Carne.</li>
                    <li>Papa.</li>
                    <li>Maíz</li>
                    <li>Ají</li>
                </ul>
            </div>
            <div className='product2'>
                <p>Los productos que se consumían antes de la llegada de otras culturas eran:</p>
                <ul>
                    <li>Maíz.</li>
                    <li>Charque.</li>
                    <li>Quinua.</li>
                    <li>Pescado y moluscos.</li>
                    <li>Leguminosas.</li>
                </ul>
            </div>
            <div className='cont2'>
                <p>Además, disponían de frutas como el tumbo, piña, guayaba, lúcuma, chirimoya y palta. 
                    También usaban aceite de maíz, coco y maní, hierbas y condimentos como el ají.</p>
            </div>
            <div className='product3'>
                <p>En el siglo XVI con la llegada de los españoles se importo y agregó a la dieta boliviana:</p>
                <ul>
                    <li>Papa.</li>
                    <li>Chocolate.</li>
                    <li>Tomate.</li>
                    <li>Hortalizas.</li>
                    <li>Trigo.</li>
                </ul>
            </div>
            <div className='product4'>
                <p>También integraron algunas frutas como:</p>
                <ul>
                    <li>Uva.</li>
                    <li>Manzana.</li>
                    <li>Mango.</li>
                    <li>Naranja y limon.</li>
                </ul>
            </div>
            <div className='cont3'>
                <p>Asi como la importacion del tabaco y el implemento del uso de la carne de res, pollo, cerdo y cordero. <br />
                En el siglo XIX Bolivia se encontró con un deseo independentista, evento que renovó su gastronomía, 
                alejándose de las recetas y sabores más españoles, aunque la influencia europea se encuentra incluso en la actualidad 
                bastante presente en sus platos. <br />
                Por último, se ha hecho bastante popular la cocina fusión en la actualidad, haciendo referencia a la mezcla de prácticas 
                y estilos culinarios de diferentes culturas, en conjunto al concepto gourmet.</p>
            </div>
            <div className='carru'>
                <Carrusel></Carrusel>
            </div>
        </div>
    );
}