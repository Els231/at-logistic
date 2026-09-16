'use client'

import { useState } from 'react'

const gallery = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.22%20PM-vCMSKT8sEWGHj5CI28CmhT3T8Kstun.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.20%20PM-IQ5mtB8ZKCXLugdDddYTHValqGiKxd.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.23%20PM%20%281%29-AjBpgvGLiigC5w8zalkyFLNZE9PSas.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.23%20PM%20%283%29-vzL6ra8J0NDHJyGzka6xFXe8CF3Auc.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.23%20PM%20%285%29-E32zEjDHrippss0YR7C43hUx5Nwu1l.jpeg',
]

const services = [
  ['01', 'Envíos aéreos', 'Una alternativa ágil para compras y paquetes internacionales.'],
  ['02', 'Envíos marítimos', 'Soluciones para consolidar mercancía bajo condiciones aplicables.'],
  ['03', 'Recepción y consolidación', 'Recibimos tus compras en bodega y las preparamos para su traslado.'],
  ['04', 'Entrega y delivery local', 'Retira en sucursal o consulta por opciones de entrega en Managua.'],
  ['05', 'Gestión de compras', 'Apoyo para gestionar tus compras internacionales de forma ordenada.'],
  ['06', 'Atención empresarial', 'Atención para clientes particulares, emprendimientos y empresas.'],
]

const initialOffers = [
  { tag: 'DESTACADA', title: 'Tu compra, más cerca', text: 'Recibe notificación desde que tu paquete llega a nuestra bodega de origen.', action: 'Consultar servicio' },
  { tag: 'RUTA INTERNACIONAL', title: 'Consolidamos tus compras', text: 'Unimos tus paquetes para facilitar la gestión de tu envío internacional.', action: 'Ver modalidades' },
  { tag: 'PARA EMPRENDEDORES', title: 'Un espacio para crecer', text: 'Conoce nuestro espacio físico para emprendedores y punto de venta.', action: 'Conocer más' },
]

