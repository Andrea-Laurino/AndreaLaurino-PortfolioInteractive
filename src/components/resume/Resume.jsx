import React from 'react';

const Resume = () => {
	return (
		<div id="resume" className=" container m-auto   mt-16">
			{/* heading */}
			<div data-aos="fade-up" className="relative mb-5">
				<h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
					Resume
				</h3>
				<span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
			</div>
			<div data-aos="fade-up" className="left flex-1 w-full">
				<p className=" text-gray-700 font-medium w-[100%]">
					Here are my experiences and qualifications.
				</p>
			</div>
			{/* card*/}
			<div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
				<div className="left flex-1 flex items-center justify-center">
					<fieldset
						data-aos="zoom-in"
						className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
					>
						<legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-500">
							Experience
						</legend>
						<div className=" relative">
							{/* design */}
							<div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
								<div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
								<div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
								<div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
							</div>
							{/* design */}
							<div className=" flex flex-col gap-1 sm:gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
								<h1 className="text-[1.4rem] font-semibold sm:text-xl">
									Web Developer
								</h1>
								<span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
									Andrea Laurino
								</span>
								<span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
									April 2023 - Present
								</span>
								<p className=" text-[.9rem] text-justify break-words text-gray-500">
									Highly skilled web developer with expertise in HTML, CSS,
									JavaScript, and frameworks such as React.js, Bootstrap,
									Tailwind, MUI. Experienced in MongoDB, Firebase, MySQL
									databases, and proficient in creating RESTful APIs using
									Handlebars and Nest.js.
								</p>
							</div>
							<div className=" flex flex-col gap-1 sm:gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
								<h1 className="text-[1.4rem] font-semibold sm:text-xl">
									Administrative
								</h1>
								<span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
									Consultorio Odontologico Vernisse
								</span>
								<span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
									January 2020 - June 2022
								</span>
								<p className=" text-[.9rem] text-justify break-words text-gray-500">
									As an administrative and dental assistant, I handle reception
									duties, schedule appointments, provide support to the dentist,
									and manage records.
								</p>
							</div>
						</div>
					</fieldset>
				</div>
				<div className="right flex-1 flex items-center justify-center">
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
									Full Stack Development Career
								</h1>
								<span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
									Coderhouse
								</span>
								<span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
									August 2022 - January 2024
								</span>
								<p className=" text-[.9rem] text-justify text-gray-500">
									Full Stack Development Career with courses covering web
									development, JavaScript, React.js, backend programming (MERN).
									Gained comprehensive skills to build dynamic web applications.
								</p>
								<a
									href="https://www.coderhouse.com/certificados/65a03882c47b9e49b79a8e65?lang=en"
									className="w-40 text-center bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
								>
									<span>Certificate</span>
								</a>
								{/* <button className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-500">
								Certificate 
								</button> */}
							</div>
							<div className=" flex flex-col gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
								<h1 className="text-[1.4rem] font-semibold sm:text-xl">
									Testing QA Manual
								</h1>
								<span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
									Coderhouse
								</span>
								<span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
									January 2024 - March 2024
								</span>
								<p className=" text-[.9rem] text-justify text-gray-500">
									As a manual QA tester, I am responsible for conducting
									comprehensive software testing to identify and report defects.
									I perform detailed assessments, verify functionality,
									usability, and ensure the software meets quality standards
									before release.
								</p>
								<a
									href=""
									className="w-40 text-center bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
								>
									<span>Certificate</span>
								</a>
								{/* <button className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-500">
								Certificate 
								</button> */}
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	);
};

export default Resume;
