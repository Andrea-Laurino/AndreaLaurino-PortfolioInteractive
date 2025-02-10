import React from "react";

const Resume = () => {
    return (
        <div id="experiencia" className=" container m-auto   mt-16">
            {/* heading */}
            <div data-aos="fade-up" className="relative mb-5">
                <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
                    Experiencia Laboral
                </h3>
                <span className="h-[1.1px] right-0 absolute  w-full bg-gray-300 block"></span>
            </div>
            <div data-aos="fade-up" className="left flex-1 w-full">
                <p className=" text-gray-700 font-medium w-[100%]">
                A continuación, encontrarás mis experiencias profesionales más recientes, donde me he desempeñado como Tester QA Manual en diversos proyectos, realizando pruebas de API con Postman, documentación de casos de prueba y colaborando estrechamente con equipos de desarrollo.
                </p>
            </div>

            <div className="right flex-1 flex items-center justify-center">
                <fieldset
                    data-aos="zoom-in"
                    className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
                >
                    <div className=" relative">
                        {/* design */}
                        <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                            <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                            <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                            <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                        </div>
                        {/* design */}{" "}
                        <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                Software QA Leader
                            </h1>
                            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                Igrowker - Madrid, España
                            </span>
                            <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                Septiembre 2024 - Noviembre 2024
                            </span>
                            <p className="text-[.9rem] text-justify break-words text-gray-500">
                                Responsable del equipo de QA, liderando la planificación, gestión y supervisión del proceso de calidad. Logros principales:
                                <ul className="list-disc pl-5 mt-2">
                                    <li>
                                        Implementé planes de prueba y criterios de aceptación detallados, asegurando más del 95% de cobertura de los requerimientos funcionales y técnicos de las aplicaciones web.
                                    </li>
                                    <li>
                                        Optimicé la detección de defectos en APIs backend con más de 60 pruebas, incluyendo validaciones de integración, regresión y rendimiento, reduciendo un 30% los errores en producción.
                                    </li>
                                    <li>
                                        Facilité la integración entre equipos mediante comunicación constante con los líderes de cada sector, promoviendo la colaboración y alineando objetivos técnicos y funcionales.
                                    </li>
                                    <li>
                                        Diseñé estrategias de pruebas automatizadas en Postman, acelerando el ciclo de entrega de software.
                                    </li>
                                    <li>
                                        Mejoré la colaboración entre equipos de diseño y desarrollo, logrando un 20% de mejora en los tiempos de resolución de defectos.
                                    </li>
                                    <li>
                                        Desarrollé documentación técnica y funcional precisa, recopilando requerimientos clave y creando guías prácticas que aumentaron la eficiencia del equipo.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                Software QA Tester
                            </h1>
                            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                Igrowker - Madrid, España
                            </span>
                            <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                Julio 2024, Septiembre 2024
                            </span>
                            <p className="text-[.9rem] text-justify break-words text-gray-500">
                                Responsable de garantizar la calidad y funcionalidad de aplicaciones web y servicios backend mediante procesos eficientes. Logros principales:
                                <ul className="list-disc pl-5 mt-2">
                                    <li>
                                        Diseñé pruebas exploratorias y exhaustivas en frontend y backend, asegurando una cobertura superior al 95% del software entregado.
                                    </li>
                                    <li>
                                        Elaboré y gestioné documentación técnica detallada con casos de prueba clave..
                                    </li>
                                    <li>
                                        Implementé una estrategia de testing ágil, mejorando la detección de errores y acelerando la entrega del producto en
                                        un 20%.
                                    </li>
                                    <li>
                                        Coordiné la planificación y ejecución de pruebas, cumpliendo con los hitos del proyecto y asegurando la entrega puntual
                                        del producto final.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                Software QA Tester
                            </h1>
                            <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                                No Country - Bs As, Argentina
                            </span>
                            <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                                Mayo 2024 - Junio 2024
                            </span>
                            <p className="text-[.9rem] text-justify break-words text-gray-500">
                                Aseguré la calidad de aplicaciones web y servicios backend mediante metodologías planificadas. Logros principales:
                                <ul className="list-disc pl-5 mt-2">
                                    <li>
                                        Elaboré documentación técnica y funcional, optimizando la eficiencia del equipo.
                                    </li>
                                    <li>
                                        Diseñé y ejecuté casos de prueba para validar funcionalidades clave como búsqueda, reserva y gestión de espacios de coworking.
                                    </li>
                                    <li>
                                        Realicé pruebas exploratorias, identificando defectos y mejorando la experiencia del usuario.
                                    </li>
                                    <li>
                                        Colaboré con diseño y desarrollo para corregir defectos, manteniendo el rendimiento de la plataforma.
                                    </li>
                                    <li>
                                        Gestioné el ciclo completo de pruebas, asegurando la cobertura de funcionalidades críticas.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default Resume;
