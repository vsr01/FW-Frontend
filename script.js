const app = document.getElementById('root');
const container = document.createElement('div');  //Container for cards
container.setAttribute('class', 'container');
app.appendChild(container);

function getSearch()
{
    var cname = document.getElementById("cname").value;

    var uri = "https://restcountries.eu/rest/v2/name/"+cname+"?fullText=true"; 
    fetch(encodeURI(uri)).then(response => response.json()).then(data => {
        const card = document.createElement('div');  //Card Creation
        card.setAttribute('class', 'card');

        //Card Elements
        const h1 = document.createElement('h1');  //Country Name
        h1.textContent = data[0].name;

        const im = document.createElement('img');  //Country Flag
        im.src = data[0].flag;

        const p2 = document.createElement('p');  //Country Area
        p2.textContent = "Area : " + data[0].area;

        const p3 = document.createElement('p');  //Native Name of the country
        p3.textContent = "Native Name : " + data[0].nativeName;

        const p4 = document.createElement('p');  //Region
        p4.textContent = "Region : " + data[0].region;

        const p5 = document.createElement('p');  //Population
        p5.textContent = "Population : "+data[0].population;

        const anc = document.createElement('a');
        anc.innerHTML = "more details";
        var curi = "http://countries.petethompson.net/#/country/"+data[0].alpha3Code;
        anc.href = encodeURI(curi);

        //Appending HTML elements to the card
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(im);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
        card.appendChild(p2);
        card.appendChild(anc);

        console.log(data);
    }).catch(error => console.error(error));
}