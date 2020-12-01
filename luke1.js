const side = fetch("https://github.com/jorgensandhaug/Knowit_2020")




async function getPage(url){
    const res = await fetch("https://cors-anywhere.herokuapp.com/" + url, {
        method: 'GET',
        mode: 'no-cors'
    })

    console.log(res)
}

//funker ikke!
