import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Locales = () => {

    const [locales, setLocales] = useState([]);

    useEffect(() => {
        const getLocales = async () => {
            try {
                const collectionRef = collection(db, "Locales");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data(); //firestore guarda la información de cada documento en data()
                    data.id = doc.id; // El id se igual al ID del local de la base de datos
                    return data;
                })

                setLocales(docs);
            } catch (error) {
                console.log(error);
            }
        }

        getLocales()
    }, [])

    console.log(locales)



    return (
        <div>
            <h1 className='text-center'>Locales</h1>
            <div>
                {
                    locales.map(local => (
                        <div key={local.id} style={{ color: "#230606" }}> 
                            <Container>
                                <Row>
                                    <Col>{local.name}</Col>
                                    <Col>{local.direccion}</Col>
                                    <Col>{local.region}</Col>
                                    <Col>{local.region}</Col>
                                </Row>
                            </Container>
                            </div>
                            ))}

                    </div>
                 </div>
                            );
}

                            
export default Locales


                            {/*<Table striped bordered hover>
                            <thead>
                                <tr>
                                  
                                    <th>Local</th>
                                    <th>Dirección</th>
                                    <th>Región</th>
                                    <th>Horario</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                 <th>{local.name}</th>
                                 <th>{local.direccion}</th>
                                 <th>{local.region}</th>
                                <th>{local.horario}</th>
                                </tr>
                            </tbody>
                        </Table> */}
                        
                    
            






