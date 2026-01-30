const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  reveals.forEach(r=>{
    const top=r.getBoundingClientRect().top;
    if(top<window.innerHeight-100){r.classList.add('show')}
  })
});

// Gallery lightbox functionality
const galleryImages = document.querySelectorAll('.card img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${img.src}" alt="${img.alt}">
        <span class="close">&times;</span>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        document.body.removeChild(lightbox);
      }
    });
  });
});

