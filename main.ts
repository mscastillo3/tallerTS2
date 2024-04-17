
import { Serie } from "./Serie.js";



export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIRUR5ZzYPG2_HHkNK5eGhFkS98T42AD5NfLtINns5OcZtoz0HzuU2_vxHOp8kDI2Flk&usqp=CAU") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://4.bp.blogspot.com/--X9PofWjWKo/V2XrYoQWyuI/AAAAAAAAAyo/nkEva-f4xVgWgVc9WIK9EvMvz03puNNHwCLcB/s1600/oitnb-season4.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "https://image.hurimg.com/i/hurriyet/75/750x422/5691537667b0a91a9897a031.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://tvpromos.eu/wp-content/uploads/2014/04/the-big-bang-theory.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjzCdcI7EtQz55HdQ8CHP0K9rvJikwDiUy5aoV_WDzw&s"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.ytimg.com/vi/OGialycgYL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWyUt_A9vduKAKprVLkQU8ffgVqg"),
  ];


let seriesTabla: HTMLElement = document.getElementById("seriesTabla")! ; 
let derecha: HTMLElement = document.getElementById("derecha")! ; 
let pruba: HTMLElement = document.getElementById("pruba")! ; 
mostrarDatosSeries(series)

function mostrarDatosSeries (series: Serie[]): void{
    let serieTbody:HTMLElement = document.createElement("tbody");
    for(let serie of series ){
    let trElement:HTMLElement = document.createElement("tr");
    trElement.addEventListener("click", listenerFunction)
    trElement.innerHTML = ` <td class="table-active "> ${serie.id} </td> <td class="table-active" style = "color:blue"> ${serie.nombre} </td>
    <td class="table-active"> ${serie.striming} </td> <td class="table-active"> ${serie.temporadas} </td>`

    serieTbody.appendChild(trElement);
    
}
seriesTabla.appendChild(serieTbody);
}
let averageD: HTMLElement = document.getElementById("average")! ; 
mostrarAverage(series)
function mostrarAverage (series: Serie[]): void{
    let average: number = 0;
    let x: number = 0;
    for(let serie of series ){
        average = average + serie.temporadas;
        x = x + 1;

}

average = average/x;
averageD.innerHTML = `Season average: ${average}`
}



function listenerFunction(this: HTMLElement, ev: Event) {
    var a: string  = this.innerHTML
    var b: string[] = a.split(" ");
    var serie: Serie = series[parseInt(b[4])-1]
    var imagen: string = serie.imagenP   
    derecha.innerHTML = ` <div class="row-5" align="center"><img src= ${imagen} class="img-fluid" alt="Responsive image" id="mi-imagen" width= "70%"> </div>
    <div class="row-6" align="center"> <h3> ${serie.nombre}</h3> </div><div class="row-6" align="center">
    <p>${serie.tipo}</p> </div><div class="row-6" align="center" >
    <p><A HREF=${serie.paginaWeb}> ${serie.paginaWeb} </A></p></div>`   
  }
