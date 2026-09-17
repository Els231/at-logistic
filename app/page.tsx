'use client'

import { useState } from 'react'

const mapsUrl = 'https://maps.app.goo.gl/qHNkouaN9J6vxVqZ7'
const gallery = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.22%20PM-vCMSKT8sEWGHj5CI28CmhT3T8Kstun.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.20%20PM-IQ5mtB8ZKCXLugdDddYTHValqGiKxd.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.23%20PM%20%281%29-AjBpgvGLiigC5w8zalkyFLNZE9PSas.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-16%20at%201.20.23%20PM%20%283%29-vzL6ra8J0NDHJyGzka6xFXe8CF3Auc.jpeg',
]
const services = ['Envío aéreo', 'Envío marítimo', 'Recepción de paquetería', 'Consolidación', 'Retiro en sucursal', 'Delivery local', 'Gestión de compras', 'Espacio para emprendedores']
const clients = ['Personas particulares', 'Emprendedores', 'Pequeñas y medianas empresas', 'Importadores y exportadores', 'Talleres mecánicos', 'Instituciones']
const faq = ['¿Cómo obtengo la dirección de la bodega?', '¿Cuáles son las tarifas?', '¿Cuál es la diferencia entre aéreo y marítimo?', '¿Cómo identifico mi paquete?', '¿Qué productos están restringidos?', '¿Cómo solicito delivery?']
const initialOffers = [
  { tag: 'NOVEDAD', title: 'Notificación desde origen', text: 'Te avisamos cuando tu paquete es recibido en la bodega correspondiente.', action: 'Conocer servicio' },
  { tag: 'MODALIDADES', title: 'Aéreo o marítimo', text: 'Consulta la modalidad más adecuada para las características de tu envío.', action: 'Ver opciones' },
  { tag: 'EMPRENDEDORES', title: 'Un espacio para crecer', text: 'Conoce el espacio físico para emprendedores y punto de venta.', action: 'Solicitar información' },
]

function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title} {accent && <span>{accent}</span>}</h2></div>
}

