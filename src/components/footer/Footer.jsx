import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
			<div className=" bg-cyan-600 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
				<h2
					data-aos="zoom-out"
					className="text-gray-900 font-bold text-5xl sm:text-3xl"
				>
					Let's Talk
				</h2>
				<div className=" flex items-center justify-center gap-8 sm:gap-5">
					<a
						data-aos="fade-up"
						data-aos-duration="1000"
						href="https://t.me/+541132160715"
						className="box font-medium text-white flex items-center justify-center flex-col"
					>
						<FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
						<p>Telegram</p>
					</a>
					<a
						data-aos="fade-up"
						data-aos-duration="1200"
						href="https://api.whatsapp.com/send/?phone=5491132160715&text=¡Hola!%20Me%20interesa%20tu%20perfil&type=phone_number&app_absent=0
            "
						className="box font-medium text-white  flex items-center justify-center flex-col"
					>
						<IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
						<p>WhatsApp</p>
					</a>
					<a
						data-aos="fade-up"
						data-aos-duration="1400"
						href="https://www.instagram.com/andreajlaurino/"
						className="box font-medium text-white  flex items-center justify-center flex-col"
					>
						<RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
						<p>Instagram</p>
					</a>
				</div>
				<div className="text-gray-300 sm:text-[12px]">
					| Copyright &copy; <span>2024 Dev Laurino Andrea </span> All rights
					reserved |
				</div>
			</div>
		</div>
	);
};

export default Footer;
