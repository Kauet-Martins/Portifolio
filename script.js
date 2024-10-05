// Exemplo de código JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 


          const name = document.getElementById('first-name').value.trim();
          const lastName = document.getElementById('last-name').value.trim();
          const email = document.getElementById('email').value.trim();
          const phone = document.getElementById('phone').value.trim();
          const message = document.querySelector('textarea').value.trim();

          
          if (!name || !lastName || !email || !phone) {
              alert('Por favor, preencha todos os campos.');
              return; 
          }

       
        console.log(`Nome: ${name} ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Telefone: ${phone}`);
        console.log(`Mensagem: ${message}`);
        
        
        form.reset();
    });
});
