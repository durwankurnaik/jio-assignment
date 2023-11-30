"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="pt-8 md:pt-16" id="contact">
      <h1 className="mb-10 md:mb-16 text-center">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10">
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:gap-10"
          >
            <input type="text" name="Name" placeholder="Name" />
            <input type="text" name="Email" placeholder="Email" />
            <textarea name="Message" placeholder="Message" rows={5} />
            <button>Submit</button>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-center gap-5 md:gap-10">
          <h1>Wanna talk about tech?</h1>
          <h2>Just follow along with these links</h2>
          <div className="flex gap-10">
            <a href="https://github.com/durwankurnaik" target="_blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/durwankur-naik-58301b203/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/durwankur_naik/" target="_blank">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;