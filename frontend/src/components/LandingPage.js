import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Star,
  Menu,
  X,
  Phone,
  Calendar
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const portfolioImages = [
    {
      url: "https://i.imgur.com/zUjfMHi.jpg",
      title: "Noiva Radiante",
      category: "Casamento"
    },
    {
      url: "https://i.imgur.com/rSu4rCs.jpg",
      title: "Elegância Tradicional",
      category: "Casamento"
    },
    {
      url: "https://i.imgur.com/xx2DKqI.jpg",
      title: "Glamour Noturno",
      category: "Festa"
    },
    {
      url: "https://i.imgur.com/vAU1QO8.jpg",
      title: "Sofisticação",
      category: "Festa"
    },
    {
      url: "https://i.imgur.com/65CHaFD.jpg",
      title: "Beleza Natural",
      category: "Dia a Dia"
    },
    {
      url: "https://i.imgur.com/pBYUIIU.jpg",
      title: "Frescor Natural",
      category: "Dia a Dia"
    }
  ];

  const testimonials = [
    {
      name: "Ana Carolina",
      text: "Lorena fez minha maquiagem de casamento e foi simplesmente perfeita! Ela capturou exatamente o que eu queria.",
      rating: 5,
      image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg"
    },
    {
      name: "Marina Silva",
      text: "Profissional incrível! Minha maquiagem durou a festa toda e recebi muitos elogios. Super recomendo!",
      rating: 5,
      image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg"
    },
    {
      name: "Beatriz Santos",
      text: "Lorena tem um talento único para realçar a beleza natural. Fiquei apaixonada pelo resultado!",
      rating: 5,
      image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent"
            >
              Lorena Garcia Beauty
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Início', 'Portfólio', 'Sobre', 'Contato'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i').replace('ó', 'o'))}
                  className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {['Início', 'Portfólio', 'Sobre', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i').replace('ó', 'o'))}
                  className="block w-full text-left py-2 text-gray-700 hover:text-rose-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.imgur.com/kTQjfoR.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transforme sua{' '}
            <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
              beleza
            </span>
            <br />
            com Lorena Garcia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            Especialista em maquiagem e penteados profissionais em Curitiba.
            Realce sua beleza natural com técnicas exclusivas e produtos de alta qualidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => window.open('https://wa.me/554196987908', '_blank')}
              className="group bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Agende sua Maquiagem
            </button>

            <button
              onClick={() => window.open('https://instagram.com/lorenagarciabeauty', '_blank')}
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Instagram size={20} />
              Ver Portfólio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Veja meu trabalho e{' '}
              <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                inspire-se!
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Cada maquiagem é única, criada especialmente para realçar sua beleza natural
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                  <p className="text-rose-300">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => window.open('https://instagram.com/lorenagarciabeauty', '_blank')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Instagram size={20} />
              Ver mais no Instagram
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que minhas clientes{' '}
              <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                dizem
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de clientes satisfeitas
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">Cliente satisfeita</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://i.imgur.com/OwCsWCR.jpg"
                alt="Lorena Garcia"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Sobre{' '}
                <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                  Lorena Garcia
                </span>
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Há mais de 8 anos dedicada à arte da maquiagem e penteados, Lorena Garcia é uma das
                  profissionais mais respeitadas de Curitiba. Formada em Visagismo e
                  Maquiagem Profissional, ela se especializou em criar looks únicos
                  que realçam a beleza natural de cada cliente.
                </p>
                <p>
                  Sua paixão pela maquiagem e penteados começou ainda na adolescência, e desde então
                  se aperfeiçoou em técnicas nacionais e internacionais. Lorena acredita
                  que cada rosto tem sua própria história e trabalha para contar essa
                  história através da maquiagem e penteados exclusivos.
                </p>
                <p>
                  Especialista em maquiagem e penteados para noivas, festas e eventos especiais,
                  Lorena utiliza apenas produtos de alta qualidade e técnicas avançadas
                  para garantir que sua maquiagem e penteado permaneçam perfeitos durante todo o evento.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">500+</div>
                  <div className="text-gray-600">Clientes Satisfeitas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">8+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vamos criar algo{' '}
              <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                incrível?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Entre em contato e vamos agendar sua transformação
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="https://wa.me/554196987908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="text-white mb-4" size={32} />
                  <h3 className="text-white font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-green-100">Agende rapidamente</p>
                </a>

                <a
                  href="https://instagram.com/lorenagarciabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="text-white mb-4" size={32} />
                  <h3 className="text-white font-semibold text-lg mb-2">Instagram</h3>
                  <p className="text-pink-100">@lorenagarciabeauty</p>
                </a>

                <a
                  href="mailto:contato@lorengarcia.com"
                  className="group bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="text-white mb-4" size={32} />
                  <h3 className="text-white font-semibold text-lg mb-2">E-mail</h3>
                  <p className="text-blue-100">contato@lorengarcia.com</p>
                </a>

                <div className="group bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-2xl">
                  <MapPin className="text-white mb-4" size={32} />
                  <h3 className="text-white font-semibold text-lg mb-2">Localização</h3>
                  <p className="text-gray-300">Curitiba, PR</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Sua mensagem"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-rose-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent mb-4">
                Lorena Garcia Beauty
              </h3>
              <p className="text-gray-400">
                Transformando beleza em arte há mais de 8 anos em Curitiba.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Maquiagem para Noivas</li>
                <li>Penteados para Noivas</li>
                <li>Maquiagem para Festas</li>
                <li>Maquiagem Social</li>
                <li>Cursos de Automaquiagem</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 WhatsApp: (41) 99698-7908</p>
                <p>📧 contato@lorengarcia.com</p>
                <p>📍 Curitiba, PR</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Lorena Garcia Beauty. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://instagram.com/lorenagarciabeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/554196987908"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;