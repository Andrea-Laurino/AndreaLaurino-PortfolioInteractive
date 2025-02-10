import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
    const reversedData = [...data].reverse();

    return (
        <>
            {reversedData.map((project) => {
                return (
                    <div
                        data-aos="zoom-in"
                        key={project.id}
                        className="flex flex-col justify-center items-center gap-4"
                    >
                        <POPUP className="img-content relative">
                            <div className="h-[280px] w-[350px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                                />
                            </div>

                            <div className="popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4">
                                <p className="text-gray-900 text-base leading-[1.2] text-start  w-[90%] h-40 overflow-y-auto">
                                    {project.desc}
                                </p>

                                <div className="flex items-center justify-center gap-4">
                                    <Link
                                        to={project.link}
                                        target="_blank"
                                        className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                                    >
                                        <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                                        <p className="text-black">Demo</p>
                                    </Link>
                                    <br className="w-[2px] bg-white" />
                                    {/* <Link
                                        to={project.git}
                                        target="_blank"
                                        className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                                    >
                                        <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                                        <p className="text-black">Code</p>
                                    </Link> */}
                                </div>
                            </div>
                        </POPUP>

                        <p className="text-gray-800 text-xl font-medium sm:text-lg">
                            {project.title}
                        </p>

                        {/* Enlaces a la documentación fuera de la card */}
                        <div className="mt-4 text-gray-700 w-[80%] mx-auto">
                            <h4 className="font-semibold">Documentación:</h4>
                            <ul>
                                {project.documents.map((doc, index) => (
                                    <li key={index} className="mt-1">
                                        <a
                                            href={doc.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black hover:underline"
                                        >
                                            {doc.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default WorkCard;

const POPUP = styled.div`
    position: relative;
    img {
        &:hover {
            transform: scaleX(2);
        }
    }
    .popup {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        margin: auto;
        transition: 0.5s ease;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .icon {
        color: #fff !important;
    }
    &:hover .popup {
        opacity: 1;
        color: #fff;
    }
`;
