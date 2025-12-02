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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#accueil" onClick={() => scrollToSection('accueil')} className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-lg bg-white p-1">
                <Logo width={48} height={48} className="h-full w-full object-contain" />
              </div>
              <div className="hidden sm:block text-2xl font-light tracking-wide" style={{ color: '#A3B18A' }}>
                Proxima Care
              </div>
            </a>

            <nav className="hidden md:flex space-x-8 text-sm">
              {['accueil', 'services', 'approche', 'valeurs', 'vision', 'avis', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="capitalize hover:opacity-70 transition-opacity" style={{ color: '#A3B18A' }}>
                  {item}
                </button>
              ))}
            </nav>

            <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite prendre rendez-vous avec Proxima Care')} target="_blank" rel="noreferrer" className="hidden md:inline-block px-6 py-2 text-sm text-white rounded-full" style={{ backgroundColor: '#B56533' }}>
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
        <section id="accueil" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20" style={{ backgroundColor: '#DAD7CD', borderRadius: '2rem' }}>
              <div className="mb-6 flex justify-center">
                <div
                  className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: `url('/image5.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* subtle overlay to improve contrast */}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 p-4 flex items-center justify-center">
                    <Logo width={200} height={200} className="h-auto w-full object-contain" priority alt="Proxima Care - logo" />
                  </div>
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl font-light mb-6" style={{ color: '#A3B18A' }}>Proxima Care</h1>
              <p className="text-2xl font-light mb-4" style={{ color: '#B56533' }}>L'art de prendre soin</p>
              <p className="text-lg mb-8 max-w-2xl mx-auto px-4" style={{ color: '#6B7280' }}>Centre de soins et de bien-être holistique. Massages thérapeutiques, relaxation, accompagnement postural.</p>
              <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite réserver une séance.')} target="_blank" rel="noreferrer" className="px-8 py-3 text-white rounded-full text-lg inline-block" style={{ backgroundColor: '#B56533' }}>Réserver une séance</a>
            </div>

            {/* (gallery removed per request) */}
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Proxima Care est un centre de soins et de bien-être holistique dédié à la restauration de l'équilibre du corps et de l'esprit. Fondé sur une conviction simple — prendre soin est un art —, Proxima Care allie rigueur thérapeutique et douceur humaine pour offrir une expérience de soin authentique, préventive et bienveillante.
            </p>
          </div>
        </section>

        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-12" style={{ color: '#A3B18A' }}>Nos services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
                      <div className="mb-4 overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
                      </div>
                      <h3 className="text-xl font-medium mb-3" style={{ color: '#A3B18A' }}>{service.title}</h3>
                      <p className="text-sm flex-grow" style={{ color: '#6B7280' }}>{service.description}</p>
                    </div>
                  ))}
            </div>
            <div className="text-center mt-12">
              <a href="#contact" className="px-8 py-3 text-white rounded-full inline-block" style={{ backgroundColor: '#B56533' }}>Voir les formules</a>
            </div>
          </div>
        </section>

        <section id="approche" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/90 p-8 rounded-xl">
              <h2 className="text-4xl font-light mb-8" style={{ color: '#A3B18A' }}>Notre approche</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>Chaque soin repose sur une vision intégrative : écouter le corps, comprendre ses messages et agir dans le respect de son rythme.</p>
            </div>
          </div>
        </section>

        <section id="tarifs" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/95 p-8 rounded-xl">
              <h2 className="text-4xl font-light mb-6 text-center" style={{ color: '#A3B18A' }}>GRILLE TARIFAIRE</h2>
              <p className="text-center text-ink/70 max-w-2xl mx-auto mb-8">Des formules claires et adaptées — choisissez la séance qui vous convient. Les prix ci-dessous sont indicatifs ; contactez-nous pour un devis personnalisé.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#A3B18A' }}>MASSAGES À DOMICILE – PREMIUM</h3>
                  <ul className="text-ink/75 list-none space-y-2">
                    <li>Relaxant 60 min — <span className="font-semibold text-[#B56533]">18 000 FCFA</span></li>
                    <li>Relaxant 90 min — <span className="font-semibold text-[#B56533]">25 000 FCFA</span></li>
                    <li>Thérapeutique 60–75 min — <span className="font-semibold text-[#B56533]">22 000 FCFA</span></li>
                    <li>Psycho-corporel signature Proxima Care 75 min — <span className="font-semibold text-[#B56533]">(prix non indiqué)</span></li>
                    <li>Femme enceinte 60 min — <span className="font-semibold text-[#B56533]">20 000 FCFA</span></li>
                    <li>Sportif 60–75 min — <span className="font-semibold text-[#B56533]">23 000 FCFA</span></li>
                    <li>Massage lumineux 45 min — <span className="font-semibold text-[#B56533]">15 000 FCFA</span></li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#A3B18A' }}>FORMULES DUO</h3>
                  <ul className="text-ink/75 list-none space-y-2">
                    <li>Duo 60 min — <span className="font-semibold text-[#B56533]">35 000 FCFA</span></li>
                    <li>Duo 90 min — <span className="font-semibold text-[#B56533]">48 000 FCFA</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#A3B18A' }}>ENTREPRISES</h3>
                  <ul className="text-ink/75 list-none space-y-2">
                    <li>Personnel 45 min — <span className="font-semibold text-[#B56533]">12 000 FCFA</span></li>
                    <li>Personnel 60 min — <span className="font-semibold text-[#B56533]">15 000 FCFA</span></li>
                    <li>1/2 journée 8h — <span className="font-semibold text-[#B56533]">95 000 FCFA</span></li>
                    <li>Abonnements entreprise — <span className="font-semibold text-[#B56533]">à partir de 250 000 € / mois</span></li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#A3B18A' }}>FORFAITS MENSUELS</h3>
                  <ul className="text-ink/75 list-none space-y-2">
                    <li>Soft (2 × 60 min) — <span className="font-semibold text-[#B56533]">40 000 FCFA</span></li>
                    <li>Premium (4 × 60 min) — <span className="font-semibold text-[#B56533]">75 000 FCFA</span></li>
                    <li>Signature (4 × premium/psycho-corporel) — <span className="font-semibold text-[#B56533]">115 000 FCFA</span></li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#A3B18A' }}>FRAIS DE DÉPLACEMENT</h3>
                  <ul className="text-ink/75 list-none space-y-2">
                    <li>Zone 1 — <span className="font-semibold text-[#B56533]">1 500 FCFA</span></li>
                    <li>Zone 2 — <span className="font-semibold text-[#B56533]">2 500 FCFA</span></li>
                    <li>Zone 4 — <span className="font-semibold text-[#B56533]">3 000–5 000 FCFA (sur devise)</span></li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-6">
                <a href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite connaître vos tarifs et réserver.')} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-full text-white inline-block" style={{ backgroundColor: '#B56533' }}>Contactez-nous</a>
              </div>
            </div>
          </div>
        </section>

        <section id="valeurs" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#DAD7CD' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-12" style={{ color: '#A3B18A' }}>Nos valeurs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-6 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center mb-4" style={{ color: '#B56533' }}>{v.icon}</div>
                  <h3 className="text-lg font-medium mb-2" style={{ color: '#A3B18A' }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8" style={{ color: '#A3B18A' }}>Notre vision</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>Devenir une référence du bien-être intégratif et préventif au Cameroun, en inspirant un nouveau rapport au soin : plus doux, plus humain, plus conscient.</p>
          </div>
        </section>

        <section id="avis" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-12" style={{ color: '#A3B18A' }}>Avis de nos clients</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
              <h3 className="text-2xl font-light mb-6" style={{ color: '#A3B18A' }}>Partagez votre expérience</h3>
              <p className="text-sm text-ink/70">Utilisez le formulaire ci-dessous pour laisser un témoignage — vos avis sont stockés localement pour cette démo.</p>
            </div>

            <Reviews />
          </div>
        </section>

        <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#A3B18A' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-white">
              <h2 className="text-3xl font-light mb-8">Contactez-nous</h2>
              <div className="space-y-3 mb-8">
                <p>Email : proximacare1er@gmail.com</p>
                <p>Téléphone : +237 693185235</p>
                <p>Adresse : Cameroun</p>
                <p>Facebook : <a href="https://www.facebook.com/profile.php?id=61584357712830" target="_blank" rel="noreferrer" className="underline">facebook.com/proxima-care</a></p>
              </div>
              <a href="#contact" className="px-8 py-3 text-white rounded-full border-2 border-white inline-block" onMouseEnter={(e) => (e.currentTarget.style.color = '#A3B18A')} onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>Réserver une séance</a>
              <p className="mt-12 text-sm opacity-80">Proxima Care – Centre de soins et bien-être</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
