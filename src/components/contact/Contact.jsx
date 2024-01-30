import React, { useRef } from 'react';
//import { BsArrowRight } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '@sweetalert2/theme-material-ui/material-ui.scss';

const serviceID = 'service_65s30z8';
const templateID = 'template_9819r49';
const publicKey = 'ncZucwaJNs9CbMSD7';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
			(result) => {
				//console.log(result.text);
				Swal.fire({
					title: '¡Gracias!',
					text: 'Tu mensaje ha sido enviado. Te contactaré pronto.',
					icon: 'success',
					confirmButtonText: 'Ok',

					theme: 'material-ui',
				});
				form.current.reset();
			},
			(error) => {
				console.log(error.text);
				Swal.fire('Inténtalo de nuevo', 'Error');
			}
		);
	};

	return (
		<div id="contact" className="container m-auto mt-16">
			{/* heading */}
			<div className="relative mb-5">
				<h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
					Contact
				</h3>
				<span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
			</div>

			{/* card*/}
			<div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
				<div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
					<div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
						<div data-aos="zoom-in">
							<h1 className="text-5xl font-bold sm:text-3xl">
								Elevate your website{' '}
							</h1>
							<h3 className="text-xl sm:text-lg">
								with a stunning design. Simply submit a request!
							</h3>
						</div>
					</div>
					{/* <div className=" flex p-5 items-center justify-center ">
						<button
							data-aos="zoom-in"
							className=" text-blue-600 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
						>
							<BsArrowRight className=" md:rotate-90" />
						</button>
					</div> */}
				</div>
				<div className="right flex-1">
					<form
						data-aos="zoom-in"
						className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
						ref={form}
						onSubmit={sendEmail}
					>
						<input
							className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
							type="email"
							placeholder="e.g. example@email.com"
							name="user_email"
							required
						/>
						<input
							className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
							type="text"
							placeholder="e.g. Matias Perez"
							name="user_name"
							required
						/>
						<textarea
							className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
							rows="4"
							cols="50"
							placeholder="Write your message"
							name="message"
							id=""
							required
						/>
						<button
							className="bg-sky-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
							type="submit"
							value="Send"
						>
							<span>Send</span>
							<RiSendPlaneFill />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
