import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const [toggleModal, setToggleModal] = useState(0);


    const toggleTab = (indexPosition) => {
        if(toggleModal === indexPosition) {
            setToggleModal(0);
        } else {
            setToggleModal(indexPosition);
        }
    }



  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title"> React <br /> Development </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>

                <div className={toggleModal === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close" ></i>

                        <h3 className="services__modal-title">Frontend Developer</h3>
                        <p className="description">Service with more than 2 years of experience developing component-based architecture, and managing state. Providing quality work to clients and and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Designing and implementing applications using React's modular and reusable component structure.</p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Efficiently managing and updating application state within the React framework.</p>
                                </i>.
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Successfully integrating React applications with external APIs for dynamic data retrieval.</p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Proficient in identifying and resolving issues through systematic debugging processes.</p>
                                </i>
                            </li>

    

                        </ul>
                    </div>
                </div>
            </span>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title"> ASP .NET <br /> Development</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>

                <div className={toggleModal === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title"> Backend Developer</h3>
                        <p className="description">Experienced in utilizing APIs to retrieve and integrate data for web services. Proficient in making HTTP requests, parsing JSON or XML responses, and handling API authentication. Knowledgeable about RESTful principles and API documentation</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Proficient in integrating APIs to facilitate seamless data exchange between web services.</p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Skillful in implementing robust error-handling mechanisms to gracefully manage unexpected responses or issues during API interactions.</p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Proficient at identifying and resolving issues related to API integration, ensuring smooth operation of web services.</p>
                                </i>
                            </li>

                          

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info"> Proficient in understanding and interpreting API documentation to grasp the functionality, endpoints, request methods, and response formats.</p>
                                </i>
                            </li>


                        </ul>
                    </div>
                </div>
            </span>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Visual <br /> Development</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>

                <div className={toggleModal === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="description">I leverage a strong understanding of color theory, typography, and design principles to produce captivating layouts.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Proficient in graphic design software (eg., Figma)</p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Responsive design and mobile first approach.</p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Experience in developing brand consistency through design elements.</p>
                                </i>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon">
                                    <p className="services__modal-info">Ability to convey complex ideas or messages through visual elements.</p>
                                </i>
                            </li>


                        </ul>
                    </div>
                </div>
            </span>
        </div>
    </div>
   </section>
  )
}

export default Services