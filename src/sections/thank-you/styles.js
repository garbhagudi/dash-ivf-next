export const thankYouCss = `
  /* ── ROOT: CSS variables + page base — all scoped to #ty-root ── */
  #ty-root {
    --bg: #fef9f4;
    --primary: #c0452a;
    --primary-light: #e8704a;
    --gold: #c8963e;
    --soft: #fff4ee;
    --dark: #1e1210;
    --muted: #7a5c52;
    --white: #ffffff;
    --green: #25D366;
    --radius: 20px;

    background: var(--bg);
    font-family: 'DM Sans', sans-serif;
    color: var(--dark);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* noise texture overlay — fixed so it covers the viewport */
  #ty-root::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 0;
  }

  /* ── NAVBAR ── */
  #ty-root nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 48px;
    background: rgba(254,249,244,0.88);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(192,69,42,0.1);
  }
  #ty-root nav img { height: 44px; }
  #ty-root nav a.phone {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500; font-size: 15px;
    color: var(--primary); text-decoration: none;
    border: 1.5px solid var(--primary);
    padding: 8px 20px; border-radius: 50px;
    transition: all .25s;
  }
  #ty-root nav a.phone:hover { background: var(--primary); color: #fff; }

  /* ── HERO ── */
  #ty-root .hero {
    position: relative;
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    padding: 120px 24px 60px;
    overflow: hidden;
  }

  #ty-root .orb {
    position: absolute; border-radius: 50%;
    filter: blur(80px); opacity: .28; pointer-events: none;
  }
  #ty-root .orb-1 { width: 520px; height: 520px; background: #e8704a; top: -120px; right: -100px; animation: drift1 8s ease-in-out infinite alternate; }
  #ty-root .orb-2 { width: 380px; height: 380px; background: #c8963e; bottom: 40px; left: -80px; animation: drift2 10s ease-in-out infinite alternate; }
  #ty-root .orb-3 { width: 260px; height: 260px; background: #c0452a; top: 40%; left: 45%; animation: drift3 7s ease-in-out infinite alternate; }

  @keyframes drift1 { from{transform:translate(0,0)} to{transform:translate(-30px,40px)} }
  @keyframes drift2 { from{transform:translate(0,0)} to{transform:translate(40px,-30px)} }
  @keyframes drift3 { from{transform:translate(0,0)} to{transform:translate(-20px,20px)} }

  #ty-root .hero-inner {
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 64px; align-items: center;
    max-width: 1140px; width: 100%;
  }

  #ty-root .hero-text { animation: fadeUp .8s ease both; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }

  #ty-root .badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg,#fff4ee,#ffe4d4);
    border: 1.5px solid rgba(192,69,42,0.2);
    padding: 8px 18px; border-radius: 50px;
    font-size: 13px; font-weight: 500; color: var(--primary);
    margin-bottom: 28px;
    animation: fadeUp .8s .1s ease both;
  }
  #ty-root .badge span { font-size: 18px; }

  /* Scoped with #ty-root to beat Tailwind Preflight's h1 { font-size: inherit } reset */
  #ty-root h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 5.5vw, 68px);
    line-height: 1.08; font-weight: 700;
    color: var(--dark);
    margin-bottom: 20px;
    animation: fadeUp .8s .2s ease both;
  }
  #ty-root h1 em { font-style: italic; color: var(--primary); }

  #ty-root .subtext {
    font-size: 17px; line-height: 1.7;
    color: var(--muted); max-width: 440px;
    margin-bottom: 40px;
    animation: fadeUp .8s .3s ease both;
  }

  #ty-root .cta-row {
    display: flex; gap: 16px; flex-wrap: wrap;
    animation: fadeUp .8s .4s ease both;
  }
  #ty-root .btn {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 16px 32px; border-radius: 50px;
    font-size: 15px; font-weight: 500;
    text-decoration: none; transition: all .25s; cursor: pointer; border: none;
  }
  #ty-root .btn-whatsapp {
    background: var(--green); color: #fff;
    box-shadow: 0 8px 30px rgba(37,211,102,.35);
  }
  #ty-root .btn-whatsapp:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(37,211,102,.45); }
  #ty-root .btn-whatsapp svg { width: 22px; height: 22px; fill: #fff; }

  #ty-root .btn-call {
    background: var(--white); color: var(--primary);
    border: 1.5px solid rgba(192,69,42,0.3);
  }
  #ty-root .btn-call:hover { background: var(--soft); transform: translateY(-2px); }
  #ty-root .btn-call svg { width: 18px; height: 18px; stroke: var(--primary); fill: none; }

  #ty-root .hero-image {
    position: relative;
    animation: fadeUp .8s .3s ease both;
  }
  #ty-root .hero-image img {
    width: 100%; border-radius: 28px;
    box-shadow: 0 32px 80px rgba(30,18,16,.18);
    display: block;
  }
  #ty-root .floating-card {
    position: absolute; bottom: -20px; left: -28px;
    background: var(--white); border-radius: 16px;
    padding: 16px 22px;
    box-shadow: 0 12px 40px rgba(30,18,16,.14);
    display: flex; align-items: center; gap: 14px;
    animation: floatY 4s ease-in-out infinite;
  }
  @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  #ty-root .fc-icon { width: 44px; height: 44px; border-radius: 12px; background: #fff4ee; display:flex; align-items:center; justify-content:center; font-size:22px; }
  #ty-root .fc-text { line-height: 1.3; }
  #ty-root .fc-text strong { font-size: 15px; color: var(--dark); display:block; }
  #ty-root .fc-text span { font-size: 12px; color: var(--muted); }

  #ty-root .floating-card-2 {
    position: absolute; top: 20px; right: -24px;
    background: var(--primary); color: #fff;
    border-radius: 14px; padding: 12px 18px;
    box-shadow: 0 12px 30px rgba(192,69,42,.3);
    animation: floatY 5s 1s ease-in-out infinite;
    text-align: center;
  }
  #ty-root .fc2-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; }
  #ty-root .fc2-label { font-size: 11px; opacity: .85; letter-spacing: .5px; text-transform: uppercase; }

  #ty-root .divider { width: 100%; height: 1px; background: linear-gradient(to right, transparent, rgba(192,69,42,.15), transparent); margin: 0 auto; }

  /* ── STEPS ── */
  #ty-root .section {
    max-width: 1140px; margin: 0 auto; padding: 80px 24px;
    position: relative; z-index: 1;
  }
  #ty-root .section-label {
    font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--gold); font-weight: 600; margin-bottom: 12px;
  }
  #ty-root .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 3.5vw, 42px);
    font-weight: 700; line-height: 1.2;
    color: var(--dark); margin-bottom: 48px;
  }
  #ty-root .section-title span { color: var(--primary); font-style: italic; }

  #ty-root .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
  }
  #ty-root .step-card {
    background: var(--white); border-radius: var(--radius);
    padding: 32px 28px;
    box-shadow: 0 4px 20px rgba(30,18,16,.06);
    border: 1px solid rgba(192,69,42,.08);
    transition: transform .25s;
  }
  #ty-root .step-card:hover { transform: translateY(-4px); }
  #ty-root .step-num {
    font-family: 'Playfair Display', serif;
    font-size: 42px; font-weight: 700;
    color: rgba(192,69,42,.12); line-height: 1; margin-bottom: 16px;
  }
  #ty-root .step-icon { font-size: 28px; margin-bottom: 12px; }
  #ty-root .step-card h3 { font-size: 17px; font-weight: 600; color: var(--dark); margin-bottom: 8px; }
  #ty-root .step-card p { font-size: 14px; color: var(--muted); line-height: 1.6; }

  /* ── WHATSAPP STRIP ── */
  #ty-root .wa-strip {
    position: relative; z-index: 1;
    background: linear-gradient(135deg, #0d4d2b 0%, #1a7a45 60%, #25a85a 100%);
    padding: 60px 24px;
    overflow: hidden;
  }
  #ty-root .wa-strip::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 70% 50%, rgba(255,255,255,.06) 0%, transparent 70%);
  }
  #ty-root .wa-strip-inner {
    max-width: 860px; margin: 0 auto; text-align: center;
    position: relative; z-index: 1;
  }
  #ty-root .wa-big-icon {
    width: 72px; height: 72px; margin: 0 auto 24px;
    background: rgba(255,255,255,.15);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    animation: pulse 2.5s ease-in-out infinite;
  }
  @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,.25)} 50%{box-shadow:0 0 0 18px rgba(255,255,255,0)} }
  #ty-root .wa-big-icon svg { width: 38px; height: 38px; fill: #fff; }
  #ty-root .wa-strip h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 3.5vw, 40px);
    color: #fff; font-weight: 700; margin-bottom: 14px; line-height: 1.2;
  }
  #ty-root .wa-strip p { color: rgba(255,255,255,.8); font-size: 16px; margin-bottom: 32px; }
  #ty-root .btn-wa-big {
    display: inline-flex; align-items: center; gap: 12px;
    background: #fff; color: #0d4d2b;
    padding: 18px 40px; border-radius: 50px;
    font-size: 16px; font-weight: 600;
    text-decoration: none;
    box-shadow: 0 10px 40px rgba(0,0,0,.2);
    transition: all .3s;
  }
  #ty-root .btn-wa-big:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 18px 50px rgba(0,0,0,.28); }
  #ty-root .btn-wa-big svg { width: 24px; height: 24px; fill: #25D366; }

  /* ── VIDEOS ── */
  #ty-root .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 28px;
  }
  #ty-root .video-card {
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--white);
    box-shadow: 0 8px 32px rgba(30,18,16,.08);
    transition: transform .3s, box-shadow .3s;
  }
  #ty-root .video-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(30,18,16,.14); }
  #ty-root .video-info { padding: 20px 24px 24px; }
  #ty-root .video-tag {
    display: inline-block; font-size: 11px; font-weight: 600;
    letter-spacing: 1px; text-transform: uppercase;
    color: var(--primary); background: var(--soft);
    padding: 4px 12px; border-radius: 50px; margin-bottom: 10px;
  }
  #ty-root .video-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 600; color: var(--dark);
    line-height: 1.4;
  }
  #ty-root .video-unavailable {
    aspect-ratio: 16 / 9;
    background: var(--soft);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 10px; color: var(--muted); font-size: 14px;
  }
  #ty-root .video-unavailable span { font-size: 36px; }

  /* ── FOOTER ── */
  #ty-root footer {
    position: relative; z-index: 1;
    background: var(--dark); color: rgba(255,255,255,.5);
    text-align: center; padding: 28px 24px;
    font-size: 13px;
  }
  #ty-root footer a { color: rgba(255,255,255,.7); text-decoration: none; }
  #ty-root footer a:hover { color: #fff; }

  /* ── RESPONSIVE ── */
  @media(max-width: 768px) {
    #ty-root nav { padding: 14px 20px; }
    #ty-root .hero-inner { grid-template-columns: 1fr; gap: 40px; }
    #ty-root .hero-image { display: none; }
    #ty-root .floating-card, #ty-root .floating-card-2 { display: none; }
  }
`;
