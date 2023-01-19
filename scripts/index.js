function start() {
    var container = document.getElementById("slideshow");
    var imglist = ["https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26677df38123a3a1553d704477c100af81b641e1d539bc1991f99f89935f18b0._UY500_UX667_RI_V_TTW_.jpg",
        "https://www.thefactsite.com/wp-content/uploads/2022/07/interstellar-movie-facts.jpg",
        "https://qqcdnpictest.mxplay.com/pic/7d49fc323cfb12a324792e69f33e95e5/en/16x9/640x360/test_pic1538129331134.jpg"];

    var i = 0;
    setInterval(function () {
        if (i == imglist.length) {
            i = 0;
        }
        container.innerHTML = null;
        var im = document.createElement("img");
        im.src = imglist[i];
        container.append(im);
        i++;
    }, 2000);
}
start();

var moviesd=[{
    name: "Avatar:The Way of Water",
    date: 2022,
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_avatar_thewayofwater_97_v2_01ccadaf.png",
    rating: 7.9 
},
{
    name: " M3GAN",
    date: 2022,
    poster: "https://pbs.twimg.com/media/Fe4tRqHWAAgv6Vt?format=jpg&name=4096x4096",
    rating: 6.6
},
{
    name: " Everything Everywhere All at Once ",
    date: 2022,
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
    rating: 8.0
},
{
    name: "Ant-Man and the Wasp: Quantumania",
    date: 2023,
    poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/antmanandthewaspquantumania_lob_crd_03.jpg",
    rating: 7.8
},
{
    name: " Jurassic World: Dominion",
    date: 2022,
    poster: "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    rating:  5.6
},
{
    name: " Black Panther: Wakanda Forever",
    date: 2022,
    poster: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
    rating:  7.2
},
{
    name: "Black Adam",
    date: 2022,
    poster: "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    rating: 6.4
},
{
    name: " Strange World ",
    date: 2022,
    poster: "https://upload.wikimedia.org/wikipedia/en/f/fe/Strange_World_poster.jpg",
    rating:  5.6
},
{
    name: "Nope",
    date: 2022,
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Nope_%28film%29_poster.jpg/220px-Nope_%28film%29_poster.jpg",
    rating:  6.9
}
];

localStorage.setItem("movie",JSON.stringify(moviesd));
display(moviesd);

function display(arr){
    document.getElementById("movies").innerHTML="";
    movieContainer= document.getElementById("movies");
    arr.map(function(elem){
        var divv=document.createElement("div");
        
        var url=document.createElement("img");
        url.src=elem.poster;

        var na=document.createElement("h3");
        na.textContent=elem.name;

        var da=document.createElement("h5");
        da.textContent=elem.date;

        var rate=document.createElement("h6");
        rate.textContent=elem.rating;

        divv.append(url,na,da,rate);
        document.querySelector("#movies").append(divv);
    });
}
document.getElementById("sort-lh").addEventListener("click",function(){
    var array=JSON.parse(localStorage.getItem("movie"));
    console.log("hi")
    document.getElementById("movies").innerHTML="";
    array.sort((a,b)=>{
       if(a.rating>b.rating){
            return 1;
       }else{
        return -1;
       }
    });
    display(array);
});

document.getElementById("sort-hl").addEventListener("click",function(){
    var array=JSON.parse(localStorage.getItem("movie"));
    document.getElementById("movies").innerHTML="";
    array.sort((a,b)=>{
        return b.rating-a.rating;
    });
    display(array);
});

