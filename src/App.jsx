import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, GraduationCap, Headphones, Layers, Star, BookOpen, AudioLines, Play, Mail, MessageSquare, Download, CalendarDays } from 'lucide-react'

const logoUrl = '/assets/img/logo-ruben.png'
const instructorPhotoUrl = '/assets/img/ruben-profile-1200.jpg'
const FALLBACK_IMG = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

const levels = [
  { id:'a0', title:'A0 – Inicio absoluto', pitch:'Empieza desde cero...', hours:20,
    outcomes:[ 'Alfabeto y spelling','Saludos y presentaciones','Números y hora','be / have got / there is-are','Vocabulario: familia, casa, ciudad' ],
    sampleAudio:'/assets/audio/a0_greetings.mp3' },
  { id:'a1', title:'A1 – Principiante', pitch:'Gana confianza...', hours:40,
    outcomes:[ 'Present Simple vs Continuous','Can/Can\'t, WH- questions','Vocabulario: comida, compras','Funciones: direcciones, restaurante','Pronunciación: word stress' ],
    sampleAudio:'/assets/audio/a1_restaurant.mp3' },
  { id:'a2', title:'A2 – Básico', pitch:'Consolida estructuras...', hours:60,
    outcomes:[ 'Past Simple/Continuous','Comparatives & Superlatives','Countable/Uncountable','Vocabulario: viajes, trabajo','Funciones: reservas, entrevistas' ],
    sampleAudio:'/assets/audio/a2_travel_booking.mp3' },
  { id:'b1', title:'B1 – Intermedio', pitch:'Argumenta y resume...', hours:80,
    outcomes:[ 'Present Perfect (+Continuous)','First/Second Conditionals','Reported Speech, Passive (basic)','Vocabulario: estudios, salud','Quejas formales, presentaciones' ],
    sampleAudio:'/assets/audio/b1_presentation.mp3' },
  { id:'b2', title:'B2 – Intermedio alto', pitch:'Domina el discurso...', hours:120,
    outcomes:[ 'Relative clauses, clefts','Modals of deduction','Third & Mixed Conditionals','Passive (advanced), markers','Writing: essays, reports, proposals' ],
    sampleAudio:'/assets/audio/b2_debate.mp3' },
]

const features = [
  { icon: Headphones, title:'Audios MP3 reales', desc:'Voz británica profesional, descargables y embebidos en cada lección.' },
  { icon: BookOpen, title:'Flashcards imprimibles', desc:'Bloques temáticos A0–B2 en PDF a doble cara (65×95 mm).' },
  { icon: Layers, title:'Ruta completa A0→B2', desc:'Plan guiado, evaluación continua y objetivos por nivel.' },
  { icon: GraduationCap, title:'Docente certificado', desc:'Rubén Muñoz — SSCE0110 (FPE) y SSCE18CCC (Diseño instruccional).' },
]

function ImageWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false)
  return <img src={failed ? FALLBACK_IMG : src} alt={alt} onError={()=>setFailed(true)} className={className} />
}

function StarRating(){ return <span aria-label='5/5'>{Array.from({length:5}).map((_,i)=><Star key={i} size={16} />)}</span> }

function LevelCard({ level }){
  return (
    <div style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16, display:'flex', flexDirection:'column', gap:12}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
        <h3 style={{margin:0}}>{level.title}</h3>
        <span style={{fontSize:12, background:'#eef2ff', padding:'2px 8px', borderRadius:999}}>{level.hours} h</span>
      </div>
      <p style={{marginTop:0, color:'#475569'}}>{level.pitch}</p>
      <ul style={{marginTop:0, paddingLeft:18, color:'#111827'}}>
        {level.outcomes.map((o,i)=><li key={i} style={{marginBottom:4}}>{o}</li>)}
      </ul>
      {level.sampleAudio && <div style={{display:'flex', alignItems:'center', gap:8}}><AudioLines size={16}/> <span style={{fontSize:14, fontWeight:600}}>Audio de muestra</span></div>}
      {level.sampleAudio && <audio controls style={{width:'100%'}}><source src={level.sampleAudio} type='audio/mpeg' /></audio>}
      <div style={{display:'flex', gap:8, marginTop:8}}>
        <button style={{padding:'8px 12px', borderRadius:8, background:'#eef2ff', border:'1px solid #c7d2fe', cursor:'pointer'}}>
          <Play size={16} style={{verticalAlign:'middle', marginRight:6}}/> Probar lección
        </button>
        <button style={{padding:'8px 12px', borderRadius:8, background:'#1d4ed8', color:'white', border:'1px solid #1e40af', cursor:'pointer'}}>Empezar nivel</button>
      </div>
    </div>
  )
}

