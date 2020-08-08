async function fetchUsers() {
    const resp = await fetch('https://jsnplaceholder.typicode.com/users')
    console.log("Hello-->1")
    const data = await resp.json();
    console.log("Hello-->2")
    console.log(data);
    console.log("Hello-->3")
}

fetchUsers()