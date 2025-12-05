"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import Reviews from './Reviews';

function Icon({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <span className={className} aria-hidden>{children}</span>;
}

function StarIcon({ filled = false, className = '' }: { filled?: boolean; className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill={filled ? '#B56533' : 'none'} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 17.3l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.63 3 9.24l4.46 4.76L5.82 21z" stroke={filled ? 'none' : '#DAD7CD'} strokeWidth="0" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="6" width="18" height="2" rx="1" fill="#A3B18A" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="#A3B18A" />
      <rect x="3" y="16" width="18" height="2" rx="1" fill="#A3B18A" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 6L18 18M6 18L18 6" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 21c6-8 12-12 18-18" stroke="#A3B18A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 3c-4 4-8 6-12 8" stroke="#B56533" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" fill="#B56533" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" fill="#A3B18A" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="9" cy="8" r="3" fill="#A3B18A" />
      <path d="M2 20c1-4 6-6 9-6s8 2 9 6" fill="#B56533" />
    </svg>
  );
}

export default function ProximaCare() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { title: 'Massages thérapeutiques', description: 'Soins personnalisés pour soulager tensions et douleurs', image: encodeURI('/image 2.jpeg') },
    { title: 'Rééducation fonctionnelle', description: 'Accompagnement pour retrouver mobilité et équilibre', image: encodeURI('/image 3.jpeg') },
    { title: 'Relaxation et bien-être', description: 'Techniques douces pour harmoniser corps et esprit', image: '/image 4.jpg' },
    { title: 'Accompagnement personnalisé', description: 'Suivi individualisé adapté à vos besoins', image: '/image5.jpeg' }
  ];

  const values = [
    { title: 'Professionnalisme', description: 'Excellence et expertise dans chaque soin', icon: <IconShield /> },
    { title: 'Bienveillance', description: 'Écoute attentive et accompagnement humain', icon: <IconHeart /> },
    { title: 'Confidentialité', description: 'Respect absolu de votre intimité', icon: <IconShield /> },
    { title: 'Équilibre & harmonie', description: 'Restauration de votre bien-être global', icon: <IconLeaf /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out 0.2s both; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out; }
        .btn-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(181, 101, 51, 0.25); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
      `}</style>
      <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md shadow-md z-50 border-b border-[rgba(163,177,138,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#accueil" onClick={() => scrollToSection('accueil')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="h-12 w-12 overflow-hidden rounded-lg bg-gradient-to-br from-[#A3B18A] to-[#B56533] p-1 shadow-md">
                <Logo width={48} height={48} className="h-full w-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-semibold tracking-tight" style={{ color: '#A3B18A' }}>Proxima Care</div>
                <div className="text-xs font-light" style={{ color: '#B56533' }}>Excellence en soin</div>
              </div>
            </a>

            <nav className="hidden md:flex space-x-8 text-sm">
              {['accueil', 'services', 'approche', 'valeurs', 'vision', 'avis', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="capitalize hover:opacity-70 transition-opacity" style={{ color: '#A3B18A' }}>
                  {item}
                </button>
              ))}
            </nav>

            <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite prendre rendez-vous avec Proxima Care')} target="_blank" rel="noreferrer" className="hidden md:inline-block px-6 py-2.5 text-sm font-semibold text-white rounded-full btn-hover shadow-md" style={{ backgroundColor: '#B56533' }}>
              Prendre rendez-vous
            </a>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(v => !v)} aria-label="Menu" style={{ color: '#A3B18A' }}>
              {mobileMenuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {['accueil', 'services', 'approche', 'valeurs', 'vision', 'avis', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="capitalize text-left" style={{ color: '#A3B18A' }}>{item}</button>
              ))}
              <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite prendre rendez-vous avec Proxima Care')} target="_blank" rel="noreferrer" className="px-6 py-2 text-sm text-white rounded-full" style={{ backgroundColor: '#B56533' }}>
                Prendre rendez-vous
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="accueil" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9FAFB] to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-24 px-8 rounded-3xl shadow-2xl" style={{ background: 'linear-gradient(135deg, #DAD7CD 0%, #E8E5DC 100%)' }}>
              <div className="mb-10 flex justify-center animate-fadeInDown">
                <div
                  className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    backgroundImage: `url('/image5.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="relative z-10 p-4 flex items-center justify-center">
                    <Logo width={200} height={200} className="h-auto w-full object-contain" priority alt="Proxima Care - logo" />
                  </div>
                </div>
              </div>
              <h1 className="text-6xl sm:text-7xl font-bold mb-4 tracking-tight animate-fadeInUp" style={{ color: '#A3B18A' }}>Proxima Care</h1>
              <p className="text-3xl font-semibold mb-6 animate-fadeInUp" style={{ color: '#B56533' }}>L'art de prendre soin</p>
              <p className="text-lg mb-12 max-w-3xl mx-auto px-4 leading-relaxed animate-fadeInUp" style={{ color: '#6B7280' }}>Centre de soins et de bien-être holistique dédié à votre restauration physique et émotionnelle. Massages thérapeutiques, rééducation fonctionnelle, relaxation et accompagnement postural.</p>
              <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite réserver une séance.')} target="_blank" rel="noreferrer" className="px-10 py-4 text-white rounded-full text-lg font-semibold inline-block btn-hover shadow-lg" style={{ backgroundColor: '#B56533' }}>Réserver une séance</a>
            </div>

            {/* (gallery removed per request) */}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#A3B18A' }}>Qui sommes-nous ?</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Proxima Care est un centre de soins et de bien-être holistique dédié à la restauration de l'équilibre du corps et de l'esprit. Fondé sur une conviction simple — prendre soin est un art —, Proxima Care allie rigueur thérapeutique et douceur humaine pour offrir une expérience de soin authentique, préventive et bienveillante.
            </p>
          </div>
        </section>

        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#A3B18A' }}>Nos services</h2>
              <p className="text-lg" style={{ color: '#6B7280' }}>Des soins personnalisés pour apaiser, restaurer et accompagner votre bien-être</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md card-hover overflow-hidden flex flex-col">
                      <div className="h-48 overflow-hidden bg-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#A3B18A' }}>{service.title}</h3>
                        <p className="text-sm flex-grow" style={{ color: '#6B7280' }}>{service.description}</p>
                      </div>
                    </div>
                  ))}
            </div>
            <div className="text-center mt-12">
              <a href="#tarifs" className="px-8 py-3 text-white rounded-full font-semibold inline-block btn-hover" style={{ backgroundColor: '#B56533' }}>Voir les tarifs</a>
            </div>
          </div>
        </section>

        <section id="approche" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#A3B18A' }}>Notre approche</h2>
            <div className="bg-gradient-to-r from-[#DAD7CD] to-[#E8E5DC] p-10 rounded-2xl shadow-lg">
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>Chaque soin repose sur une vision intégrative : <strong>écouter le corps, comprendre ses messages et agir dans le respect de son rythme.</strong> Nous combinons expertise thérapeutique et empathie humaine pour un accompagnement complet et bienveillant.</p>
            </div>
          </div>
        </section>

        <section id="tarifs" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#A3B18A' }}>GRILLE TARIFAIRE</h2>
              <p className="text-lg" style={{ color: '#6B7280' }}>Des formules claires et adaptées pour tous vos besoins</p>
            </div>
            <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-lg">
              <p className="text-center text-ink/70 max-w-2xl mx-auto mb-10">Des formules claires et adaptées — choisissez la séance qui vous convient. Les prix ci-dessous sont indicatifs ; contactez-nous pour un devis personnalisé.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#A3B18A' }}>MASSAGES À DOMICILE – PREMIUM</h3>
                  <ul className="text-ink/75 list-none space-y-3">
                    <li className="flex justify-between"><span>Relaxant 60 min</span> <span className="font-semibold text-[#B56533]">18 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Relaxant 90 min</span> <span className="font-semibold text-[#B56533]">25 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Thérapeutique 60–75 min</span> <span className="font-semibold text-[#B56533]">22 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Psycho-corporel signature 75 min</span> <span className="font-semibold text-[#B56533]">Nous consulter</span></li>
                    <li className="flex justify-between"><span>Femme enceinte 60 min</span> <span className="font-semibold text-[#B56533]">20 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Sportif 60–75 min</span> <span className="font-semibold text-[#B56533]">23 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Massage lumineux 45 min</span> <span className="font-semibold text-[#B56533]">15 000 FCFA</span></li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: '#A3B18A' }}>FORMULES DUO</h3>
                  <ul className="text-ink/75 list-none space-y-3">
                    <li className="flex justify-between"><span>Duo 60 min</span> <span className="font-semibold text-[#B56533]">35 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Duo 90 min</span> <span className="font-semibold text-[#B56533]">48 000 FCFA</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#A3B18A' }}>ENTREPRISES</h3>
                  <ul className="text-ink/75 list-none space-y-3">
                    <li className="flex justify-between"><span>Personnel 45 min</span> <span className="font-semibold text-[#B56533]">12 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Personnel 60 min</span> <span className="font-semibold text-[#B56533]">15 000 FCFA</span></li>
                    <li className="flex justify-between"><span>1/2 journée 8h</span> <span className="font-semibold text-[#B56533]">95 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Abonnement mensuel</span> <span className="font-semibold text-[#B56533]">À partir de 250k€</span></li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: '#A3B18A' }}>FORFAITS MENSUELS</h3>
                  <ul className="text-ink/75 list-none space-y-3">
                    <li className="flex justify-between"><span>Soft (2 × 60 min)</span> <span className="font-semibold text-[#B56533]">40 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Premium (4 × 60 min)</span> <span className="font-semibold text-[#B56533]">75 000 FCFA</span></li>
                    <li className="flex justify-between"><span>Signature (4 × premium)</span> <span className="font-semibold text-[#B56533]">115 000 FCFA</span></li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: '#A3B18A' }}>FRAIS DE DÉPLACEMENT</h3>
                  <ul className="text-ink/75 list-none space-y-3">
                    <li className="flex justify-between"><span>Zone 1</span> <span className="font-semibold text-[#B56533]">1 500 FCFA</span></li>
                    <li className="flex justify-between"><span>Zone 2</span> <span className="font-semibold text-[#B56533]">2 500 FCFA</span></li>
                    <li className="flex justify-between"><span>Zone 4</span> <span className="font-semibold text-[#B56533]">3 000–5 000 FCFA</span></li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-12">
                <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite connaître vos tarifs et réserver.')} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full text-white font-semibold inline-block btn-hover shadow-lg" style={{ backgroundColor: '#B56533' }}>Nous contacter pour réserver</a>
              </div>
            </div>
          </div>
        </section>

        <section id="valeurs" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9FAFB] to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#A3B18A' }}>Nos valeurs</h2>
              <p className="text-lg" style={{ color: '#6B7280' }}>Les principes qui guident chacune de nos actions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center border border-[#E8E5DC]">
                  <div className="flex justify-center mb-5 text-4xl" style={{ color: '#B56533' }}>{v.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#A3B18A' }}>{v.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#6B7280' }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8" style={{ color: '#A3B18A' }}>Notre vision</h2>
            <div className="bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6] p-12 rounded-3xl shadow-lg border border-[#E8E5DC]">
              <p className="text-xl leading-relaxed" style={{ color: '#6B7280' }}>Devenir une référence du bien-être intégratif et préventif au Cameroun, en inspirant un <strong>nouveau rapport au soin</strong> : plus doux, plus humain, plus conscient.</p>
            </div>
          </div>
        </section>

        <section id="avis" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#A3B18A' }}>Avis de nos clients</h2>
              <p className="text-lg" style={{ color: '#6B7280' }}>Vos témoignages nous inspirent à continuer notre mission</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg mb-12 border border-[#E8E5DC]">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#A3B18A' }}>Partagez votre expérience</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7280' }}>Utilisez le formulaire ci-dessous pour laisser un témoignage — vos avis sont stockés localement.</p>
            </div>

            <Reviews />
          </div>
        </section>

        <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#A3B18A' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-4">Contactez-nous</h2>
              <p className="text-lg mb-12 opacity-90">Nous sommes à votre écoute pour répondre à toutes vos questions</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left max-w-2xl mx-auto">
                <div className="flex flex-col space-y-4">
                  <div>
                    <p className="font-semibold text-lg mb-1">Email</p>
                    <a href="mailto:proximacare1er@gmail.com" className="opacity-90 hover:opacity-100 transition">proximacare1er@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Téléphone</p>
                    <a href="tel:+237693185235" className="opacity-90 hover:opacity-100 transition">+237 693 185 235</a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div>
                    <p className="font-semibold text-lg mb-1">Adresse</p>
                    <p className="opacity-90">Cameroun</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Réseaux sociaux</p>
                    <a href="https://www.facebook.com/profile.php?id=61584357712830" target="_blank" rel="noreferrer" className="opacity-90 hover:opacity-100 transition">Facebook</a>
                  </div>
                </div>
              </div>
              <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite réserver une séance de massage. Quelles sont vos disponibilités ?')} target="_blank" rel="noreferrer" className="px-10 py-4 text-white rounded-full font-semibold inline-block btn-hover shadow-lg border-2 border-white mb-12" style={{ backgroundColor: '#B56533' }}>Réserver une séance</a>
              <p className="text-sm opacity-80 mt-12 border-t border-white/20 pt-8">© 2024 Proxima Care – Centre de soins et bien-être intégratif • Cameroun</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
