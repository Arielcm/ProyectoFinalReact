const About = (props) => {
    return(
        <>
        <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">            
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <h3>Somos una empresa que se dedica al desarrollo de soluciones a medida</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon"><i className="ri-bar-chart-box-line"></i></div>
              <h4 className="title"><a href="">Gestión</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title"><a href="">Diseño</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon"><i className="ri-database-2-line"></i></div>
              <h4 className="title"><a href="">Implementación</a></h4>
              <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section id="counts" className="counts">
      <div className="container">

        <div className="row" data-aos="fade-up">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="1" className="purecounter">100</span>
              <p>Clientes Satisfechos</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">521</span>
              <p>Proyectos Realizados</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-code-slash"></i>
              <span data-purecounter-start="0" data-purecounter-end="1234" data-purecounter-duration="1" className="purecounter">1234</span>
              <p>Desarrollos Actuales</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="19" data-purecounter-duration="1" className="purecounter">19</span>
              <p>Equipos Especializados</p>
            </div>
          </div>

        </div>

      </div>
    </section>
        </>
    )
}
export default About;