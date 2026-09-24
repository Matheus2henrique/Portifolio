import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Swal from 'sweetalert2';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada!',
        text: 'Obrigado pelo contato. Retornarei em breve.',
        confirmButtonColor: '#6C63FF',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Telefone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Localização',
      value: personalInfo.location,
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, link: personalInfo.github, label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, link: personalInfo.linkedin, label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vamos trabalhar juntos? Entre em contato!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Vamos Conversar</h3>
            <p className="text-gray-400 mb-8">
              Estou sempre aberto a discutir novos projetos, ideias criativas
              ou oportunidades de fazer parte da sua visão.
            </p>

            <div className="space-y-6 mb-8 w-fit mx-auto text-left">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 shrink-0 p-3 bg-primary/20 rounded-full text-primary flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full text-gray-400 hover:text-white hover:border-primary/50 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
