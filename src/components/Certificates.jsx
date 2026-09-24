import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const resolveImage = (image) =>
  !image ? '' : /^https?:\/\//.test(image) ? image : `${import.meta.env.BASE_URL}${image}`;

const isPdf = (cert) => /\.pdf$/i.test(cert.image || '');

const CertImage = ({ cert, className, field = 'thumb' }) => {
  const [failed, setFailed] = useState(false);
  const src = resolveImage(cert[field]);

  if (!src || failed) {
    return (
      <div
        className={`${className} flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/30 via-dark to-secondary/30`}
      >
        <Award className="w-10 h-10 text-primary" />
        {isPdf(cert) && (
          <span className="px-3 py-1 bg-primary/30 rounded-full text-xs font-semibold tracking-widest">
            PDF
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={cert.title}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  if (certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Certificados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certificações e conquistas que validam minha experiência
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-md mx-auto">
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <div className="relative h-48 overflow-hidden bg-white/5">
                        <CertImage
                          cert={cert}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 px-2 py-1 bg-dark/70 backdrop-blur-sm rounded text-[10px] font-semibold tracking-widest text-primary">
                          PDF
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        {cert.date && <p className="text-gray-500 text-sm mt-1">{cert.date}</p>}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 glass-card rounded-full text-white hover:bg-primary/20 transition-colors hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 glass-card rounded-full text-white hover:bg-primary/20 transition-colors hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl max-w-3xl w-full overflow-hidden"
            >
              <div className="relative bg-black/40">
                {isPdf(selectedCert) ? (
                  <iframe
                    title={selectedCert.title}
                    src={resolveImage(selectedCert.image)}
                    className="w-full h-[65vh] bg-black"
                  />
                ) : (
                  <CertImage
                    cert={selectedCert}
                    className="w-full max-h-[65vh] object-contain"
                  />
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-dark/50 rounded-full text-white hover:bg-dark"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                    <p className="text-gray-400">{selectedCert.issuer}</p>
                  </div>
                </div>
                {selectedCert.date && (
                  <p className="text-gray-500">Obtido em {selectedCert.date}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
