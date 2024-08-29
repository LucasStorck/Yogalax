import logo from "../images/logo.png";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <div className="mt-20 py-10 px-4">
      <hr className="container mx-auto h-px my-8"></hr>
      <div className="container mx-auto grid grid-cols-2">
        <div className="flex items-center">
          <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <span className="text-2xl tracking-tight font-light">YOGALAX</span>
        </div>
        <div className="flex justify-end">
          <a className="flex space-x-4" href="http://">
            <Instagram
              className="hover:scale-110 duration-200"
              size={32}
              color="#f9a8d4"
            />
            <Linkedin
              className="hover:scale-110 duration-200"
              size={32}
              color="#f9a8d4"
            />
            <Mail
              className="hover:scale-110 duration-200"
              size={32}
              color="#f9a8d4"
            />
          </a>
        </div>
        <div className="flex space-x-2 mt-6">
          <MapPin size={28} color="#f9a8d4"></MapPin>
          <h1 className="text-lg text-slate-400">
            Rua Sem Nome, 000, Bairro - Cidade, Estado
          </h1>
        </div>
      </div>
      <h1 className="flex justify-center text-slate-400 mt-4">
        ©2021 Yogalax. All rights reserved.
      </h1>
      <h4 className="flex justify-center text-slate-400">Lucas Storck</h4>
    </div>
  );
}

export default Footer;
