// const hamberg = document.getElementById('toggle');
// const navicons = document.getElementById('nav-icon');

// hamberg.addEventListener('click', () => {
//     navicons.classList.toggle('active');
// });

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function SendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    };

    const serviceID = "service_a9pgyiu";
    const templateID = "template_ag0x4wj"

emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("your message send succesfully");
    })
    .catch((err) => console.log(err));
}


