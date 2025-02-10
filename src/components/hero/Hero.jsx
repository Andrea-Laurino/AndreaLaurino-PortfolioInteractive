import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import resumePDF from '../../assets/AndreaJLaurino-TesterQA-cvA.pdf';

const Hero = () => {
	return (
		<div
			id="home"
			className={` bg-gradient-to-tl from-emerald-200 to-cyan-200 `}
		>
			<div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
				<div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
					<div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
						<h2
							data-aos="fade-up"
							className=" text-5xl font-bold sm:text-[2rem]"
						>
							Hola, Soy Andrea 
						</h2>
						<TypeAnimation
							data-aos="fade-up"
							sequence={['QA Manual ✍🏼', 2000, 'QA Automation 🦾', 2000, '']}
							speed={30}
							wrapper="h2"
							repeat={Infinity}
							className="text-sky-500 text-4xl font-bold sm:text-3xl"
						/>
						<p className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]">
						Con una gran pasión por la tecnología y la innovación, decidí dar el salto al mundo IT como Tester QA. Mi trayectoria incluye tanto pruebas manuales como automatizadas utilizando Cypress y JavaScript. Gracias a mi enfoque en asegurar la calidad del software y en la mejora constante, junto con mi experiencia en desarrollo Full Stack (MERN), tengo una comprensión profunda de los procesos de programación. Esto me permite ofrecer un valor agregado al identificar y prevenir posibles errores de manera efectiva.
						</p>
					</div>
					<div data-aos="fade-up" className="buttons flex  gap-5">
						<a
							href={resumePDF}
							className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-sky-500"
							download
						>
							<div className="flex items-center ">
								Currículum <FiDownload />
							</div>
						</a>
					</div>
					<div className="icons flex mt-5">
						<ul
							data-aos="fade-up"
							data-aos-duration="1500"
							className=" flex gap-5"
						>
							<li>
								<a href="https://github.com/Andrea-Laurino">
									{' '}
									<AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{' '}
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/andrea-laurino/">
									{' '}
									<FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{' '}
								</a>
							</li>
							<li>
								<a href="https://t.me/+541132160715">
									{' '}
									<FaTelegram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{' '}
								</a>
							</li>
							<li>
								<a href="https://api.whatsapp.com/send/?phone=5491132160715&text=¡Hola!%20Me%20interesa%20tu%20perfil&type=phone_number&app_absent=0">
									{' '}
									<FaWhatsapp className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{' '}
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
					<div className="relative h-[88%] w-fit flex items-center sm:items-end">
						<img
							data-aos="fade-up"
							className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
							src="https://i.postimg.cc/Vk6bqYVC/Professional-and-Elegant-Depop-Profile-Picture-removebg-preview.png"
							alt="Foto de Andrea Laurino"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
