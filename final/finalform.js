document.getElementById("question").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    const like = document.getElementById("like").value;
    const friends = document.getElementById("friends").value;
    const involved = document.getElementById("involved").value;
    const describe = document.getElementById("describe").value;
    const school = document.getElementById("school").value;
    const learn = document.getElementById("learn").value;
    const develop = document.getElementById("develop").value;
    const teach = document.getElementById("teach").value;
    const snack = document.getElementById("snack").value;
    const drink = document.getElementById("drink").value;

    if (!name || !birthday || !like || !friends || !involved || !describe || !school || !learn || !develop|| !teach || !snack || !drink) {
        alert("Item(s) cannot be left blank.");
        return;
    }


    const formData = {
        name: name,
        birthday: birthday,
        like: like,
        friends: friends,
        involved: involved,
        describe: describe,
        school: school,
        learn: learn,
        develop: develop,
        teach: teach,
        snack: snack,
        drink: drink,
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status ===200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('question').innerHTML = " ";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData);
});