import React from "react";

const Education = () => {
    return (
        <div id="educación" className=" container m-auto   mt-16">
            {/* heading */}
            <div data-aos="fade-up" className="relative mb-5">
                <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
                    Educación y Certificaciones 
                </h3>
                <span className="h-[1.1px] right-0 absolute  w-full bg-gray-300 block"></span>
            </div>
            <div data-aos="fade-up" className="left flex-1 w-full">
                <p className=" text-gray-700 font-medium w-[100%]">
                    Aquí están mi Educación y Certificaciones.
                </p>
            </div>
            {/* card*/}
            <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
                <div className="left flex-1 flex justify-center">
                <fieldset
                        data-aos="zoom-in"
                        className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
                    >
                        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-500">
                            Education
                        </legend>
                        <div className=" relative">
                            {/* design */}
                            <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                            </div>
                            {/* design */}
                            <div className=" flex flex-col gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                    QA Automation
                                </h1>
                                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                    InstitutoWeb
                                </span>
                                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                    Octubre 2024 - Diciembre 2024
                                </span>
                                <p className=" text-[.9rem] text-justify text-gray-500">
                                    El curso de QA Automation con Cypress y
                                    JavaScript me permitió aprender a
                                    automatizar pruebas de aplicaciones web.
                                    Cubrí conceptos clave como la instalación y
                                    configuración de Cypress, pruebas de E2E y
                                    API. Aprendí a escribir pruebas efectivas,
                                    escalables y fáciles de mantener, mejorando
                                    la calidad y eficiencia del proceso de
                                    testing.
                                </p>
                                <a
                                    href="https://i.postimg.cc/xjy5z7Th/Certificado-Automation.png"
                                    className="w-40 ml-[50%] translate-x-[-50%] text-center bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
                                >
                                    <span>Certificado</span>
                                </a>
                            </div>
                            <div className=" flex flex-col gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                    Testing QA Manual
                                </h1>
                                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                    Coderhouse
                                </span>
                                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                    Enero 2024 - Marzo 2024
                                </span>
                                <p className=" text-[.9rem] text-justify text-gray-500">
                                    Como tester QA manual, soy responsable de
                                    realizar pruebas de software exhaustivas
                                    para identificar y notificar defectos.
                                    Realizo evaluaciones detalladas, verifico la
                                    funcionalidad y la facilidad de uso, y me
                                    aseguro de que el software cumpla con los
                                    estándares de calidad antes de su
                                    lanzamiento.
                                </p>
                                <a
                                    href="https://i.postimg.cc/MZ0T8kzs/65f347275e329c35748758ac.png"
                                    className="w-40 ml-[50%] translate-x-[-50%] text-center bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
                                >
                                    <span>Certificado</span>
                                </a>
                            </div>
                            <div className=" flex flex-col gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                    Carrera Full Stack Development (MERN).
                                </h1>
                                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                    Coderhouse
                                </span>
                                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                    Agosto 2022 - Enero 2024
                                </span>
                                <p className=" text-[.9rem] text-justify text-gray-500">
                                    Completé la carrera de desarrollo Full
                                    Stack, con cursos enfocados en desarrollo
                                    web, JavaScript, React.js y programación
                                    backend (MERN). Adquirí habilidades
                                    completas para crear aplicaciones web
                                    dinámicas y funcionales.
                                </p>
                                <a
                                    href="https://i.postimg.cc/zf7KxLVr/certificado-Full-Stack.jpg"
                                    className="w-40 ml-[50%] translate-x-[-50%] text-center bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
                                >
                                    <span>Certificado</span>
                                </a>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="left flex-1 flex justify-center">
                    <fieldset
                        data-aos="zoom-in"
                        className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
                    >
                        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-500">
                            Certificaciones
                        </legend>
                        <div className=" relative">
                            {/* design */}
                            <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                            </div>
                            {/* design */}
                            <div className=" flex flex-col  border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                    Fundamental Testing Accreditation 
                                </h1>
                                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                    AICS® - Asociación Internacional de Calidad de Software
                                </span>
                                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                    Agosto 2024 
                                </span>
                                <a
                                    href="https://i.postimg.cc/sgdLtqHf/Certificate-AICS.png"
                                    className="w-40 ml-[50%] translate-x-[-50%] text-center bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
                                >
                                    <span>Certificado</span>
                                </a>
                            </div>
                            <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                            </div>
                            {/* design */}
                            <div className=" flex flex-col  border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                Administración Linux
                                </h1>
                                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                    EducaciónIT - LinkedIn 
                                </span>
                                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                    Noviembre 2022 
                                </span>
                                <a
                                    href="https://drive.google.com/file/d/13ZJQa5OmwGwRFpl6aUgoByYCwOEoogs-/view?usp=sharing"
                                    className="w-40 ml-[50%] translate-x-[-50%] text-center bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
                                >
                                    <span>Certificado</span>
                                </a>                                
                            </div>
                            <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                            </div>
                            {/* design */}
                            <div className=" flex flex-col  border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                Base de Datos MysQL
                                </h1>
                                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                    Edutin
                                </span>
                                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                    Octubre 2022 
                                </span>
                                
                            </div>
                            </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Education;
