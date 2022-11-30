import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../novedades/Novedaditem";

const NoveadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);
    return (
        <section id="team" className="team">
        <div className="container">
            <div className="section-title" data-aos="fade-up">
                    <h2>Novedades</h2>
                    <p>Novedades del Mundo IT</p>
                </div>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
            </div>
        </section>
        
    )
};

export default NoveadesPage;