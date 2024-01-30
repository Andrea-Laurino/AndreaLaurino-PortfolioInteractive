import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import resumePDF from '../../assets/Resume.pdf';

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
							Hi, I'm Andrea Laurino
						</h2>
						<TypeAnimation
							data-aos="fade-up"
							sequence={[
								'Web Developer',
								2000,
								'Full Stack Developer',
								2000,
								'',
							]}
							speed={30}
							wrapper="h2"
							repeat={Infinity}
							className="text-sky-500 text-4xl font-bold sm:text-3xl"
						/>
						<p className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]">
							I'm Andrea, a healthcare professional turned Front-End Developer.
							Currently in training, seeking opportunities in Front-End or
							Testing. Focused on applying my skills and exploring frameworks.
							Eager to contribute to digital solutions in a dynamic team.
						</p>
					</div>
					<div data-aos="fade-up" className="buttons flex gap-5">
						<a
							href="https://www.linkedin.com/in/andrea-laurino/"
							className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
						>
							<span> Hire Me</span>
						</a>
						<a
							href={resumePDF}
							className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-sky-500"
							download
						>
							<div className="flex items-center gap-1">
								Resume <FiDownload />
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
							src="https://i.postimg.cc/9MSZTmR4/imageedit-9-6472384627-removebg-preview.png"
							alt="mine"
						/>
						{/* //circulo interactivo full stack 
						<div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
							<div
								data-aos="zoom-in"
								data-aos-duration="1000"
								className=" relative cursor-pointer"
							>
								<img
									className=" w-[135px] md:w-[90px] circle-text"
									src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
									alt=""
								/>
								<FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
