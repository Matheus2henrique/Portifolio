import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Coffee, Database, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const stats = [
    { number: '30+', label: 'Projetos' },
    { number: '3+', label: 'Anos Exp.' },
    { number: '100%', label: 'Dedicação' },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web modernas e responsivas.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e experiências memoráveis.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Otimização para velocidade e melhor experiência do usuário.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend',
      description: 'Desenvolvimento de APIs robustas e escaláveis.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'SEO',
      description: 'Otimização para mecanismos de busca e visibilidade online.',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Consultoria',
      description: 'Assessoria técnica e estratégica para seu projeto.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e paixão por desenvolvimento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-lg" />
              <div className="relative glass-card rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {personalInfo.about}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-primary font-medium">Email:</p>
                    <p className="text-gray-400">{personalInfo.email}</p>
                  </div><br></br>
                  <div>
                    <p className="text-primary font-medium">Localização:</p>
                    <p className="text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="space-y-4">
              {personalInfo.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-32 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Serviços</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
