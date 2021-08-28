const callCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => loadCountries(data) )
}
callCountries();

const loadCountries = (countries) =>{
    
    const divCountries = document.getElementById('countries');
    

    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        divCountries.appendChild(div);

    })
}