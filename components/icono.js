import { FaGlobe, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Icono() {
  return (
    <div className="flex justify-center space-x-16">
      <a href="https://www.mateobravo.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300">
        <FaGlobe className="text-5xl" />
      </a>
      <a href="https://www.facebook.com/MateoBravoPersonalTraining" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:text-orange-300">
        <FaFacebook className="text-5xl" />
      </a>
      <a href="https://www.youtube.com/@MateoBravoPersonalTraining" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:text-orange-300">
        <FaYoutube className="text-5xl" />
      </a>
      <a href="https://www.instagram.com/flatfootmatt" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:text-orange-300">
        <FaInstagram className="text-5xl" />
      </a>
    </div>
  );
}
