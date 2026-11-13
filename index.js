const app = document.querySelector("#apps");

document.body.style.margin = "0"
document.body.style.fontFamily = "Arial, sans-serif"
document.body.style.backgroundColor= "#f2f2f2"

app.style.minHeight = "100vh"
app.style.display = "flex"
app.style.justifycpntent = "center"
app.style.alignItems = "center"

const form = document.createElement("form")

form.style.width = "350px"
form.style.padding = "30px"
form.style.backgroundColor = "white"
form.style.borderRadius = "10px"
form.style.boxShadow = "0 4px 15px #rgba(0, 0, 0, 0.15)"
form.style.display = "flex"
form.style.flexDirection = "column"
form.style.gap = "15px"


const title = document.createElement("h2");
title.textContent = "regisztracio"
title.style.textAlign = "center"

form.append(title)

const fields = [
    {
        label:"Nev",
        type: "text",
        name: "name"
    },
    {
        label: "email",
        type: "email",
        name: "email"
    },
    {
        label: "jelszo",
        type: "password",
        name: "password"
    }
];

fields.forEach((field) => {
    const div = document.createElement("div")

    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "5px"

    const label = document.createElement("label");
    label.textContent = field.label

    const input = document.createElement("input")

    input.type = field.type
    input.name = field.name

    input.style.padding = "10px"
    input.style.fontSize = "16px"
    input.style.border = "1px solid black"
    input.style.borderRadius = "0.5 em"
    input.style.outline = "none"

    const error = document.createElement("small");

    error.textContent = ""
    error.style.color = "red"
    error.style.fontSize = "13px"
    
    div.append(label,input,error);
    form.append(div);
    app.append(form)
})

const button = document.createElement("button");

button.type = "submit"
button.textContent = "soifon my mommy"

button.style.padding = "12px"
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.border = "none"
button.style.borderRadius= "1em"
button.style.cursor = "pointer"
button.style.fontSize = "16px"

form.append(button) 

form.addEventListener("sumbit", (event) => {
    event.preventDefault()

    const nameinput = form.elements["name"]
    const emailinput =  form.elements["email"]
    const passwordinput = form.elements["password"]

    const nameerror = nameinput.
    nextelementSibling
    const emailerror = emailinput.
    nextelementSibling  
    const passworderror = passwordinput.
    nextelementSibling

    nameerror.textContent = ""
    emailerror.textContent = ""
    passworderror.textContent = ""

    let valid = true

    const name = nameinput.value.trim()
    if (name == "") {
        nameerror.textContent = "nevet add meg csicska geci"
        nameinput.textContent = "1px solid red"
    }
    else if (name.length <= 3){
        nameerror.textContent = "a nevnek legalabb 3 karakter hosszunak kell lennie zsindej"
        valid = false
    }

        const email = emailinput.value.trim()
    if (email == "") {
        emailerror.textContent = "ez emailt add meg csicska geci"
        emailinput.textContent = "1px solid red"
        valid = false
    }
    else if (!email.includes("@") || !email.includes(".")){
        emailerror.textContent = "adj meg egy emailt nigusz"
        valid = false
    }

    const jelszo = passwordinput.value.trim();
    if (jelszo == ""){
        passworderror.textContent = "jelszavat add meg csicska geci"
        passwordinput.textContent = "1px solid red"
        valid = false
    }
    else if (jelszo.length < 8) {
         passworderror.textContent = "legyen nagyobb mint 8 karakter"
        passwordinput.textContent = "1px solid red"
        valid = false
    }

    if(valid) {
        alert("sikeres a regisztracio")

        console.log("nev:", name)
        console.log("email:", email)

        form.reset();
    }
})