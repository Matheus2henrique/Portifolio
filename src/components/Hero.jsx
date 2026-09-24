import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-50 blur-xl" />
              <div className="absolute inset-2 bg-dark rounded-full animate-morph overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/144165648?v=4"
                  alt="Matheus Henrique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4"
          >
            Olá, eu sou
          </motion.p>

          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-6"
          >
            <TypeAnimation
              sequence={[
                'Desenvolvedor Full Stack',
                2000,
                'UI/UX Designer',
                2000,
                'Freelancer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium text-white shadow-lg glow-hover transition-all duration-300"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 border border-primary/50 rounded-full font-medium text-white hover:bg-primary/10 transition-all duration-300"
            >
              Fale Comigo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`${import.meta.env.BASE_URL}Currículo_MatheusHenrique.pdf`}
              download="Currículo_MatheusHenrique.pdf"
              className="px-8 py-3 border border-gray-600 rounded-full font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Currículo
            </motion.a>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-white transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-white transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={24} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