export default function Page() {
  const [offerIndex, setOfferIndex] = useState(0)
  const [offers, setOffers] = useState(initialOffers)
  const [editing, setEditing] = useState(false)
  const offer = offers[offerIndex]

  function updateOffer(field: keyof typeof offer, value: string) {
    setOffers((current) => current.map((item, index) => index === offerIndex ? { ...item, [field]: value } : item))
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="AT Logistics inicio"><span>AT</span> LOGISTICS</a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#rutas">Rutas</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#cotizar">Cotizar envío <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> LOGÍSTICA INTERNACIONAL · DESDE 2020</p><h1>Movemos tus compras.<br /><em>Acercamos tus destinos.</em></h1><p className="hero-lead">Soluciones de courier, recepción y consolidación para conectar tus compras desde Estados Unidos y otros destinos con Nicaragua.</p><div className="hero-actions"><a className="button button-primary" href="#cotizar">Cotiza tu envío <span>→</span></a><a className="text-link" href="#servicios">Explorar servicios <span>↓</span></a></div><div className="hero-meta"><div><strong>2020</strong><span>Año de inicio</span></div><div><strong>5</strong><span>Personas en el equipo</span></div><div><strong>∞</strong><span>Compromiso</span></div></div></div>
        <div className="hero-visual"><img src={gallery[0]} alt="Interior de la sede de AT Logistics con productos exhibidos" /><div className="hero-stamp"><span>AT</span><small>HUB</small></div><div className="hero-caption">Un espacio para tus compras <span>↗</span></div></div>
      </section>

      <section className="ticker" aria-label="Rutas disponibles"><div>ESTADOS UNIDOS <span>✦</span> NICARAGUA <span>✦</span> ESPAÑA <span>✦</span> CHINA <span>✦</span> COLOMBIA <span>✦</span> PANAMÁ</div></section>

      <section className="offers-section" id="ofertas"><div className="section-kicker">OFERTAS Y NOVEDADES <span>●</span><button className="edit-toggle" onClick={() => setEditing(!editing)}>{editing ? 'Guardar edición' : 'Editar carrusel'}</button></div><div className="offer-wrap"><button className="carousel-arrow prev" onClick={() => setOfferIndex((offerIndex - 1 + offers.length) % offers.length)} aria-label="Oferta anterior">←</button><article className="offer-card"><div className="offer-art"><div className="offer-grid" /><span>AT<br /><b>LOGISTICS</b></span></div><div className="offer-content">{editing ? <><input value={offer.tag} onChange={(e) => updateOffer('tag', e.target.value)} aria-label="Etiqueta de oferta" /><input className="offer-title-input" value={offer.title} onChange={(e) => updateOffer('title', e.target.value)} aria-label="Título de oferta" /><textarea value={offer.text} onChange={(e) => updateOffer('text', e.target.value)} aria-label="Descripción de oferta" /><input value={offer.action} onChange={(e) => updateOffer('action', e.target.value)} aria-label="Texto del botón" /></> : <><span className="offer-tag">{offer.tag}</span><h2>{offer.title}</h2><p>{offer.text}</p><a className="button button-dark" href="#cotizar">{offer.action} <span>↗</span></a></>}<div className="offer-count">0{offerIndex + 1} <span>/ 0{offers.length}</span></div></div></article><button className="carousel-arrow next" onClick={() => setOfferIndex((offerIndex + 1) % offers.length)} aria-label="Siguiente oferta">→</button></div></section>

      <section className="intro section" id="nosotros"><div className="section-label">01 / LA EMPRESA</div><div><p className="big-statement">No solo trasladamos paquetes.<br /><span>Hacemos que lleguen</span><br />tus planes.</p><p className="body-copy">AT Logistics brinda servicios de logística y courier internacional, principalmente para la recepción y traslado de compras desde Estados Unidos hacia Nicaragua. Desde nuestra sucursal física en Managua, trabajamos para que cada envío sea claro, seguro y ordenado.</p></div></section>

      <section className="services section" id="servicios"><div className="section-label">02 / LO QUE HACEMOS</div><div className="services-main"><div><h2 className="section-title">Todo lo que necesitas,<br /><span>en un solo lugar.</span></h2><a className="text-link" href="#cotizar">Consulta tu envío <span>↗</span></a></div><div className="service-grid">{services.map(([number, title, text]) => <article className="service-card" key={title}><span className="service-number">{number}</span><h3>{title}</h3><p>{text}</p><a href="#cotizar" aria-label={`Consultar ${title}`}>↗</a></article>)}</div></div></section>

      <section className="routes section" id="rutas"><div className="section-label">03 / MODALIDADES</div><div className="route-grid"><article className="route-card route-air"><span className="route-number">01</span><div className="route-icon">✈</div><h2>Envío aéreo</h2><p>Para quienes buscan una alternativa eficiente para sus compras y paquetes internacionales.</p><a href="#cotizar">Consultar condiciones <span>↗</span></a></article><article className="route-card route-sea"><span className="route-number">02</span><div className="route-icon">≈</div><h2>Envío marítimo</h2><p>Una opción para consolidar mercancía de acuerdo con las características de tu envío.</p><a href="#cotizar">Consultar condiciones <span>↗</span></a></article></div><p className="fine-print">Los tiempos y tarifas varían según la modalidad y características del envío. Consulta las condiciones de tu envío con AT Logistics.</p></section>

      <section className="why section"><div className="why-photo"><img src={gallery[1]} alt="Estantería de AT Logistics con bolsos y productos" /></div><div className="why-copy"><div className="section-label">04 / NUESTRA DIFERENCIA</div><h2 className="section-title">¿Por qué elegir<br /><span>AT Logistics?</span></h2>{['Cumplimos los tiempos ofrecidos.', 'Buena atención al cliente.', 'Te notificamos desde la bodega de origen.', 'Mayor seguimiento y transparencia.'].map((item, i) => <div className="reason" key={item}><span>0{i + 1}</span><p>{item}</p></div>)}</div></section>

      <section className="gallery section"><div className="section-label">05 / NUESTRO ESPACIO</div><div className="gallery-heading"><h2 className="section-title">Un punto de encuentro<br /><span>para tus compras.</span></h2><p>Conoce nuestra sucursal física en Managua y el espacio que preparamos para atenderte.</p></div><div className="gallery-grid">{gallery.slice(2).map((image, i) => <img key={image} src={image} alt={`Espacio interior de AT Logistics ${i + 1}`} />)}</div></section>

      <section className="quote section" id="cotizar"><div className="section-label">06 / HABLEMOS</div><div className="quote-content"><h2>¿Tienes un envío<br /><em>en mente?</em></h2><p>Cuéntanos qué necesitas y consulta las condiciones de tu envío con nuestro equipo.</p><a className="button button-primary" href="#contacto">Solicitar información <span>↗</span></a></div><div className="quote-mark">AT<br />LOGISTICS</div></section>

      <section className="contact section" id="contacto"><div className="section-label">07 / ENCUÉNTRANOS</div><div className="contact-grid"><div><h2 className="section-title">Estamos<br /><span>para ayudarte.</span></h2><p>Reparto San Juan, de La Mezquita 2 cuadras al lago, costado norte del Registro de la Propiedad, casa No. 106, segundo portón gris, Managua, Nicaragua.</p><div className="contact-placeholder">WhatsApp / correo: <strong>Consultar con AT Logistics</strong></div></div><div className="location-card"><span className="map-pin">+</span><div className="map-lines" /><div className="location-card-text"><small>UBICACIÓN</small><strong>Managua, Nicaragua</strong><span>Sucursal de atención y operación local</span></div></div></div></section>

      <footer><a className="brand" href="#inicio"><span>AT</span> LOGISTICS</a><p>Soluciones logísticas internacionales<br />con confianza y transparencia.</p><div className="footer-links"><a href="#servicios">Servicios</a><a href="#rutas">Modalidades</a><a href="#contacto">Contacto</a></div><small>© 2026 AT Logistics. Todos los derechos reservados.</small></footer>
    </main>
  )
}
