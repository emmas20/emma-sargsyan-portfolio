const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const modal=document.getElementById('videoModal');
const video=document.getElementById('projectVideo');
const title=document.getElementById('videoTitle');
document.querySelectorAll('.media-trigger').forEach(btn=>btn.addEventListener('click',()=>{video.src=btn.dataset.video;title.textContent=btn.dataset.title;modal.showModal();video.play().catch(()=>{});}));
function closeVideo(){video.pause();video.removeAttribute('src');video.load();modal.close();}
document.getElementById('closeModal').addEventListener('click',closeVideo);
modal.addEventListener('click',e=>{if(e.target===modal)closeVideo()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.open)closeVideo()});
