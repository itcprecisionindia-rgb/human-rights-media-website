import { FormEvent, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ArrowDownRight, ArrowUpRight, Check, Mail, MapPin, Menu, Mic2, Play, Send, Shield, Users, Wifi, X } from 'lucide-react';

const socialPaths: Record<string, string> = {
  Instagram: 'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.43 8.5 3.42 8.85 3.42 12s0 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7-.16-.43-.36-.74-.68-1.06-.32-.32-.63-.52-1.06-.68-.32-.13-.8-.28-1.7-.32C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 1.8A3.14 3.14 0 1 0 15.14 12 3.14 3.14 0 0 0 12 8.86Zm5.14-2.76a1.15 1.15 0 1 1-1.15-1.15 1.15 1.15 0 0 1 1.15 1.15Z',
  Facebook: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z',
  Linkedin: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z',
  Youtube: 'M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z',
};

function SocialIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d={socialPaths[name]} /></svg>;
}

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const gallery = [
  { src: 'https://images.pexels.com/photos/8898645/pexels-photo-8898645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Community advocates standing together with human rights signs', size: 'large' },
  { src: 'https://images.pexels.com/photos/6257784/pexels-photo-6257784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'People raising signs for justice and equality', size: 'small' },
  { src: 'https://images.pexels.com/photos/34355589/pexels-photo-34355589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Humanity message on a sign at a peaceful rally', size: 'small' },
  { src: 'https://images.pexels.com/photos/6054385/pexels-photo-6054385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'LGBTQ rights community gathering', size: 'wide' },
];

const principles = [
  { icon: Shield, number: '01', title: 'Dignity first', text: 'Every person deserves to be seen, heard, and treated with dignity.' },
  { icon: Users, number: '02', title: 'People powered', text: 'We believe real change grows from informed, courageous communities.' },
  { icon: Wifi, number: '03', title: 'Truth in public', text: 'We make space for honest stories that move conversations forward.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [path, setPath] = useState(window.location.hash || '#home');

  const navigate = (nextPath: string) => {
    window.location.hash = nextPath;
    setPath(nextPath);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError('');
    const form = new FormData(event.currentTarget);
    const { error: insertError } = await supabase.from('contact_submissions').insert({
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      subject: String(form.get('subject') || '').trim(),
      message: String(form.get('message') || '').trim(),
    });
    setSending(false);
    if (insertError) { setError('We could not send your message. Please try again.'); return; }
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const isHome = path === '#home' || path === '#';
  return <div className="min-h-screen bg-white text-ink">
    <div className="flex justify-center bg-white px-6 pt-6">
      <button onClick={() => navigate('#home')} aria-label="Go to homepage" className="group">
        <img src="/images/PHOTO-2026-08-05-18-57-39.jpg" alt="Human Rights and Social Justice Media emblem" className="h-20 w-20 rounded-full object-contain transition-transform group-hover:scale-105 lg:h-24 lg:w-24" />
      </button>
    </div>
    <header className="sticky top-0 z-50 border-y border-slate-200 bg-white/95 text-navy backdrop-blur-lg">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-3.5 lg:px-10">
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {[['Home', '#home'], ['About us', '#about'], ['Human rights', '#rights'], ['Gallery', '#gallery'], ['Contact', '#contact']].map(([label, href]) => <button key={href} onClick={() => navigate(href)} className={`transition-colors hover:text-red ${path === href ? 'text-red' : 'text-navy/70'}`}>{label}</button>)}
        </nav>
        <button onClick={() => navigate('#contact')} className="absolute right-6 hidden items-center gap-2 rounded-full bg-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-105 lg:flex lg:right-10">Speak with us <ArrowUpRight size={15} /></button>
        <button className="absolute right-6 text-navy lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">{[['Home', '#home'], ['About us', '#about'], ['Human rights', '#rights'], ['Gallery', '#gallery'], ['Contact', '#contact']].map(([label, href]) => <button key={href} onClick={() => navigate(href)} className="block w-full border-b border-slate-100 py-3 text-left text-sm font-semibold text-navy/80">{label}</button>)}</nav>}
    </header>

    {isHome ? <main>
      <section className="hero-pattern relative flex min-h-[620px] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-white lg:min-h-[680px]">
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full border border-white/10 lg:h-[460px] lg:w-[460px]" /><div className="absolute -left-20 bottom-10 h-56 w-56 rounded-full border border-red/25 lg:h-[340px] lg:w-[340px]" />
        <div className="reveal relative max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-red"><span className="h-px w-10 bg-red" />The right to be heard<span className="h-px w-10 bg-red" /></div>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.12] tracking-[-.01em] sm:text-5xl lg:text-[64px]">Human Rights and<br />Social Justice Media</h1>
          <p className="mt-6 font-display text-lg italic tracking-wide text-red sm:text-xl">Justice • Equality • Humanity</p>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">Independent media amplifying truth, protecting dignity, and making justice impossible to ignore.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4"><button onClick={() => navigate('#about')} className="group flex items-center gap-3 rounded-full bg-red px-6 py-3.5 text-sm font-bold transition-all hover:bg-red-dark">About us <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button><button onClick={() => navigate('#contact')} className="flex items-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold transition-all hover:border-white hover:bg-white hover:text-navy">Contact <ArrowDownRight size={17} /></button></div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-paper"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:grid-cols-3 lg:px-10">{principles.map(({ icon: Icon, number, title, text }) => <div key={number} className="flex gap-5"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white"><Icon size={19} /></div><div><span className="text-xs font-bold text-red">{number}</span><h3 className="mt-1 font-display text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p></div></div>)}</div></section>
      <AboutSection navigate={navigate} />
      <RightsSection navigate={navigate} />
      <GallerySection navigate={navigate} />
      <ContactSection submitContact={submitContact} submitted={submitted} sending={sending} error={error} />
    </main> : <PageView path={path} navigate={navigate} submitContact={submitContact} submitted={submitted} sending={sending} error={error} />}

    <footer className="bg-navy text-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10"><div><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-red bg-white"><img src="/images/PHOTO-2026-08-05-18-57-39.jpg" alt="Organization emblem" className="h-full w-full object-cover" /></div><span className="font-display text-sm">Human Rights & Social Justice</span></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">Independent media for a more just, equal, and humane world.</p><div className="mt-6 flex gap-3">{Object.keys(socialPaths).map((name) => <a href="#contact" key={name} aria-label={name} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-red hover:bg-red"><SocialIcon name={name} /></a>)}</div></div><FooterColumn title="Explore" links={['About us', 'Human rights', 'Gallery']} navigate={navigate} /><FooterColumn title="Connect" links={['Contact', 'Partnerships', 'Press enquiries']} navigate={navigate} /><div><p className="text-xs font-bold uppercase tracking-[.2em] text-red">Our promise</p><p className="mt-4 font-display text-lg leading-relaxed text-white/85">“No story is too small when dignity is at stake.”</p></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Human Rights and Social Justice Media</span><span>Justice <b className="px-2 text-red">•</b> Equality <b className="px-2 text-red">•</b> Humanity</span></div></div></footer>
    <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="floating fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 transition-transform hover:scale-110"><svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M20.5 3.5A11.84 11.84 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.58 5.93L.08 24l6.35-1.66a11.85 11.85 0 0 0 5.62 1.43h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.14-3.43-8.4Zm-8.45 18.2a9.8 9.8 0 0 1-5-.94l-.36-.21-3.77.99 1-3.68-.23-.38a9.82 9.82 0 1 1 8.36 4.22Zm5.38-7.36c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.58-.9-2.17-.24-.57-.48-.49-.65-.5h-.55c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.19 2.06 3.15 4.99 4.42.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" /></svg></a>
  </div>;
}

function AboutSection({ navigate }: { navigate: (path: string) => void }) { return <section id="about" className="grid-lines overflow-hidden"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-red">Who we are</p><h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">The lens is<br /><span className="text-red">human.</span></h2></div><div><p className="max-w-2xl text-2xl leading-relaxed text-navy/85">We are a media organization built around one simple belief: every person has the right to live with dignity, safety, and a voice.</p><p className="mt-7 max-w-2xl leading-relaxed text-slate-500">Through field reporting, community conversations, and visual storytelling, we bring overlooked realities into the public record. We connect people to the issues that shape their lives and the movements building something better.</p><button onClick={() => navigate('#about')} className="mt-8 flex items-center gap-3 text-sm font-bold text-red transition-colors hover:text-red-dark">Read our full story <ArrowUpRight size={16} /></button></div></div></section> }
function RightsSection({ navigate }: { navigate: (path: string) => void }) { return <section id="rights" className="bg-navy text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10 lg:py-32"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-red">What we stand for</p><h2 className="mt-5 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Human rights are<br /><span className="text-red">everyone's rights.</span></h2><p className="mt-7 max-w-lg leading-relaxed text-white/60">From freedom of expression to equal access and safety, our work keeps the principles of human rights visible, urgent, and close to home.</p><button onClick={() => navigate('#rights')} className="mt-8 flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-bold transition-colors hover:border-white hover:bg-white hover:text-navy">Explore our focus areas <ArrowUpRight size={16} /></button></div><div className="grid gap-3 sm:grid-cols-2">{['Freedom & voice', 'Equal opportunity', 'Gender justice', 'Community safety'].map((item, i) => <div key={item} className={`group relative flex min-h-32 items-end overflow-hidden border border-white/10 p-5 transition-colors hover:border-red ${i === 0 ? 'bg-red' : 'bg-white/5'}`}><span className="text-lg font-semibold">{item}</span><ArrowUpRight size={18} className="absolute right-5 top-5 opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>)}</div></div></section> }
function GallerySection({ navigate }: { navigate: (path: string) => void }) { return <section id="gallery" className="bg-paper"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-red">From the field</p><h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Witness the work.</h2></div><button onClick={() => navigate('#gallery')} className="flex items-center gap-3 text-sm font-bold text-red">View all stories <ArrowUpRight size={16} /></button></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{gallery.map((item, i) => <div key={item.src} className={`group relative overflow-hidden bg-navy ${item.size === 'large' ? 'sm:row-span-2 lg:col-span-2' : item.size === 'wide' ? 'lg:col-span-2' : ''} ${item.size === 'large' ? 'aspect-[4/5] sm:aspect-auto' : 'aspect-[4/3]'}`}><img src={item.src} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-75" /><div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-70" /><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between"><span className="max-w-[80%] text-sm font-semibold text-white">{['Voices in motion', 'Equal in every sense', 'Humanity in public', 'Together, forward'][i]}</span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-red text-white"><ArrowUpRight size={16} /></span></div></div>)}</div></div></section> }
function ContactSection({ submitContact, submitted, sending, error }: { submitContact: (event: FormEvent<HTMLFormElement>) => Promise<void>; submitted: boolean; sending: boolean; error: string }) { return <section id="contact" className="bg-white"><div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-red">Start a conversation</p><h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">Your story<br />matters.</h2><p className="mt-6 max-w-sm leading-relaxed text-slate-500">Have a story, partnership idea, or question? Our door is open.</p><div className="mt-10 space-y-5 text-sm text-navy"><div className="flex items-center gap-4"><Mail className="text-red" size={18} />hello@hrsjmedia.org</div><div className="flex items-center gap-4"><MapPin className="text-red" size={18} />New Delhi · Working everywhere</div></div></div><div className="border-t-4 border-red bg-paper p-6 sm:p-10">{submitted ? <div className="flex min-h-72 flex-col items-center justify-center text-center"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white"><Check size={26} /></div><h3 className="mt-5 font-display text-2xl text-navy">Message received.</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">Thank you for reaching out. Someone from our team will be in touch soon.</p></div> : <form onSubmit={submitContact} className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-bold uppercase tracking-wider text-navy/60">Your name<input required name="name" minLength={2} className="mt-2 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-navy" /></label><label className="text-xs font-bold uppercase tracking-wider text-navy/60">Email address<input required type="email" name="email" className="mt-2 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-navy" /></label><label className="text-xs font-bold uppercase tracking-wider text-navy/60 sm:col-span-2">Subject<input required name="subject" className="mt-2 w-full border-b border-slate-300 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-navy" /></label><label className="text-xs font-bold uppercase tracking-wider text-navy/60 sm:col-span-2">Your message<textarea required name="message" minLength={10} rows={4} className="mt-2 w-full resize-none border-b border-slate-300 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-navy" /></label>{error && <p className="text-sm text-red sm:col-span-2">{error}</p>}<button disabled={sending} className="flex w-fit items-center gap-3 rounded-full bg-red px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-dark disabled:opacity-60 sm:col-span-2">{sending ? 'Sending...' : 'Send message'} <Send size={16} /></button></form>}</div></div></section> }
function FooterColumn({ title, links, navigate }: { title: string; links: string[]; navigate: (path: string) => void }) { return <div><p className="text-xs font-bold uppercase tracking-[.2em] text-red">{title}</p><div className="mt-4 space-y-3">{links.map((link) => <button key={link} onClick={() => navigate(link === 'Contact' ? '#contact' : link === 'Gallery' ? '#gallery' : link === 'Human rights' ? '#rights' : '#about')} className="block text-sm text-white/55 transition-colors hover:text-white">{link}</button>)}</div></div> }
function PageView({ path, navigate, submitContact, submitted, sending, error }: { path: string; navigate: (path: string) => void; submitContact: (event: FormEvent<HTMLFormElement>) => Promise<void>; submitted: boolean; sending: boolean; error: string }) { if (path === '#contact') return <main><ContactSection submitContact={submitContact} submitted={submitted} sending={sending} error={error} /></main>; if (path === '#gallery') return <main><GallerySection navigate={navigate} /></main>; if (path === '#rights') return <main><RightsSection navigate={navigate} /></main>; return <main><AboutSection navigate={navigate} /><RightsSection navigate={navigate} /><GallerySection navigate={navigate} /></main>; }

export default App;
