// Interactive floating canvas particles & bokeh
export function initCanvasParticles(canvasId = 'cinemaFxCanvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const handleResize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize);

  const particles = [];
  const count = Math.min(55, Math.floor(w / 30));
  for (let i = 0; i < count; i++) {
    const rubyHues = [348, 354, 358, 4, 12];
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.8,
      dx: (Math.random() - 0.5) * 0.45,
      dy: (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.35 + 0.1,
      hue: rubyHues[Math.floor(Math.random() * rubyHues.length)]
    });
  }

  let mouseX = w / 2, mouseY = h / 2;
  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  let animId;
  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (let p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      const dist = Math.hypot(mouseX - p.x, mouseY - p.y);
      if (dist < 140) {
        p.x += (p.x - mouseX) * 0.015;
        p.y += (p.y - mouseY) * 0.015;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 85%, 62%, ${p.alpha})`;
      ctx.fill();
    }
    animId = requestAnimationFrame(animate);
  }
  animate();

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', handleMouseMove);
  };
}
