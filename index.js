// Add your code here

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify( {
            name,
            email
        }),
    })
    .then(function (response){
        return response.json();
    })
    .then(data => {
        const newID = document.createElement('p')
        newID.innerHTML = `ID: ${data.id}`
        document.querySelector(`script`).insertBefore(newID, document.querySelector(`script`).childNodes[0])
    })
    .catch(function (error){
        alert("Bad things! Ragnarok!")
        document.querySelector(`body`).innerHTML = `<p> error: ${error.message}<p>`
    });
}
// // fetch(destinationURL, configurationObject)
// //configurationObject contains the method HTTP verb, the headers, and the body

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json", //common header
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (object){
//         console.log(object)
//     })

// // We can also pass as an anonymous object!
// // fetch("http://localhost:3000/dogs", {
// //   method: "POST",
// //   headers: {
// //     "Content-Type": "application/json",
// //     Accept: "application/json",
// //   },
// //   body: JSON.stringify({
// //     dogName: "Byron",
// //     dogBreed: "Poodle",
// //   }),
// // });