export default function App(){
  const ld = useMemo(()=>({
    '@context':'https://schema.org', '@type':'Course', name:'Curso online de Inglés A0–B2',
    description:'Aprende inglés desde A0 hasta B2 con audios MP3, flashcards y tutoría.',
    provider:{ '@type':'Person', name:'Rubén Muñoz Valadés', jobTitle:'Docente FPE (SSCE0110) y Diseño Instruccional (SSCE18CCC)', email:'rumuva1492@gmail.com' }
  }), [])

  return (
    <div style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif'}}>
      <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}} />

      <header style={{position:'sticky', top:0, zIndex:40, background:'rgba(255,255,255,0.85)', backdropFilter:'blur(6px)', borderBottom:'1px solid #e5e7eb'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'10px 16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <ImageWithFallback src={logoUrl} alt='Logo Rubén Muñoz' className='h-8' />
            <span style={{fontWeight:600}}>Inglés A0→B2</span>
          </div>
          <nav style={{display:'flex', gap:16, fontSize:14}}>
            <a href='#plan'>Plan</a>
            <a href='#instructor'>Docente</a>
            <a href='#pricing'>Precios</a>
            <a href='#faq'>FAQ</a>
          </nav>
        </div>
      </header>

      <section style={{background:'linear-gradient(135deg, #eff6ff, #ffffff 60%, #f0f9ff)'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'56px 16px', display:'grid', gridTemplateColumns:'1.3fr 0.7fr', gap:24}}>
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} style={{fontSize:40, fontWeight:800, margin:'0 0 16px'}}>Curso online de Inglés A0 → B2</motion.h1>
            <p style={{fontSize:18, color:'#475569', maxWidth:640}}>Aprende desde cero hasta un nivel B2 sólido con lecciones guiadas, audios MP3 reales, flashcards imprimibles y feedback humano. Diseñado y tutorizado por <strong>Rubén Muñoz Valadés</strong>, Docente de FPE (<strong>SSCE0110</strong>) y especialista en <strong>Diseño Instruccional SSCE18CCC</strong>.</p>
            <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:12}}>
              {['A0–A2 fundamentos','B1–B2 dominio','MP3 voz británica','Flashcards PDF'].map((t,i)=> <span key={i} style={{fontSize:14, background:'#f1f5f9', padding:'4px 10px', borderRadius:999}}>{t}</span>)}
            </div>
            <div style={{display:'flex', gap:10, marginTop:18}}>
              <button style={{padding:'12px 16px', borderRadius:10, background:'#1d4ed8', color:'#fff', border:'1px solid #1e40af', cursor:'pointer'}}><GraduationCap size={18} style={{verticalAlign:'middle', marginRight:8}}/> Empezar gratis</button>
              <button style={{padding:'12px 16px', borderRadius:10, background:'#fff', border:'1px solid #e5e7eb', cursor:'pointer'}}><Download size={18} style={{verticalAlign:'middle', marginRight:8}}/> Descargar muestra</button>
            </div>
          </div>
          <div>
            <div style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
              <h3 style={{marginTop:0, display:'flex', alignItems:'center', gap:8}}><MessageSquare size={18}/> Reserva tu plaza</h3>
              <p style={{marginTop:0, color:'#64748b'}}>Te respondo en 24 h</p>
              <form onSubmit={(e)=>{e.preventDefault(); alert('¡Gracias! Te contacto por email.')}} style={{display:'grid', gap:10}}>
                <input placeholder='Nombre y apellidos' required style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}}/>
                <input type='email' placeholder='Email' required style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}}/>
                <textarea placeholder='Tu objetivo (p.ej., obtener B2 en 3 meses)' style={{padding:10, border:'1px solid #e5e7eb', borderRadius:8}}/>
                <button type='submit' style={{padding:'10px 12px', borderRadius:8, background:'#1d4ed8', color:'#fff', border:'1px solid #1e40af'}}> <Mail size={16} style={{verticalAlign:'middle', marginRight:6}}/> Solicitar acceso</button>
                <small style={{color:'#94a3b8'}}>* Usamos tu email solo para gestionar tu acceso al curso.</small>
              </form>
              <div style={{fontSize:12, color:'#94a3b8', display:'flex', alignItems:'center', gap:6, marginTop:8}}><CalendarDays size={12}/> Inicio continuo · Ritmo flexible · Tutorización semanal</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{maxWidth:1120, margin:'0 auto', padding:'32px 16px'}}>
        <h2 style={{fontSize:28, fontWeight:800, textAlign:'center'}}>¿Por qué este curso?</h2>
        <p style={{textAlign:'center', color:'#64748b'}}>Una ruta clara de A0 a B2 con audio real, práctica guiada y diseño instruccional probado.</p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12, marginTop:16}}>
          {features.map((f,i)=> (
            <div key={i} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
              <div style={{display:'flex', alignItems:'center', gap:8, fontWeight:600}}>{React.createElement(f.icon, {size:18})} {f.title}</div>
              <p style={{fontSize:14, color:'#475569'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='plan' style={{maxWidth:1120, margin:'0 auto', padding:'32px 16px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
          <h2 style={{fontSize:28, fontWeight:800}}>Plan de estudios A0→B2</h2>
          <button style={{padding:'8px 12px', borderRadius:8, background:'#fff', border:'1px solid #e5e7eb', cursor:'pointer'}}><Download size={16} style={{verticalAlign:'middle', marginRight:6}}/> Descargar temario (PDF)</button>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:12, marginTop:16}}>
          {levels.map(l => <LevelCard key={l.id} level={l} />)}
        </div>
      </section>

      <section id='instructor' style={{maxWidth:1120, margin:'0 auto', padding:'32px 16px', display:'grid', gridTemplateColumns:'0.9fr 1.1fr', gap:18, alignItems:'center'}}>
        <ImageWithFallback src={instructorPhotoUrl} alt='Rubén Muñoz Valadés' className='w-full' />
        <div>
          <h2 style={{fontSize:28, fontWeight:800, marginTop:0}}>Tu docente: Rubén Muñoz Valadés</h2>
          <p style={{color:'#64748b'}}>Docente de Formación Profesional para el Empleo <strong>(SSCE0110)</strong> y especialista en <strong>Diseño Instruccional (SSCE18CCC)</strong>. Experiencia impartiendo competencias digitales e inglés práctico para la vida real y el trabajo.</p>
          <ul style={{fontSize:14}}>
            <li><Check size={16} style={{verticalAlign:'middle', marginRight:6}}/> Metodología por tareas: hablar, escuchar, escribir y leer desde el día 1.</li>
            <li><Check size={16} style={{verticalAlign:'middle', marginRight:6}}/> Materiales descargables: flashcards, guías y audios MP3.</li>
            <li><Check size={16} style={{verticalAlign:'middle', marginRight:6}}/> Feedback humano con rúbricas B1–B2 y simulacros.</li>
          </ul>
        </div>
      </section>

      <section id='pricing' style={{maxWidth:1120, margin:'0 auto', padding:'32px 16px'}}>
        <h2 style={{fontSize:28, fontWeight:800, textAlign:'center'}}>Elige tu plan</h2>
        <p style={{textAlign:'center', color:'#64748b'}}>Empieza gratis y sube de plan cuando quieras. Sin permanencia.</p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12, marginTop:16}}>
          {[{name:'Gratis', price:'0 €', includes:['Acceso A0–A1 de muestra','1 unidad con MP3','Flashcards demo'], cta:'Empezar'},
            {name:'Completo A0–B2', price:'19 € / mes', includes:['Todo el contenido A0–B2','MP3 descargables','Feedback semanal'], cta:'Unirme ahora'},
            {name:'Mentoría B2', price:'59 € / mes', includes:['Corrección de writings','Simulacros speaking','Plan personalizado'], cta:'Quiero mentoría'}]
            .map((p,i)=> (
            <div key={i} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16}}>
              <h3 style={{marginTop:0}}>{p.name}</h3>
              <div style={{fontSize:22, fontWeight:800}}>{p.price}</div>
              <ul style={{fontSize:14}}>{p.includes.map((it,j)=><li key={j}><Check size={14} style={{verticalAlign:'middle', marginRight:6}}/>{it}</li>)}</ul>
              <button style={{width:'100%', padding:'10px 12px', borderRadius:8, background:'#1d4ed8', color:'#fff', border:'1px solid #1e40af', cursor:'pointer'}}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      <section id='faq' style={{maxWidth:1120, margin:'0 auto', padding:'32px 16px'}}>
        <h2 style={{fontSize:28, fontWeight:800, textAlign:'center'}}>Preguntas frecuentes</h2>
        <details><summary>¿Puedo empezar desde cero absoluto?</summary><p>Sí. El nivel A0 está diseñado para quienes nunca han estudiado inglés.</p></details>
        <details><summary>¿Incluye preparación específica B2?</summary><p>Sí. El tramo B2 cubre speaking, writing, listening y reading con simulacros.</p></details>
        <details><summary>¿Hay materiales descargables?</summary><p>Sí: PDFs de lecciones, flashcards, guías de gramática y audios MP3.</p></details>
        <details><summary>¿Cómo se evalúa el progreso?</summary><p>Con quizzes por unidad, tareas prácticas y rúbricas por nivel.</p></details>
      </section>

      <footer style={{borderTop:'1px solid #e5e7eb'}}>
        <div style={{maxWidth:1120, margin:'0 auto', padding:'24px 16px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12}}>
          <div>
            <ImageWithFallback src={logoUrl} alt='Logo Rubén Muñoz' className='h-10' />
            <p style={{fontSize:12, color:'#64748b'}}>© {new Date().getFullYear()} Rubén Muñoz. Todos los derechos reservados.</p>
          </div>
          <div>
            <p style={{fontWeight:600}}>Contacto</p>
            <p style={{fontSize:14}}>Email: rumuva1492@gmail.com</p>
            <p style={{fontSize:14}}>Mairena del Aljarafe (Sevilla)</p>
          </div>
          <div>
            <p style={{fontWeight:600}}>Legal</p>
            <ul style={{fontSize:14, color:'#64748b'}}>
              <li>Aviso legal</li>
              <li>Política de privacidad</li>
              <li>Política de cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
