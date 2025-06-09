document.addEventListener('DOMContentLoaded', function() {
  // Плавная прокрутка для навигации
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


    function openModal() {
        document.getElementById("myModal").style.display = "block";
    }
    
    // Функция закрытия модального окна
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }
    
    // Закрываем модальное окно при клике вне формы
    window.onclick = function(event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    
    // Карусель "О компании"
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(n) {
        carouselSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        currentSlide = (n + carouselSlides.length) % carouselSlides.length;
        carouselSlides[currentSlide].classList.add('active');
    }
    
    document.querySelector('.prev-btn').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
   
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
   
    showSlide(0);
    
 
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
      
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            propertyCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
  

    
    document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  const heroHeight = hero.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY > heroHeight) {
      header.style.background = 'rgba(44, 62, 80, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.background = '#ffffff'; 
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
});

        // Подсветка активного раздела в навигации
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.main-nav ul li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    
                    }
            
        });
    };
    
  const callbackBtn = document.querySelector('.callback-btn');
  const ctaBtn = document.querySelector('.cta-btn'); // Эта кнопка больше не вызывает модал

const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <h3>Заказать обратный звонок</h3>
    <form class="callback-form">
      <input type="text" placeholder="Ваше имя" required>
      <input type="tel" placeholder="Ваш телефон" required>
      <button type="submit" class="btn">Отправить</button>
    </form>
  </div>
`;
document.body.appendChild(modal);

function openModal() {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Открываем модалку ТОЛЬКО по кнопке заказа звонка
callbackBtn.addEventListener('click', openModal);

// Кнопка "оставить заявку" больше не должна вызывать событие
// ctaBtn.addEventListener('click', openModal); // Этот обработчик удаляем!

const closeBtn = modal.querySelector('.close-modal');
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});





});






