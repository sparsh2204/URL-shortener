let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const da = await res.json();

    shortURL.value = da.result.short_link3;
}
