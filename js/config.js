/* Editable media config.
   To add full-scale video, drop files into the project:
     assets/hero.mp4  → plays as the hero background (muted, looping)
     assets/film.mp4  → plays in the "Watch Film" modal (with sound + controls)
   Or point these at any URL. Leave as-is and the poster image slots show instead. */
window.STEMPLE_MEDIA = {
  heroVideo: 'assets/hero.mp4',
  filmVideo: 'assets/film.mp4'
};
/* Global safety: keep every video permanently silent site-wide. */
(function(){
  const silence = ()=>document.querySelectorAll('video').forEach(v=>{ v.muted=true; v.volume=0; });
  document.addEventListener('DOMContentLoaded', silence);
  document.addEventListener('volumechange', e=>{ const v=e.target; if(v&&v.tagName==='VIDEO'){ v.muted=true; v.volume=0; } }, true);
  document.addEventListener('play', e=>{ const v=e.target; if(v&&v.tagName==='VIDEO'){ v.muted=true; v.volume=0; } }, true);
  setInterval(silence, 1500);
})();
