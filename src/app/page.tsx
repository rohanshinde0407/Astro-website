'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import FAQSection, { FAQItem } from '@/components/FAQSection';

export default function Home() {
  const GAME_LOGIN_URL = 'https://ramnaam.astroite.com/login';

  // Injects intersection observer to handle scroll reveals on the client side
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqData: FAQItem[] = [
    {
      question: 'What is the Ram Naam Chanting Game?',
      answer:
        'The Ram Naam Chanting Game is a mobile-friendly digital experience created by Astroite Gaming. It transforms the spiritual practice of reciting Ram Naam into an interactive game that helps users build a devotional habit, find peace, and discover sacred Indian geography.',
    },
    {
      question: 'How does the game help you learn about India\'s sacred landmarks?',
      answer:
        'As you progress and complete chants in the game, you unlock historical facts, significance, and proper detailed information about India\'s 108 Shaktipeethas and 12 Jyotirlingas, seamlessly merging spiritual growth with cultural education.',
    },
    {
      question: 'What are the main benefits of chanting Ram Naam?',
      answer:
        'Chanting Ram Naam brings deeper mental clarity by calming a noisy mind, improves decision-making by grounding your thoughts, and delivers the same inner peace our grandparents experienced, right on your modern digital device.',
    },
    {
      question: 'Why did Astroite Gaming create this devotional game?',
      answer:
        'Astroite Gaming wanted to preserve traditional practices like using a Beeds Mala. By introducing a modern, educational gaming solution, they bridged the gap between ancient roots and modern vibes, making devotion accessible and engaging for all generations.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', overflowX: 'hidden' }}>
      
      {/* SECTION 1: Hero Section (#home) - Clean layout with background image ram.png and responsive gradient overlays */}
      <section id="home" className="section-full hero" style={{ minHeight: '100vh' }}>
        <div className="section-content" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <div style={{ maxWidth: '750px', width: '100%', textAlign: 'left' }}>
            <span 
              className="animate-fade-in delay-100"
              style={{ 
                fontSize: '1.05rem', 
                fontWeight: 700, 
                letterSpacing: '0.25em', 
                textTransform: 'uppercase', 
                color: 'var(--golden-accent)',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              Namaste & Sita Ram
            </span>
            
            <h1 
              className="animate-fade-in delay-200"
              style={{ 
                fontSize: '4.5rem', 
                marginBottom: '1.5rem', 
                fontWeight: 800, 
                color: 'var(--text-primary)',
                lineHeight: '1.1'
              }}
            >
              Welcome to <br />
              <span className="orange-brand-text">Ram Naam</span>
            </h1>
            
            <p 
              className="animate-fade-in delay-300"
              style={{ 
                fontSize: '1.25rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '2.5rem', 
                lineHeight: '1.8',
                maxWidth: '650px'
              }}
            >
              Welcome to a sacred space where devotion meets the modern age. We at Astroite Gaming are deeply grateful to the universe for granting us the strength and vision to create a beautiful, immersive experience dedicated to the chanting of <span style={{ color: 'var(--bright-orange)', fontWeight: 600 }}>Ram Naam</span>.
            </p>
            
            <div 
              className="animate-fade-in delay-400"
              style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}
            >
              <a href={GAME_LOGIN_URL} className="btn-primary" style={{ backgroundColor: 'var(--primary-orange)', padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(232, 93, 36, 0.4)' }}>
                Login to Play Ram Naam <span>&rarr;</span>
              </a>
              <a href="#about" className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(5px)' }}>
                Our Vision
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Vision & Roots Section (#about) - uses hanuman-stand.png */}
      <section id="about" className="section-full about" style={{ minHeight: 'auto', padding: '6.5rem 0' }}>
        <div className="section-content">
          <div className="hero-split">
            <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                color: 'var(--golden-accent)',
                display: 'block',
                marginBottom: '1rem'
              }}>
                Spiritual Roots
              </span>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Ancient Roots with <br />
                <span className="orange-brand-text">Modern Vibes</span>
              </h2>
              
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our grandparents found inner peace, clarity, and deep family bonding by chanting the holy name using a traditional Beeds Mala. In today's fast-paced world, we want to preserve that beautiful practice.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                Astroite Gaming has bridged the gap by introducing a modern, educational solution. We have transformed a timeless spiritual practice into an engaging digital experience, making daily devotion accessible, interactive, and meaningful for all generations.
              </p>
              <div>
                <a href={GAME_LOGIN_URL} className="btn-primary" style={{ backgroundColor: 'var(--primary-orange)' }}>
                  Start Chanting Now <span>&rarr;</span>
                </a>
              </div>
            </div>
            
            {/* Standing Hanuman represents quiet ancestral peace and stability */}
            <div className="image-wrapper reveal-right">
              <div className="image-backdrop-glow" style={{ background: 'radial-gradient(circle, rgba(232, 93, 36, 0.2) 0%, transparent 80%)' }}></div>
              <Image
                src="/img/hanuman-stand.png"
                alt="Lord Hanuman standing representing spiritual stability and strength"
                width={380}
                height={500}
                className="image-glow-orange animate-pulse-glow"
                style={{ maxHeight: '480px', objectFit: 'contain', border: '1px solid rgba(232, 93, 36, 0.2)' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Official Game Cover Section (#game) - uses cover.png */}
      <section id="game" className="section-full" style={{ minHeight: 'auto', padding: '6.5rem 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="section-content">
          <div className="hero-split">
            
            {/* Visual showcase of cover.png as the official game art */}
            <div className="image-wrapper reveal-left">
              <div className="image-backdrop-glow" style={{ background: 'radial-gradient(circle, rgba(232, 176, 75, 0.15) 0%, transparent 80%)' }}></div>
              <Image
                src="/img/cover.png"
                alt="Official Ram Naam Game Cover Art"
                width={480}
                height={300}
                className="image-glow-orange"
                style={{ border: '1px solid rgba(232, 176, 75, 0.35)', boxShadow: 'var(--shadow-lg)' }}
                unoptimized
              />
            </div>

            <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                color: 'var(--golden-accent)',
                display: 'block',
                marginBottom: '1rem'
              }}>
                Astroite Gaming
              </span>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Bridging The Generational Gap
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We believe that modern gaming can serve a higher purpose. By combining the immersive nature of digital gaming with historical, cultural, and spiritual details, we make devotion accessible and engaging.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                The <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>Ram Naam</span> game guides players through milestones, unlocking historical details and spiritual significance, ensuring players gain both mental clarity and cultural values.
              </p>
              <div>
                <a href={GAME_LOGIN_URL} className="btn-primary" style={{ backgroundColor: 'var(--primary-orange)' }}>
                  Login to Play Now <span>&rarr;</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: Game Story & Sacred Geography (#story) - uses shaktipith.png and hanuman-fly.png */}
      <section id="story" className="section-full landmarks" style={{ minHeight: 'auto', padding: '6.5rem 0' }}>
        <div className="section-content" style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          
          <div className="reveal-on-scroll" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: 700, 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: 'var(--golden-accent)',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Interactive Road Map
            </span>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Discover the Sacred Journey
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              This is more than just a game—it is a spiritual and educational journey. Progressing in the game connects you directly to India's sacred landmarks:
            </p>
          </div>

          {/* Large showcase of shaktipith.png containing the whole app story */}
          <div className="reveal-on-scroll reveal-delay-100" style={{ textAlign: 'center', width: '100%' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--golden-accent)', marginBottom: '1.5rem', fontWeight: 600 }}>
              🕉️ The Sacred Geography: 108 Shaktipeethas & 12 Jyotirlingas Map
            </p>
            <div className="image-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="image-backdrop-glow" style={{ background: 'radial-gradient(circle, rgba(199, 68, 46, 0.25) 0%, transparent 80%)' }}></div>
              <Image
                src="/img/shaktipith.png"
                alt="Ram Naam Game Story, 108 Shaktipeethas & 12 Jyotirlingas Map"
                width={1000}
                height={600}
                className="image-glow-orange"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: 'none',
                  border: '1px solid rgba(232, 93, 36, 0.35)',
                  boxShadow: '0 30px 70px -25px rgba(0,0,0,0.95)'
                }}
                unoptimized
              />
            </div>
          </div>

          {/* Flying Hanuman placed next to the checklists representing the active journey across landmarks with float animation */}
          <div className="hero-split" style={{ marginTop: '2rem' }}>
            <div className="image-wrapper reveal-left">
              {/* Flying Hanuman actually floats up and down in mid-air */}
              <Image
                src="/img/hanuman-fly.png"
                alt="Lord Hanuman flying representing dynamic devotion and action"
                width={400}
                height={400}
                className="image-glow-orange animate-float"
                style={{ border: '1px solid rgba(232, 93, 36, 0.2)', maxHeight: '350px', objectFit: 'contain' }}
                unoptimized
              />
            </div>
            
            <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--golden-accent)' }}>🚩</span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    108 Shaktipeethas & 12 Jyotirlingas
                  </h3>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-secondary)' }}>
                    Every chant you complete helps unlock deep, detailed information about these iconic shrines.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary-orange)' }}>📖</span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    Enhance Your Knowledge
                  </h3>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-secondary)' }}>
                    Learn the history, significance, and proper information of all 108 Shaktipeethas and 12 Jyotirlingas as you advance.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--golden-accent)' }}>✨</span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    Elevate Your Journey
                  </h3>
                  <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-secondary)' }}>
                    Seamlessly combine your spiritual growth with cultural education, bringing ancient wisdom to modern vibes.
                  </p>
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <a href={GAME_LOGIN_URL} className="btn-primary" style={{ backgroundColor: 'var(--primary-orange)' }}>
                  Unlock India's Heritage <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: Why Chant & FAQ Section (#faq) */}
      <section id="faq" className="section-full" style={{ 
        backgroundImage: "linear-gradient(180deg, #181818 0%, rgba(24, 24, 24, 0.95) 50%, #181818 100%)",
        flexDirection: 'column',
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        minHeight: 'auto'
      }}>
        <div className="section-content">
          
          {/* Direct Answer text block */}
          <div className="aeo-direct-answer reveal-on-scroll" style={{ maxWidth: '900px', margin: '0 auto 5rem auto' }}>
            <p>
              <strong>How does the <span style={{ color: 'var(--primary-orange)' }}>Ram Naam</span> game connect modern gaming and devotion?</strong> The <span style={{ color: 'var(--primary-orange)' }}>Ram Naam</span> Chanting Game bridges the generational gap by integrating traditional Beeds Mala chanting with modern digital progression. Every completed chant guides the user through India's sacred geography, offering mental clarity, sharper decision-making, and inner peace in an interactive mobile format.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Why Chant <span className="orange-brand-text">Ram Naam</span>?
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Beyond the digital achievements, the act of chanting has profound benefits for your mind and daily routine:
            </p>
          </div>
          
          <div className="grid-cols-3 reveal-on-scroll reveal-delay-100" style={{ marginBottom: '5rem' }}>
            <div className="reveal-delay-100">
              <Card
                icon="🧠"
                title="Deeper Clarity"
                description="Chanting brings a sense of stillness and focus to a noisy mind, reducing distraction."
              />
            </div>
            <div className="reveal-delay-200">
              <Card
                icon="🎯"
                title="Better Decision-Making"
                description="A calm mind leads to sharper insights, helping you navigate choices in day-to-day life."
              />
            </div>
            <div className="reveal-delay-300">
              <Card
                icon="🕊️"
                title="Inner Peace"
                description="Experience the same grounding peace our ancestors felt, right from your modern device."
              />
            </div>
          </div>

          <div className="reveal-on-scroll reveal-delay-200" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <a href={GAME_LOGIN_URL} className="btn-primary" style={{ backgroundColor: 'var(--primary-orange)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Chant for Inner Peace Now
            </a>
          </div>

          <hr style={{ margin: '0 0 5rem 0', borderColor: 'var(--border-color)' }} />

          {/* Render FAQs */}
          <div className="reveal-on-scroll">
            <FAQSection
              items={faqData}
              title="Frequently Asked Questions"
              subtitle="Answers to common questions about the Ram Naam Chanting Game and its spiritual features."
            />
          </div>

          {/* Final Login Redirection Banner */}
          <div className="reveal-on-scroll" style={{ 
            textAlign: 'center', 
            marginTop: '6rem', 
            padding: '4rem 2rem', 
            backgroundColor: 'var(--bg-secondary)', 
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Start Your Spiritual Devotion Today
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Connect with your roots, build mental clarity, and learn Indian heritage. Join thousands of devotees in the <span style={{ color: 'var(--bright-orange)', fontWeight: 600 }}>Ram Naam</span> game.
            </p>
            <a href={GAME_LOGIN_URL} className="btn-primary" style={{ backgroundColor: 'var(--primary-orange)', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Login to Play Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
