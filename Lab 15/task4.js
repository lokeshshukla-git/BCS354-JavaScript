/*
Name: LOKESH SHUKLA
Roll No: 2510303281
Assignment No: 15
Task No: 4
*/

function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ]);
        }, 100);
    });
}

async function showUsers() {
    let users = await getUsers();

    users.forEach(user => {
        console.log(user.name);
    });
}

showUsers();