const bmenu = document.getElementById('bmenu');
    const itens = document.getElementById('itens');

    bmenu.addEventListener('click', function(){
      if(itens.style.display == 'block'){
        itens.style.display = 'none';
      itens.removeAttribute('style');
        bmenu.innerHTML = '&#9776;';
      }else{
        itens.style.display = 'block';
        bmenu.innerHTML = 'X';
      }
    });

    document.addEventListener('click', function(){
      let alvo = event.target;

      if(alvo == bmenu){
        return;
      }else{
        itens.style.display = 'none';
      itens.removeAttribute('style');
        bmenu.innerHTML = '&#9776;';
      }
    });