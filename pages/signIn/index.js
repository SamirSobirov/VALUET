import {
    getData,
    postData
} from "/modules/http.js";
let eye = document.querySelector('.eeye')
let eye2 = document.querySelector('.eeye2')
let inp_pass = document.querySelector('.password')
let inp_pass2 = document.querySelector('.password_2') 
let btn_up = document.querySelector('.btn_up')
let btn_in = document.querySelector('.btn_in')
let form1 = document.forms.form1
let form2 = document.forms.form2
let inps1 = document.querySelectorAll('inps1')
let inps2 = document.querySelectorAll('inps2')
let email = document.querySelector('.email1')
let pass = document.querySelector('.password_2')

eye.onclick = () => {
    if(inp_pass.type === 'password'){
        inp_pass.type = 'text'
    }else{
        inp_pass.type = 'password'
    }
}
eye2.onclick = () => {
    if(inp_pass2.type === 'password'){
        inp_pass2.type = 'text'
    }else{
        inp_pass2.type = 'password'
    }
}
btn_up.onclick = () => {
    btn_up.classList.add('active')
    btn_in.classList.remove('active')

    form1.style.display = 'none'
    form2.style.display = 'block'
}
btn_in.onclick = () => {
    btn_in.classList.add('active')
    btn_up.classList.remove('active')

    form1.style.display = 'block'
    form2.style.display = 'none'
}
form1.onsubmit = (e) => {
    e.preventDefault();

    // let error = true

    // inps1.forEach((inp) => {
    //     if (inp.value.length === 0) {
    //         error = false
    //         inp.classList.add("error");
    //     } else {
    //         inp.classList.remove("error");
    //     }
    // })


    // if(!error) return

    getData('/user?email=' + email.value)
        .then(res => {
            if (res.length === 0) return

            let [user] = res

            if (+user.password !== +pass.value) {
                alert('Wrong password')
                return
            }

            delete user.password
            localStorage.setItem('user', JSON.stringify(user))
            location.assign('/')
        })
}
form2.onsubmit = (e) => {
    e.preventDefault();

    let error = false;

    inps2.forEach((inp) => {
        if (inp.value.length === 0) {
            error = true;
            inp.classList.add("error");
        } else {
            inp.classList.remove("error");
        }
    })
    if (error) {
        return error
    } else {
        submit()
    }

}


function submit() {
    let user = {};

    let fm = new FormData(form2);

    fm.forEach((value, key) => {
        user[key] = value;
    });

    getData('/user?email=' + user.email)
        .then(res => {
            if (res.length > 0) {
                alert('Уже занято!')
                return
            }
            postData('/users', user)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        location.assign('/pages/signin')
                    }
                })
        })
}