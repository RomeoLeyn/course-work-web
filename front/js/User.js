class User {
    constructor(login, email, password) {
        this.login = login;
        this.email = email;
        this.password = password;
    }
    
    checkLogin(login) {
        if (this.login == 'roma') {
            console.log("login true")
            return true;
        } else {
            console.log("False login");
            return false;
        }
    }

    checkPassword(password) {
        if (this.password == 123) {
            console.log("Password true")
            return true;
        } else {
            console.log("False password");
            return false;
        }
    }
}