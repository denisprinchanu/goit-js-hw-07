


const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 


    const login = this.elements.email;
    const password = this.elements.password;


        const loginValue = login.value;
        const passwordValue = password.value;
        
    

    if (loginValue === "" || passwordValue === "") {
       alert('All form fields must be filled in');
       return;
      }

    const formData = {
        email: loginValue,
        password: passwordValue
    };
    
    console.log(formData);

   
    this.reset();
});