export default function Page() {
  const [tracking, setTracking] = useState('')
  const [trackingSent, setTrackingSent] = useState(false)
  const [offerIndex, setOfferIndex] = useState(0)
  const [offers, setOffers] = useState(initialOffers)
  const [editing, setEditing] = useState(false)
  const offer = offers[offerIndex]
  const updateOffer = (field: keyof typeof offer, value: string) => setOffers(items => items.map((item, i) => i === offerIndex ? { ...item, [field]: value } : item))

  return <main>
    <header className="site-header"><a className="logo" href="#inicio"><b>AT</b><span>LOGISTICS</span></a><nav><a href="#empresa">Empresa</a><a href="#servicios">Servicios</a><a href="#proceso">Proceso</a><a href="#contacto">Contacto</a></nav><a className="button small" href="#seguimiento">Rastrear paquete <span>↗</span></a></header>

    <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">COURIER INTERNACIONAL · MANAGUA</p><h1>Tu paquete.<br /><i>En buenas manos.</i></h1><p>Recepción, consolidación y traslado internacional desde Estados Unidos hacia Nicaragua, con seguimiento y atención transparente.</p><div className="actions"><a className="button primary" href="#cotizacion">Solicita una cotización <span>↗</span></a><a className="underlink" href="#servicios">Explorar servicios ↓</a></div><div className="stats"><strong>2020 <small>Inicio</small></strong><strong>150–250 <small>paquetes / semana</small></strong><strong>3,000–5,000 <small>libras / mes</small></strong></div></div><div className="hero-image"><img src={gallery[0]} alt="Interior de AT Logistics en Managua" /><div className="image-note">Sucursal física<br /><b>Managua · 2026</b></div></div></section>

    <section className="route-strip"><span>USA</span><b>→</b><span>NICARAGUA</span><i>También gestionamos envíos desde España, China, Colombia y Panamá bajo condiciones específicas.</i></section>

    <section className="tracking" id="seguimiento"><div><p className="eyebrow">SEGUIMIENTO</p><h2>Rastrea tu<br /><span>paquete.</span></h2><p>Consulta el estado de tu envío con tu número de tracking o código interno WR.</p></div><form onSubmit={(e) => { e.preventDefault(); setTrackingSent(Boolean(tracking.trim())) }}><label htmlFor="tracking">Ingrese su número de seguimiento</label><div className="tracking-input"><input id="tracking" value={tracking} onChange={(e) => { setTracking(e.target.value); setTrackingSent(false) }} placeholder="Ej. AT-000000" /><button type="submit">Consultar <span>→</span></button></div>{trackingSent && <p className="form-success">Consulta preparada para: <b>{tracking}</b>. La integración de estados se conectará al sistema de tracking.</p>}<small>La interfaz queda lista para conectarse posteriormente con la API o sistema actual de AT Logistics.</small></form></section>

    <section className="offers" id="ofertas"><div className="offer-top"><p className="eyebrow">OFERTAS Y NOVEDADES</p><button onClick={() => setEditing(!editing)}>{editing ? 'Guardar edición' : 'Editar carrusel'}</button></div><div className="offer-carousel"><button onClick={() => setOfferIndex((offerIndex + offers.length - 1) % offers.length)} aria-label="Oferta anterior">←</button><article><div className="offer-number">0{offerIndex + 1}<small>/ 0{offers.length}</small></div>{editing ? <div className="offer-editor"><input value={offer.tag} onChange={e => updateOffer('tag', e.target.value)} aria-label="Etiqueta" /><input value={offer.title} onChange={e => updateOffer('title', e.target.value)} aria-label="Título" /><textarea value={offer.text} onChange={e => updateOffer('text', e.target.value)} aria-label="Descripción" /><input value={offer.action} onChange={e => updateOffer('action', e.target.value)} aria-label="Botón" /></div> : <div><p className="offer-tag">{offer.tag}</p><h2>{offer.title}</h2><p>{offer.text}</p><a className="button dark" href="#cotizacion">{offer.action} <span>↗</span></a></div>}</article><button onClick={() => setOfferIndex((offerIndex + 1) % offers.length)} aria-label="Siguiente oferta">→</button></div></section>

    <section className="section" id="empresa"><SectionHeading eyebrow="01 / QUIÉNES SOMOS" title="Logística con" accent="propósito." /><div className="split"><div className="large-copy">AT Logistics nació en <b>2020</b>, retomó y amplió operaciones en <b>2024</b>, e inició operaciones desde su sucursal física en Managua a inicios de <b>2026</b>.</div><div className="muted-copy"><p>Brindamos soluciones de logística y courier internacional para la recepción, traslado y entrega de compras y paquetes.</p><div className="values"><b>Compromiso</b><b>Responsabilidad</b><b>Transparencia</b><b>Puntualidad</b><b>Confianza</b><b>Excelencia en servicio</b></div></div></div><div className="mission-grid"><article><small>MISIÓN</small><p>Brindar soluciones logísticas internacionales eficientes, seguras y transparentes, garantizando cumplimiento, confianza y excelencia en cada envío.</p></article><article><small>VISIÓN</small><p>Consolidarnos como una empresa líder en soluciones logísticas internacionales en Nicaragua, reconocida por nuestra eficiencia operativa, innovación y servicio de alto nivel.</p></article></div></section>

    <section className="section services" id="servicios"><SectionHeading eyebrow="02 / SERVICIOS" title="Todo lo que" accent="necesitas." /><div className="card-grid">{services.map((service, i) => <article className="service-card" key={service}><span>0{i + 1}</span><h3>{service}</h3><p>Información próximamente disponible</p></article>)}</div></section>

    <section className="dark-section" id="proceso"><div className="section-heading"><p className="eyebrow">03 / CÓMO FUNCIONA</p><h2>Un proceso claro,<br /><span>de origen a destino.</span></h2></div><div className="steps">{['Envía tu compra a la dirección asignada', 'La bodega recibe y registra tracking y peso', 'Clasificamos y consolidamos según modalidad', 'Despachamos por vía aérea o marítima', 'Recibimos, verificamos y facturamos en Nicaragua', 'Te notificamos para retiro o delivery'].map((step, i) => <div key={step}><b>0{i + 1}</b><p>{step}</p></div>)}</div></section>

    <section className="section coverage"><SectionHeading eyebrow="04 / COBERTURA Y CLIENTES" title="Conectamos tus" accent="destinos." /><div className="coverage-grid"><div className="coverage-map"><span>USA</span><b>✦</b><span>NICARAGUA</span><small>Destino principal</small></div><div><h3>¿A quiénes atendemos?</h3><div className="pill-list">{clients.map(client => <span key={client}>{client}</span>)}</div><h3 className="subhead">Productos y mercancías</h3><p className="muted-copy">Compras de comercio electrónico, ropa, calzado, accesorios, artículos personales, electrónicos permitidos, repuestos, cosméticos y mercancía general autorizada.</p></div></div></section>

    <section className="gallery-section"><div className="gallery-copy"><p className="eyebrow">05 / NUESTRO ESPACIO</p><h2>Conoce nuestro<br /><span>punto de atención.</span></h2></div><div className="gallery-grid">{gallery.slice(1).map((image, i) => <img src={image} alt={`Espacio de AT Logistics ${i + 1}`} key={image} />)}</div></section>

    <section className="forms-section" id="cotizacion"><div className="form-intro"><p className="eyebrow">06 / COTIZACIÓN Y SERVICIO</p><h2>Hablemos de<br /><span>tu envío.</span></h2><p>Completa los datos principales y nuestro equipo podrá revisar tu solicitud.</p><a className="button primary" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></div><form className="quote-form" onSubmit={(e) => e.preventDefault()}><div className="form-row"><input required placeholder="Nombre completo" /><input placeholder="Empresa" /></div><div className="form-row"><input required type="tel" placeholder="Teléfono" /><input required type="email" placeholder="Correo electrónico" /></div><select defaultValue=""><option value="" disabled>Modalidad requerida</option><option>Aéreo</option><option>Marítimo</option><option>Delivery local</option></select><textarea placeholder="Cuéntanos sobre tu mercancía, origen y destino" rows={4} /><button className="button dark" type="submit">Enviar solicitud <span>↗</span></button></form></section>

    <section className="section contact-section" id="contacto"><SectionHeading eyebrow="07 / UBICACIÓN" title="Visítanos en" accent="Managua." /><div className="contact-layout"><div><p>Reparto San Juan, de La Mezquita 2 cuadras al lago, costado norte del Registro de la Propiedad, casa No. 106, segundo portón gris, Managua.</p><div className="hours"><b>HORARIO DE ATENCIÓN</b><span>Lunes a viernes · 8:30 a. m. – 5:00 p. m.</span><span>Sábados · 9:00 a. m. – 2:00 p. m.</span></div><a className="button primary" href={mapsUrl} target="_blank" rel="noreferrer">Cómo llegar en Google Maps <span>↗</span></a></div><div className="map-card"><span>AT LOGISTICS</span><b>Managua, Nicaragua</b><small>Casa No. 106 · Segundo portón gris</small><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir ubicación ↗</a></div></div></section>

    <section className="faq-section"><div><p className="eyebrow">08 / PREGUNTAS FRECUENTES</p><h2>Respuestas<br /><span>claras.</span></h2></div><div className="faq-list">{faq.map(question => <details key={question}><summary>{question}<span>+</span></summary><p>Información próximamente disponible. Esta respuesta podrá administrarse desde el futuro panel de AT Logistics.</p></details>)}</div></section>

    <section className="policy-section" id="politica"><div><p className="eyebrow">09 / POLÍTICA DE RETIRO</p><h2>Retira tu paquete<br /><span>a tiempo.</span></h2></div><div className="policy-card"><b>Paquetes no reclamados</b><p>Los paquetes deben retirarse dentro de los tres meses posteriores a su llegada y notificación. Transcurrido ese plazo sin que el cliente realice el retiro, el paquete se considerará abandonado y AT Logistics podrá tomarlo como pago por la ausencia de retiro.</p><small>Te recomendamos mantener tus datos de contacto actualizados y atender nuestras notificaciones.</small></div></section>

    <footer><a className="logo" href="#inicio"><b>AT</b><span>LOGISTICS</span></a><p>Soluciones logísticas internacionales eficientes, seguras y transparentes.</p><div><a href="https://www.instagram.com/atlogisticsnicaragua" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com/share/1MA1CDRKZJ/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://www.youtube.com/@ATLogisticsNicaragua" target="_blank" rel="noreferrer">YouTube ↗</a></div><small>© 2026 AT Logistics · Información sujeta a actualización</small></footer>
  </main>
}
