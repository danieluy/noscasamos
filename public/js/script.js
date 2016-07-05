(function(){
  const a_civil = document.getElementById('a_civil');
  const a_brindis = document.getElementById('a_brindis');

  const civil = document.getElementById('civil');
  const brindis = document.getElementById('brindis');

  const pop_up_background = document.getElementById('pop_up_background');


  a_civil.addEventListener('click', (evt) => {
    evt.preventDefault();
    civil.classList.toggle('show');
    pop_up_background.classList.add('show-back');
  });

  a_brindis.addEventListener('click', (evt) => {
    evt.preventDefault();
    brindis.classList.toggle('show');
    pop_up_background.classList.add('show-back');
  });

  pop_up_background.addEventListener('click', () => {
    civil.classList.remove('show');
    brindis.classList.remove('show');
    pop_up_background.classList.remove('show-back');
  });

}())
