import React from 'react';
import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMail,
  FiDownload,
} from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
const ThiagoCV = require('./assets/ThiagoCV.pdf');

const Main = () => {
  return (
    <main className="Main">
      <button>
        <a href="https://instagram.com/eutago">
          <FiInstagram size={20}></FiInstagram>
          Me siga no Insta
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/thiagoluiz21/">
          <FiLinkedin size={20}></FiLinkedin>
          Meu LinkedIn
        </a>
      </button>
      <button>
        <a href="https://github.com/eutago?tab=repositories">
          <FiGithub size={20}></FiGithub>
          Alguns projetos que já fiz
        </a>
      </button>
      <button>
        <a href="mailto:thiagoluix21@gmail.com">
          <FiMail size={20}></FiMail>
          Mande um E-mail
        </a>
      </button>
      <button>
        <a href="https://t.me/eutago">
          <FaTelegramPlane size={20}></FaTelegramPlane>
          Chama no Telegram
        </a>
      </button>
      <button>
        <a href={ThiagoCV} download>
          <FiDownload size={20}></FiDownload>
          Download CV
        </a>
      </button>
    </main>
  );
};

export default Main;
