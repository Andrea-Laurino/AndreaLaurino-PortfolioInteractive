import React from 'react';
import ProgressBar from '../../chip/ProgressBar';
import SkillBox from '../../chip/SkillBox';
import { FaGitAlt, FaReact, FaDatabase, FaClipboardList } from 'react-icons/fa';
import { SiJavascript, SiCypress, SiPostman, SiSwagger, SiJira } from 'react-icons/si';

const Skills = ({ darkMode }) => {
	return (
		<div id="skills">
			<div className="container m-auto mt-16">
				{/* heading */}
				<div data-aos="fade-up" className="relative mb-5">
					<h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
						Mis Skills
					</h3>
					<span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
				</div>
				{/* content*/}
				<div className="flex md:flex-col">
					<div className="left flex-1 w-full">
						<h4 className="text-2xl font-black text-gray-400 sm:text-xl">
							🔹 Habilidades Tecnicas (Hard Skills)
						</h4>
						{/* left box */}
						<div data-aos="zoom-in" className="progress flex items-center h-[100%] justify-end md:justify-center">
							<div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
								<ProgressBar logo={<SiJavascript />} name={'JavaScript'} value={80} />
								<ProgressBar logo={<SiCypress />} name={'Cypress'} value={70} />
								<ProgressBar logo={<SiPostman />} name={'Postman'} value={95} />
								<ProgressBar logo={<SiSwagger />} name={'Swagger'} value={90} />
								<ProgressBar logo={<FaGitAlt />} name={'Git & GitHub'} value={80} />
							</div>
						</div>
					</div>
					{/* right box */}
					<div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
						<div className="first2 flex flex-col gap-10">
							<SkillBox logo={<SiJira />} black={'white'} white={'black'} skill={'Jira'} />
							<SkillBox logo={<FaClipboardList />} black={'black'} white={'white'} skill={'TestLink'} />
						</div>
						<div className="last2 flex flex-col gap-10">
							<SkillBox logo={<FaReact />} black={'black'} white={'white'} skill={'React Js'} />
							<SkillBox logo={<FaDatabase />} black={'white'} white={'black'} skill={'Bases de Datos'} />
						</div>
					</div>
				</div>
				{/* Soft Skills */}
				<div className="mt-10">
					<h4 className="text-2xl font-black text-gray-400 sm:text-xl">
						🔹 Habilidades Blandas (Soft Skills)
					</h4>
					<ul className="list-disc list-inside text-gray-700 mt-4">
						<li>✅ Atención al detalle: Capacidad para detectar errores y problemas que pueden pasar desapercibidos.</li>
						<li>✅ Pensamiento crítico: Análisis de requisitos y evaluación de escenarios de prueba para asegurar la calidad.</li>
						<li>✅ Resolución de problemas: Enfoque proactivo en la identificación y solución de incidencias en el software.</li>
						<li>✅ Trabajo en equipo: Colaboración efectiva con desarrolladores y otros testers para mejorar el producto.</li>
						<li>✅ Comunicación asertiva: Reporte claro y detallado de errores, facilitando la resolución de incidencias.</li>
						<li>✅ Aprendizaje continuo: Interés en la capacitación y actualización constante en nuevas herramientas y metodologías.</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
