function getpassword() {
    let chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_+';
    let passLength = 10;
    let password = '';

    for(let i = 0; i<passLength; i++){
        let randnum = Math.floor(Math.random() * chars.length);
        console.log(randnum);
        
        password += chars.substring(randnum, randnum + 1);
        console.log(password);
    }
    document.querySelector('#password').value = password;
}