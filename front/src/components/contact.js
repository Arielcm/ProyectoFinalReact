import { useState} from "react";
import axios from 'axios';

const Contact = () => {

  const initialForm = {
    nombre:'',
    email:'',
    asunto:'',
    mensaje:''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]:value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error === false) {
      setFormData(initialForm)
    }
  }

    return(
       <>
       <section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contacto</h2>
          <p>Formas de contacto:</p>
        </div>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Personalmente:</h4>
                <p>Calle Falsa 123 - Sprinfield</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>example@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Celular:</h4>
                <p>+54 9876 45612</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

            <form action="/contacto" method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="nombre" className="form-control" id="nombre" placeholder="Nombre" 
                  value={formData.nombre} onChange={handleChange}/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email" 
                  value={formData.email} onChange={handleChange}/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="asunto" id="asunto" placeholder="Asunto" 
                value={formData.asunto} onChange={handleChange}/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="mensaje" rows="5" placeholder="Mensaje" 
                value={formData.mensaje} onChange={handleChange}></textarea>
              </div>              
              <div className="text-center"><button type="submit">Enviar Consulta</button></div>
              
                {sending ? <p>Enviando...</p> : null}
               
                {msg ? <p>{msg}</p> : null}


            </form>

          </div>

        </div>

      </div>
    </section>
       </>
    );
}
export default Contact