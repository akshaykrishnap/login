class Landing {
    //property
    database = {
        "Milan": { username: "Milan",email:"milan@gamil.com",address:"house1", password: 'milan123' },
        "Manu": { username: "Manu", email:"manu@gamil.com",address:"house2", password: 'manu123' },
        "Micheal": { username: "Micheal",email:"micheal@gamil.com",address:"house3", password: 'micheal123' },
        "Miller": { username: "Miller",email:"miller@gamil.com",address:"house4", password: 'miller123' }

    }
    //method to store data
    saveData() {
        if (this.database) {
            localStorage.setItem("database", JSON.stringify(this.database))
        }
    }
    //method to retrive data
    getData() {
        const data = JSON.parse(localStorage.getItem("database"))
        console.log(data);
    }
    //register
    register() {
        this.getData()

        let uname = reguname.value
        let mail = regmail.value
        let add = regadd.value
        let pswd = regpswd.value
       
        console.log(uname);
        console.log(pswd);
        console.log(add);
        console.log(mail);
        if (uname == "" ||mail==""||add==""|| pswd == "") {
            alert('Please fill the form completely')
        } else {
            if (uname in this.database) {
                alert('User Already Exist')
            } else {
                this.database[uname] = { username: uname, email: mail,address: add, password: pswd }
                console.log(this.database);
                this.saveData()
                alert('Registration Succesfull')

                // navigate
                window.location = 'index.html'
            }
        }
    }

    //login
    login() {
        this.getData()
        let uname = loguname.value
        let pswd = logpswd.value
        console.log(uname);
        console.log(pswd);

        if (uname == "" || pswd == "") {
            alert('Please fill the form completely')
        }
        else {
            if (uname in this.database) {
                if (this.database[uname].password == pswd) {
                    alert('Login successfull')
                    localStorage.setItem("user", uname)
                    //navigate
                    window.location ="dash.html"
                }
                else {
                    alert('Incorrect Username or Password')
                }
            }
            else {
                alert('User does not exist ... please register')
            }
        }
    }

}

const obj = new Landing()
obj.saveData()
obj.getData()