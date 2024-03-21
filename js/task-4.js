


const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 


    const login = this.elements.email;
    const password = this.elements.password;


        const loginValue = login.value.trim();
        const passwordValue = password.value.trim();
        
    

    if (loginValue === "" || passwordValue === "") {
       alert('All form fields must be filled in');
       return;
      }


      const formData = {
        email: login,
        password: password
    };

    
    console.log(formData);

   
    this.reset();
});





    