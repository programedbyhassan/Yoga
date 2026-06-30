// Breath label cycling synced loosely to the core animation
  const label = document.getElementById('breathLabel');
  const phases = ['inhale', 'hold', 'exhale'];
  let i = 0;
  function cycle(){
    label.classList.remove('show');
    setTimeout(()=>{
      label.textContent = phases[i % phases.length];
      label.classList.add('show');
      i++;
    }, 400);
  }
  cycle();
  setInterval(cycle, 3000);

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el=> io.observe(el));
