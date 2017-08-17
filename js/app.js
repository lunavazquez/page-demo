document.getElementById('formRegister').addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    console.log('Name: ', name);
    console.log('Email: ',email);
});