// class Admin extends User {
//     constructor(login, password) {
//         super(login, password);
//     }

//     checkLoginAdm() {

//         if (this.login === "admin") {
//             console.log("login admin true")
//             return true;
//         } else {
//             console.log("False login");
//             return false;
//         }
//     }

//     checkPasswordAdm() {

//         if (this.password === 'admin') {
//             console.log("Password admin true")
//             return true;
//         } else {
//             console.log("False admin password");
//             return false;
//         }
//     }
// }


class Admin {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    checkLoginAdm() {
        if (this.login === 'admin') {
            console.log("Login admin true");
            return true;
        } else {
            console.log("False admin login");
            return false;
        }
    }

    checkPasswordAdm() {
        if (this.password === 'admin') {
            console.log("Password admin true");
            return true;
        } else {
            console.log("False admin password");
            return false;
        }
    }
}