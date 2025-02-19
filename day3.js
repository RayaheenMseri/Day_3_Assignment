const userList = document.getElementById('data')
const getUsers = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()

        data.forEach(user => {
            let listItem = document.createElement('li')
            listItem.innerText = user.name + " , " + user.email
            userList.appendChild(listItem)
        });
    } catch (error) {
        console.error('error fetching data ', error)
    }


}



document.getElementById('myForm').addEventListener('submit', function (event) {

    event.preventDefault(); //prevent from submission

    let isValid = true;

    let name = document.getElementById('name').value.trim()// trime remove any uneccessry spaces
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()

    // validate name
    if (name == '') {
        document.getElementById('nameError').innerText = "Name is required"
        isValid = false
    }

    //validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == '') {
        document.getElementById('emailError').innerText = "Email is required"
        isValid = false
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Invalid email formate"
        isValid = false
    }


    // validate password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/
    if (password == '') {
        document.getElementById('passwordError').innerText = "password is required"
        isValid = false
    } else if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = "Invalid password formate"
        isValid = false
    }


    if (isValid) {
        alert('Form submitted successfully!')
        window.location.assign('UserData.html')
    }
})



