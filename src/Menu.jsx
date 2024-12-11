import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";
import Bolivia from './Bolivia.jsx'
import './Estilomenu.css'
import image from '/comidaBol.jpg'
import Carrusel from './Carrusel.jsx';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Tarjetas from './Tarjetas.jsx';


{/*******************BOLIVIA*****************************/ }
function Bol(props){
    return(
        <div className='bol'>
            <Bolivia></Bolivia>
        </div>
    );
}
{/*******************ALTIPLANO*****************************/ }
function Lapaz(props){
    return(
        <div className='lpz'>
            <h1>La Paz</h1>
            <img src="/lpz1.jpg" alt="la paz" />
            <div className='tarj'>
                <div className='tarj1'><Tarjetas 
                    img={"https://platostipicosdelapaz.com/wp-content/uploads/2023/07/PLATO-PACENO.jpg" }
                    titulo={"Plato Paceño"} 
                    texto={"El Plato Paceño es un clásico de la gastronomía boliviana, con papas, queso, chuño, mote de maíz y carne de res como ingredientes principales. Su mezcla de sabores y texturas lo convierten en una delicia tradicional muy apreciada en la región."}
                    video={"https://www.youtube.com/watch?v=Q7cyBFPwqB0&ab_channel=JuliaKani"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.infodiez.com/wp-content/uploads/2019/03/chairo-paceo.jpg"} 
                    titulo={"Chairo"}
                    texto={"El Chairo se trata de una sopa preparada con chuño, carne de cordero, chalona remojada, papa, zanahoria, cebolla, habas, mote de maíz, hierba buena, wuacataya, orégano y sal al gusto."} 
                    video={"https://www.youtube.com/watch?v=9q1Ld4okxFU&ab_channel=RecetasdeMelito"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://comidasbolivianas.org/wp-content/uploads/2020/06/fricase-boliviano.jpg"} 
                    titulo={"Fricase"} 
                    texto={"fricasé, es un plato típico del altiplano boliviano, consiste en un caldo picante aderezado con cebolla y aji panca picante, con trozos de carne de cerdo, chuño negro y mote blanco. "}
                    video={"https://www.youtube.com/watch?v=b_7tqoDS0zo&ab_channel=SaboresyPasionesconMery"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.cocina-boliviana.com/base/stock/Recipe/thimpu-de-cordero/thimpu-de-cordero_web.jpg.webp"} 
                    titulo={"Thimpu"} 
                    texto={"El Thimpu de cordero es un plato tradicional que destaca por su sabrosa salsa de ají amarillo. Además, se distingue por servir el caldo sobrante aparte, sazonado con perejil y acompañado de papas o chuño."}
                    video={"https://www.youtube.com/watch?v=CsBM0WMUEBs&ab_channel=CocinaF%C3%A1cilConRuth"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i.ytimg.com/vi/FH8yAGrUC7M/maxresdefault.jpg"} 
                    titulo={"Queso Humacha"} 
                    texto={"Queso Humacha es un plato de preparación rápida y sencilla, asociado a la influencia culinaria peruana. Su nombre puede interpretarse como aguado, debido a su consistencia cremosa. ¡Ideal para compartir en familia!"}
                    video={"https://www.youtube.com/watch?v=FH8yAGrUC7M&ab_channel=RecetasdeMelito"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas
                    img={"https://comidasbolivianas.org/wp-content/uploads/2020/09/Preparando-Sopa-de-Mani-En-casa-12-13-screenshot-1024x576.png"}
                    titulo={"Sopa de Mani"}
                    texto={"Sopa de maní, un caldo hecho con maní crudo licuado, verduras y tu proteína favorita. Se sirve con un poco de papas fritas caseras y se acompaña con rodajas de pan ( Marraquetas tradicionalmente)"}
                    video={"https://www.youtube.com/watch?v=asLAk_bdXkM&ab_channel=JuliaKani"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}
function Oruro(props){
    return(
        <div className='oru'>
            <h1>Oruro</h1>
            <img src="/or1.jpg" alt="oruro" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://tipsparatuviaje.com/wp-content/uploads/2019/10/rostro-asado.jpg"} 
                    titulo={"Rostro Asado"}
                    texto={"Entre los platos típicos de Oruro el rostro asado es uno de los más icónicos. Es la cabeza del cordero con su piel cocinada al horno. El resultado es un platillo de exquisito sabor que representa la gastronomía orureña"}
                    video={"https://www.tiktok.com/@werukesa/video/6972264175577894150?lang=es"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://tipsparatuviaje.com/wp-content/uploads/2019/10/charquekan-orureno.jpg"} 
                    titulo={"Charquekan Orureño"}
                    texto={"Un plato muy popular en toda Bolivia, pero con una versión particular en Oruro. Se prepara con charque de llama, papas, mote de maíz, huevo duro y queso."}
                    video={"https://www.youtube.com/watch?v=ezJ0zDVzyHA&ab_channel=JuliaKani"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://tipsparatuviaje.com/wp-content/uploads/2019/10/intendente-comida.jpg"} 
                    titulo={"El Intendente"}
                    texto={"El plato típico de Oruro intendente es una comilona de carnes y embutidos que incluye cordero, res, cerdo, pollo, chorizo y menudencias. La receta también puede llevar riñón, costilla de cordero, trozos de tripa gorda, corazón de ternera, chuletas y chorizo de cerdo, presas de pollo y asado de lomo de res."}
                    video={"https://www.youtube.com/watch?v=DkJTslK8yyQ&ab_channel=C-CAPAZON-LINE"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://tipsparatuviaje.com/wp-content/uploads/2019/10/chorizos-bolivia.jpg"} 
                    titulo={"Chorizos"} 
                    texto={"Los chorizos de la plaza de La Ranchería constituyen otro símbolo de la gastronomía de Oruro, un espacio público de la época colonial donde los preparan y venden. Son hechos de carne molida condimentada y servidos con mote y pancitos."}
                    video={"https://www.youtube.com/watch?v=tmm9jtZQXWI&ab_channel=SaboresBolivianos"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://tipsparatuviaje.com/wp-content/uploads/2019/10/api-bebida.jpg"} 
                    titulo={"Api"} 
                    texto={"Uno de los clásicos de la gastronomía altiplánica es el api, una bebida hecha con granos molidos de maíz morado y amarillo.Lleva azúcar, canela, clavos y frutas. Es una mazamorra espesa que se toma caliente para combatir el frío, aunque también existe una versión para refrescar."}
                    video={"https://www.youtube.com/watch?v=jpqJLMvAvnU&ab_channel=MoocApiconbu%C3%B1uelo"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://lapatria.bo/wp-content/uploads/2019/09/d2641c81-2863-4064-9c1e-8c9ef8b35677.jpg"} 
                    titulo={"Brazuelo de Cordero"} 
                    texto={"La oveja es un alimento básico en el altiplano desde que el ganado ovino llegó al Nuevo Mundo y el brazuelo o paletilla de cordero, preparado con las piernas delanteras de un animal de menos de un año, es uno de los platos típicos de Oruro."}
                    video={"https://www.youtube.com/watch?v=2qwz94pyasU&ab_channel=JuliaKani"}></Tarjetas>
                </div>

            </div>
        </div>
    );
}
function Potosi(props){
    return(
        <div className='pto'>
            <h1>Potosi</h1>
            <img src="/pt1.jpg" alt="potosi" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/K%C2%B4alapurca.jpg/1200px-K%C2%B4alapurca.jpg"} 
                    titulo={"Kalapurka"}
                    texto={"Preparada con harina de trigo retostada, esta es una sopa espesa que además se elabora con carne desmenuzada (mayormente la de llama), maíz, ajo, cebolla, papas, sal, aceite y el toque final, piedras que arden ante las brasas. Este último elemento es el más importante de la sopa."}
                    video={"https://www.youtube.com/watch?v=F0tNbt-VLoY&ab_channel=CocinerosBolivianos"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://upload.wikimedia.org/wikipedia/commons/5/5d/Preparaci%C3%B3n_Aj%C3%AD_de_achacana_03.jpg"} 
                    titulo={"Ají de Achacana"}
                    texto={"Este plato típico de Potosí contiene achacana (que se cocina con mucho cuidado para no perjudicar el sabor), chuño remojado, papa imilla roja, cebollas medianas, ají colorado molido, charque de llama, dientes de ajo, pimienta, comino, perejil picado y sal, una variedad de elementos que juntos forman una delicia."}
                    video={"https://www.youtube.com/watch?v=YFOVZ2rVv9c&ab_channel=UnpoquitodetodoconV%26B"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.cocina-boliviana.com/base/stock/Recipe/ch-ajchu-potosino/ch-ajchu-potosino_web.jpg"} 
                    titulo={"Chajchu"}
                    texto={"El chajchu, que también es muy famoso, está compuesto por un plato con chuño, papa, huevo y carne, acompañado de queso rebanado que lleva encima rodajitas finas de cebolla, tomate, perejil, arvejas y habas."}
                    video={"https://www.youtube.com/watch?v=TMB7Qzs1Y3k&ab_channel=JuliaKani"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://cdn.correodelsur.com/img/contents/images_980/2019/09/08/171d3770-672f-4f72-8fb6-fe768b9cb3ad.jpg"} 
                    titulo={"Chapu Minero"} 
                    texto={"Este platillo con mucha historia entre la gente del sur de Potosí lleva carne de llama, charque de llama, papa, cebolla, ajo, comino, ají colorado, quinua graneada, zanahoria, arveja y morrón, constituyéndose en un plato completo que satisface el hambre de cualquiera al puro estilo del occidente."}
                    video={"https://www.youtube.com/watch?v=gI8ZfrYGtw4&ab_channel=SaboresBolivianos"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://scontent.flpb1-1.fna.fbcdn.net/v/t1.6435-9/123937203_754433338479141_8289472391571846061_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cuAWvgv9KAgQ7kNvgGCnmrL&_nc_zt=23&_nc_ht=scontent.flpb1-1.fna&_nc_gid=AK7nfH0pLSXzcEg9Peldwv0&oh=00_AYAP7oyfvoKzKqtncjOuYNKrX_09m5EvnPs2GgvKEe8sHw&oe=677FB81E"}
                    titulo={"Wajta Kanka"}
                    texto={"Este, que puede ser el plato más simbólico de la gastronomía potosina, se sirve en las calles de Potosí con la proteína representada por el cordero cocido al carbón, en compañía de papa, habas, lechuga, tomate, locoto, cebolla, choclo, quinua."}
                    video={"https://www.facebook.com/watch/?v=717032383728181"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}
{/*******************valle*****************************/ }
function Cochabamba(props){
    return(
        <div className='coch'>
            <h1>Cochabamba</h1>
            <img src="/cocha1.jpg" alt="cochabamba" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://platostipicosdecochabamba.com/wp-content/uploads/2023/09/chicharron-de-cerdo.jpg"} 
                    titulo={"Chicharron"}
                    texto={"El chicharron es uno de los platos típicos de cochabamba que se prepara engrandes peroles acompañado de mote, chuño, y una rica y pincante llajwa. En el valle este plato suele ser acompañado por una tutuma de chicha bebida fermentada de maíz."}
                    video={"https://www.youtube.com/watch?v=KSj-2Vr7Xoo&ab_channel=CocinaSolo"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i.ytimg.com/vi/xbyvpohMRU4/maxresdefault.jpg"} 
                    titulo={"Pique Macho"}
                    texto={"El Pique Macho es un plato cochabambino muy popular que consiste entrozos de carne de res en su jugo y salchicha fritas acompañados de papas fritas, huevo, rodajas de pimiento y tomate. Se adiciona mayonesa y otras salsas para acompañar."}
                    video={"https://www.youtube.com/watch?v=yzVzHDnqKvc&ab_channel=JuliaKani"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://upload.wikimedia.org/wikipedia/commons/7/7e/Silpancho_cochalo.jpg"} 
                    titulo={"Silpancho"}
                    texto={"Este plato es el rey de la cocina cochabambina. Consiste en un filete de carne apanado y frito, acompañado de arroz, papas fritas, huevo frito y una salsa de tomate. Es un plato contundente y delicioso."}
                    video={"https://www.youtube.com/watch?v=RyyWzN1aet8&ab_channel=JuliaKani"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ju4kIW49Y0lEBNM7ZkP_sHyhHR4j-Y4m3Q&s"} 
                    titulo={"Lapping"}
                    texto={"Su origen se atribuye al período colonial. Durante esta época, en invierno, una forma de comer la carne era friéndola, ya que el organismo en dicha temporada debe tener mayores defensas por el frío, por eso se aprovechaba la carne provee proteínas. "}
                    video={"https://www.youtube.com/watch?v=aAtnnqGMzDU&ab_channel=RecetasdeMelito"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i.ytimg.com/vi/V5rBvnJS9m8/maxresdefault.jpg"} 
                    titulo={"Puchero"}
                    texto={"El puchero cochabambino es un guiso tradicional boliviano, especialmente popular en Cochabamba. Este plato reconfortante y nutritivo combina diversas carnes, verduras, legumbres y arroz, ademas de frutas como durazno, manzana y pera."}
                    video={"https://www.youtube.com/watch?v=rR16hHkVO7M&ab_channel=JuliaKani"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas
                    img={"https://i.imgur.com/M24Uouy.jpg"}
                    titulo={"Escabeche"}
                    texto={"El escabeche es un plato que se sirve frío y consta de cuero de chancho bañados con vinagre, aceite y agua. Se acompaña con zanahorias, cebollas, ajíes. Se sirve opcionalmente acompañado de pan y mote de maíz."}
                    video={"https://www.youtube.com/watch?v=bUN-WlWkvHI&ab_channel=MarisolRqV"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}
function Chuquisaca(props){
    return(
        <div className='chuqui'>
            <h1>Chuquisaca</h1>
            <img src="/chuq1.jpg" alt="chuquisaca" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i.ytimg.com/vi/kd386yo9MH4/maxresdefault.jpg"}
                    titulo={"Fritanga"}
                    texto={"Este es uno de los más representativo de Chuquisaca y se elabora a base de ají colorado que acompaña el cerdo frito. Las guarniciones que acompañan a esta proteína son: mote, papa, carne y cebolla. "}
                    video={"https://www.youtube.com/watch?v=kd386yo9MH4&ab_channel=MiOllitadeBarro"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i.pinimg.com/originals/2c/4c/34/2c4c3408beafcd391cc931b8e646b456.jpg"}
                    titulo={"Mondongo "}
                    texto={"También es uno de los platillos más reconocidos de Sucre, así como del país. De hecho, si observamos bien, en su presentación original destacan nuestros colores: el rojo, el amarillo y el verde, que constituyen la tricolor nacional. Este lleva mote de maíz cocido, piel de chancho y un ahogado hecho con ají colorado. "}
                    video={"https://www.youtube.com/watch?v=feXhHJaGsr0&ab_channel=RecetasdeMelito"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://azafranbolivia.com/wp-content/uploads/2021/05/59796211_323091738388948_6444166856449196032_n-750x401.jpg"}
                    titulo={"Pacumutu"}
                    texto={"Se trata de un asado de carne de res que se prepara ensartándolo en un palo o fierro a modo de brocheta y se cocina sobre fuego directo. En otras regiones, puede llevar consigo dos o hasta tres tipos de carnes."}
                    video={"https://www.youtube.com/watch?v=ax4eptGT470&ab_channel=GOTADELCHACO"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i1.sndcdn.com/artworks-e2CZ2yCqoImjzLoJ-K8UzIA-t500x500.jpg"}
                    titulo={"Sopa de Gallina Criolla"}
                    texto={"Esta cazuela es muy querida por los pobladores, pues es considerada como un plato levanta muertos gracias a su al alto contenido de proteínas. Incluso, por mucho tiempo, se la ha recomendado para aquellas mujeres que hayan dado a luz, ya que las ayuda a sanar sus heridas internas, así como a generar leche materna."}
                    video={"https://www.youtube.com/watch?v=-JCz6mWVAUY&ab_channel=cocinandoconIrmi"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://azafranbolivia.com/wp-content/uploads/2021/05/59972127_323852864979502_7161562322006179840_n.jpg"}
                    titulo={"Asado de chancho"}
                    texto={"Este es un plato que tradicionalmente se consume en la localidad de Yotala durante las fiestas de Carnaval, Santa Rosa, navideñas y Año Nuevo, pero también es parte de otras celebraciones. Su preparación comienza el día anterior, pues se deja al chancho marinando en una salsa con muchas especias que son la clave de todo su sabor."}
                    video={"https://www.tiktok.com/@crissemprende/video/6964033295168376069?lang=es"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.cocina-boliviana.com/base/stock/Recipe/k-arapecho/k-arapecho_web.jpg.webp"}
                    titulo={"K'arapecho"}
                    texto={"El karapecho es un platillo con una singular presentación y un sabor inconfundible que se ha mantenido a través de los años. Es elaborado con charque seco desalado y cocido cortado en cuadritos que son fritos hasta quedar crocantes que se acompaña con papa, mote y ají. "}
                    video={"https://www.youtube.com/watch?v=JiDJcFnPhS4&ab_channel=SaboresBolivianos"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}
function Tarija(props){
    return(
        <div className='tari'>
            <h1>Tarija</h1>
            <img src="/tr1.jpg" alt="tarija" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://recetasbolivia.com/wp-content/uploads/saice-chapaco.jpg"}
                    titulo={"Saice Chapaco"}
                    texto={"Es el plato más representativo de la culinaria tarijeña. Elaborado a base de carne picada, papa, arveja, cebolla, condimentos y ají colorado. Esta preparación se la acompaña con arroz y sarsa (ensalada de tomate y cebolla)."}
                    video={"https://www.youtube.com/watch?v=Jlti6G4X040&ab_channel=CocinaSolo"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.cocina-boliviana.com/base/stock/Recipe/ranga-ranga-tarijena/ranga-ranga-tarijena_web.jpg.webp"}
                    titulo={"Ranga Ranga"}
                    texto={"Este plato esta elaborado a base de panza o libro de res picada, papa, cebolla, condimentos y ají amarillo. Esta preparación se la acompaña con sarsa (ensalada de tomate y cebolla)."}
                    video={"https://www.youtube.com/watch?v=3Wgw6XWqWCk&ab_channel=RISSOLEE"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i.ytimg.com/vi/VZufLftWzwc/maxresdefault.jpg"}
                    titulo={"Picante Mixto"}
                    texto={"El Picante Mixto es un plato con amplia variedad de ingredientes en su preparación. Combina sabores y texturas en una mezcla armoniosa y deliciosa. Preparado con cuidado y atención, resulta en una explosión de sabores que deleitará tu paladar."}
                    video={"https://www.youtube.com/watch?v=VZufLftWzwc&ab_channel=CocinaSolo"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.cocina-boliviana.com/base/stock/Recipe/chanka-o-chankao-de-pollo/chanka-o-chankao-de-pollo_web.jpg.webp"}
                    titulo={"Chanka de pollo"}
                    texto={" Plato de sabor condimentado y consistencia acuosa, la Chanka de pollo es un guiso tradicional que combina la carne de pollo con una variedad de vegetales y condimentos. Su preparación requiere tiempo y paciencia para lograr un resultado sabroso y reconfortante."}
                    video={"https://www.youtube.com/watch?v=fDDAG03XpqY&ab_channel=CocinaSolo"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://cdn.bolivia.com/gastronomia/2011/08/30/chupe-de-camarones-3645-1.jpg"}
                    titulo={"Chupe de camaroncillo de río"}
                    texto={"Plato típico de Tomatitas elaborado con camaroncillos del río, papa, choclo y diferentes verduras. "}
                    video={"https://www.youtube.com/watch?v=reBjmhwiXuQ&ab_channel=Abelca"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://i.ytimg.com/vi/96E_EY5ygfU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgZSguMA8=&rs=AOn4CLBfvySXXUUwXiLWXJ6UdUDLPgikiQ"}
                    titulo={"Arvejada"}
                    texto={"Se trata de un plato consistente en una mezcla de arvejas con ají de la región (Arivivi) y carne, acompañada de arroz. "}
                    video={"https://www.youtube.com/watch?v=0SNIFIyf4F8&ab_channel=CarlaAlfaro"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}
{/*******************Llano*****************************/ }
function Santa(props){
    return(
        <div className='stcz'>
            <h1>Santa Cruz</h1>
            <img src="/stc1.jpg" alt="santa cruz" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://platostipicosdesantacruz.com/wp-content/uploads/2023/07/majadito-de-charque-1.jpg.webp"}
                    titulo={"Majadito"}
                    texto={"El majadito es un plato típico de la gastronomía boliviana que se prepara en los departamentos del Beni y Santa Cruz. Es un plato sabroso y sustancioso, que combina ingredientes locales y sabores auténticos. A continuación, te detallamos los ingredientes principales de este sabroso plato Boliviano y el proceso de preparación."}
                    video={"https://www.youtube.com/watch?v=cSmSxuWFzc0&ab_channel=CocinaF%C3%A1cilConRuth"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.cocina-boliviana.com/base/stock/Recipe/rapi-al-jugo/rapi-al-jugo_web.jpg"}
                    titulo={"Rapi al jugo"}
                    texto={"Es un plato a base de carne de res, generalmente la parte más tierna del animal, cocida en su propio jugo hasta que quede muy suave y desmenuzable. Se acompaña de arroz blanco y una variedad de ensaladas, como la ensalada rusa o la ensalada de tomate y cebolla."}
                    video={"https://www.youtube.com/watch?v=FprDLorzkBs&ab_channel=MAJARILE"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://platostipicosdesantacruz.com/wp-content/uploads/2023/06/patasca-santa-cruz-1-1024x467.jpeg.webp"}
                    titulo={"Patasca"}
                    texto={"Patasca Cruceña, una variante regional que enaltece este plato tradicional. Conocida también como la Patasca Boliviana, esta sopa robusta se prepara con granos de maíz blanco pelado, tiernos trozos de carne de cerdo y un bouquet de especias que dan vida a su aroma distintivo."}
                    video={"https://www.youtube.com/watch?v=71Umnauj7KY&ab_channel=SaboresBolivianos"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://platostipicosdesantacruz.com/wp-content/uploads/2023/06/locro-cruceno-1.jpg.webp"}
                    titulo={"Locro"}
                    texto={"Una sopa espesa y reconfortante, preparada con maíz, charque, verduras y especias. Existen diferentes variedades de locro, como el locro carretero y el locro de gallina."}
                    video={"https://www.youtube.com/watch?v=BF7BevB201U&ab_channel=CocinandoConCheKing"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://upload.wikimedia.org/wikipedia/commons/7/71/Pacumutu.png"}
                    titulo={"Pacumutu"}
                    texto={"Los ingredientes son carne filete, tomate, cebollas medianas, pimiento morrón rojo, jugo de limón, salsa de soya, aceite y sal."}
                    video={"https://www.youtube.com/watch?v=FrF8ctsn76E&ab_channel=RecetasdeMelito"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://recetasbolivia.com/wp-content/uploads/sonso-de-yuca.jpg"}
                    titulo={"Sonso de yuca"}
                    texto={"Es una comida callejera popular en Santa Cruz. Dado que la yuca tiene un sabor dulce a nuez cuando se cocina, el sonso de yuca es considerado un refrigerio dulce. Por lo general, se sirve con una taza de café por la tarde noche."}
                    video={"https://www.youtube.com/watch?v=1snmBleEewo&ab_channel=CocinaSolo"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}
function Beni(props){
    return(
        <div className='bni'>
            <h1>Beni</h1>
            <img src="/beni1.jpg" alt="beni" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://casadecamporestaurante.com/wp-content/uploads/2020/12/keperi-e1615541624499.jpeg"}
                    titulo={"Keperi Beniano"}
                    texto={"Este plato es una delicia de la región. Se prepara con carne de res, jugo de limón, pimienta, comino y otros condimentos. La carne se cocina lentamente hasta que queda desmenuzable y se sirve acompañada de arroz y ensalada."}
                    video={"https://www.youtube.com/watch?v=tZ7y6ftRyMI&ab_channel=Recetas"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.recetas.com.bo/sites/default/files/2018-03/pacumutu-beni-0316.jpg"}
                    titulo={"Pacumutu trinitario"}
                    texto={"Este platillo consiste en la elaboración de brochetas de carne de res. Aunque en el oriente esta proteína se puede acompañar con otras como embutidos o pollo, la versión beniana solamente incluye esta primera, que es acompañada con algunas verduras acomodadas en la varilla, mientras que en el plato te espera un poco de arroz y yuca.  "}
                    video={"https://www.youtube.com/watch?v=dL3NWj21zo8&ab_channel=RodolfoCayocabrera"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://www.opinion.com.bo/media/opinion/images/2019/08/04/2019S16939.jpg"}
                    titulo={"Chicharrón de lagarto"}
                    texto={"Esta carne se destaca en la región por su buena consistencia, su aroma, su sabor poco común y aspecto muy parecido al del pescado, así como algunas propiedades nutricionales, por lo cual ha sido añadida a diversos platillos como este. En su caso la carne de lagarto es rebozada y frita y se acompaña con arroz, yuca y ensalada. "}
                    video={"https://www.youtube.com/watch?v=OMgrjgyesqI&ab_channel=CocinerosBolivianos"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://azafranbolivia.com/wp-content/uploads/2021/11/55576922_818369588525141_3115268989584932864_n-1-e1637196128540-750x432.jpg"}
                    titulo={"Sopa de Pirañas"}
                    texto={"Así es, en la región, las arañas se consideran deliciosas y mejor aún si se prepara este caldo. El mismo contiene pirañas bien cocidas, cebolla, pimientos verdes, salsa de tomate concentrado, dientes de ajo, locoto, orégano seco, sal y pimienta."}
                    video={"https://www.youtube.com/watch?v=RZ7dk0jj7qU&ab_channel=CocinerosBolivianos"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNImmdphRTk3JR1TFUd0_DMWKjPazeZb6vrGrWhtlkGMWpBmzzWSUfcKnzW0o1"}
                    titulo={"Masaco Beniano"}
                    texto={"Estos horneados tienen muchas variantes deliciosas, pueden ser de: plátano (mezcla de plátano con charque/carne seca), de yuca (mezcla de yuca con charque) y de queso (mezcla de queso con plátano). El plátano o carbohidrato principal es machacado en pacú."}
                    video={"https://www.youtube.com/watch?v=4Z1va2tLefE&ab_channel=LUCHITAHB"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRu4W1-JXwZg9Od3CNIaF59AQmEMxs-xgBYngaT-wzUUf_9qwryf4qL_A-NHipp"}
                    titulo={"Pacu Frito"}
                    texto={"Este platillo es preparado con pacú (un pez que crece en los ríos de la región) mayormente empanizado y luego frito acompañado de yuca, también frita, arroz (opcional) y una refrescante ensalada de lechuga y tomate."}
                    video={"https://www.youtube.com/watch?v=7RqIeIhbS8s&ab_channel=CocinaFacil"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}
function Pando(props){
    return(
        <div className='pnd'>
            <h1>Pando</h1>
            <img src="/pando1.jpg" alt="pando" />
            <div className='tarj'>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7ZTtFVCczgYhl_KRpa6jGIBnNZBi5qZ7yPZxMi7j4vH6BPnEfGmXbMt6bh_4e"}
                    titulo={"Carne de Moroco"}
                    texto={"Aunque no lo creas, se prepara con leche, se trata de un platillo hecho con carne de res, un corte que se encuentra entre la rodilla y la cadera de la ternera, acompañado con verduras y ciruelas con uvas o pasas."}
                    video={"https://www.youtube.com/watch?v=96Pj6apqbII&ab_channel=AbigailAlejovargas"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://canalcocina.es/medias/images/0811coc_menu_perdizescabech.jpg"}
                    titulo={"Escabeche de Torcaza"}
                    texto={"Elaborado con carne de torcaza o codornices, también incluye cebolla, hoja de laurel, zanahoria, aceite de oliva, vinagre de uva, locoto, caldo de pollo, pimienta negra en granos y sal."}
                    video={"https://www.youtube.com/watch?v=3132lxmn_g4&ab_channel=KarenConsueloMendozaQuiroz"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEHxAAy2_ZrTC3rutOO6Ow1Th4oyJ0G0rohfEGru3Qhs4dqXPN8TRwGLSkZ3MK"}
                    titulo={"Forofa con charque"}
                    texto={"Aunque es típico de la región, se cree que la Farofa proviene de Brasil, por lo que tendría sentido que esto haya influido para prepararse debido a la cercanía territorial. Este es un plato hecho con harina de yuca y carne de res, en realidad se suele usar como acompañamiento, como si se tratase de algún arroz o alguna pasta."}
                    video={"https://www.youtube.com/watch?v=apZPlwAqOjg&ab_channel=Sabordecasa"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://calendariosaboresbolivia.files.wordpress.com/2014/09/tor.jpg"}
                    titulo={"Caldo de tortuga"}
                    texto={"No es falsa tortuga, este platillo se prepara con presas de tortuga, plátanos verdes rallados, cilantro menta, albahaca y otras especias que le dan un sabor muy peculiar. Se suele acompañar con yuca. "}
                    video={"https://www.youtube.com/watch?v=-mL2ge_s89A&ab_channel=KARINAZOLAHELLISEN"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAExbCv1-9UyZY7ZmZIsbu964sQfxyweaBQa-0G7Gjkqg5W2rqAbmmrASjfcbK"}
                    titulo={"Sudado de surubí"}
                    texto={"Uno de los más conocidos, es elaborado con filetes de surubí, mantequilla, tomates, dientes de ajo, perejil, tomillo, hierba luisa, cebollín y cebollas. Claramente, se acompaña con yuca y quizás alguna ensalada."}
                    video={"https://www.youtube.com/watch?v=Qu0ADNQQmWc&ab_channel=AnaMariaRivasSerrudo"}></Tarjetas>
                </div>
                <div className='tarj1'>
                    <Tarjetas 
                    img={"https://unareceta.com/wp-content/uploads/2017/08/Receta-de-chicharro%CC%81n-de-pescado-crocante.jpg"}
                    titulo={"Chicharrón de Surubí "}
                    texto={"Este platillo se compone simplemente de Surubí rebozado y luego frito con yuca también frita en aceite. Es simplemente espectacular y uno de los más queridos en la región oriental. "}
                    video={"https://www.youtube.com/watch?v=O3URp85R4no&ab_channel=SandraTaborgaOnline"}></Tarjetas>
                </div>
            </div>
        </div>
    );
}





{/*******************MENU*****************************/ }
function Menu(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='menu'>
      {/* Navbar principal */}
      <Navbar color="dark" dark expand="md" fixed="top" {...args}>
        {/* Imagen de la bandera y nombre */}
        <div className='uno'>
            <NavbarBrand >
            <img
                alt="Bolivia"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_map_of_Bolivia.png"
                style={{
                height: 40,
                width: 40,
                marginRight: 10,
                }}
            />
            <Link to="/" className='formatolink'>Inicio</Link>
            </NavbarBrand>   
        </div>
        <div className='dos'><h3 className='titulo'>Platos Tipicos de Bolivia</h3></div>
        <div className='tres'>
            {/* Botón de colapso para pantallas pequeñas */}
            <NavbarToggler onClick={toggle} />

            {/* Menú colapsable */}
            <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
                <UncontrolledDropdown nav inNavbar className='alt'>
                <DropdownToggle nav caret className='alt1'>
                    Altiplano
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><Link to="/lp" className='formatosublink'>La Paz</Link></DropdownItem>
                    <DropdownItem><Link to="/or" className='formatosublink'>Oruro</Link></DropdownItem>
                    <DropdownItem><Link to="/pt" className='formatosublink'>Potosi</Link></DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className='vall'>
                <DropdownToggle nav caret className='vall1'>
                    Valle
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><Link to="/co" className='formatosublink'>Cochabamba</Link></DropdownItem>
                    <DropdownItem><Link to="/ch" className='formatosublink'>Chuquisaca</Link></DropdownItem>
                    <DropdownItem><Link to="/ta" className='formatosublink'>Tarija</Link></DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className='lla'>
                <DropdownToggle nav caret className='lla1'>
                    Llano
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><Link to="/sc" className='formatosublink'>Santa Cruz</Link></DropdownItem>
                    <DropdownItem><Link to="/bn" className='formatosublink'>Beni</Link></DropdownItem>
                    <DropdownItem><Link to="/pd" className='formatosublink'>Pando</Link></DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </div>

        
      </Navbar>
      <Routes>
        <Route path="/" element={<Bolivia />} />
        <Route path='/lp' element={<Lapaz></Lapaz>}></Route>
        <Route path='/or' element={<Oruro></Oruro>}></Route>
        <Route path='/pt' element={<Potosi></Potosi>}></Route>
        <Route path='/co' element={<Cochabamba></Cochabamba>}></Route>
        <Route path='/ch' element={<Chuquisaca></Chuquisaca>}></Route>
        <Route path='/ta' element={<Tarija></Tarija>}></Route>
        <Route path='/sc' element={<Santa></Santa>}></Route>
        <Route path='/bn' element={<Beni></Beni>}></Route>
        <Route path='/pd' element={<Pando></Pando>}></Route>
      </Routes>
    </div>

  );
}

export default Menu;

