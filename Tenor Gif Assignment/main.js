$(document).ready(function () {
    let inputSubmit = $('#input')
    let searchInput = $('#search')
    let inputNumber = $('#number')
    inputSubmit.click(function () {
        $('#div_results').empty()
        let str = searchInput.val();
        let num = inputNumber.val();
        if ((str !== '') && (num !== '')) {
            searchInput[0].value = '';
            inputNumber[0].value = '';
            newReq(str, num)
        } 
        else {
            searchInput[0].value = '';
            inputNumber[0].value = '';
            alert('field is required')
        }
    })
    let movieSearch = $('#movieSearch')
    let myBtn = $('#myBtn')
    myBtn.click(function () {
        $('#result-movies').empty()
        let mystr = movieSearch.val();
        if (mystr !== '') {
            movieSearch[0].value = '';
        } else {
            alert('field is required')
        }
    })
    let githubSearch = $('#githubSearch')
    let myBtnn = $('#myBtnn')
    myBtnn.click(function () {
        $('#resultApi').empty()
        let mystrr = githubSearch.val();
        if (mystrr !== '') {
            githubSearch[0].value = '';
        } else {
            alert('field is required')
        }
    })
    searchInput.keyup(function (e) {
        if (e.keyCode === 13) {
            $('#div_results').empty();
            let str = searchInput.val();
            if (str !== '') {
                searchInput[0].value = '';
                newReq(str)
            } else {
                alert('field is required');
                $(".containers").css("background-color", "");

            }
        }
    })

})
function newReq(str, num) {
    let api_key = '51CMFMO3YORX'
    let url = 'https://api.tenor.com/v1/search?q=' + str + '&key=' + api_key + '&limit=' + num;
    let http = new XMLHttpRequest();
    http.open('GET', url);
    http.responseType = 'json'
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            //     var myObj = JSON.parse( http.response);
            //   console.log(myObj, typeof(myObj));
            let resultsLength = http.response.results.length
            if (resultsLength > 0) {
                getDataFromAPI(http.response.results)
            } else {
                let div_results = $('#div_results');
                let text = $(document.createElement('p'))
                let errorMsg = 'No data can shown'
                text[0].innerHTML = errorMsg
                text.appendTo(div_results)
            }
        }
    };
}

function getDataFromAPI(data) {
    // for(var i=0; i<data.length; i++){
    //     console.log(data[i])
    // }
    data.forEach(function (val) {
        let imageSrc = val.media[0].gif.url
        let div_results = $('#div_results').addClass('containers');
        let image = $(document.createElement('img')).addClass('card')
        image.attr('src', imageSrc)
        $('img').width('100%');
        image.appendTo(div_results)
    });
}

// ---------------------------   search movies --------------------------------

function SearchMovies() {
    let query = document.getElementById('movieSearch').value;
    let url = `https://api.tvmaze.com/search/shows?q=${query}`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(function (data) {
            document.getElementById('result-movies').innerHTML = '';
            console.log(data);
            data.forEach(movie => {
                const rating = movie.show.rating.average;
                const url = movie.show.url;
                const img = movie.show.image;
                const imgNotAvailable =
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-EDH1mN9T6XDxxIXH-ckrqfNb1bPyuGg40e1bmMlrp6EjjR1&s';
                const genres = movie.show.genres;
                const name = movie.show.name;
                const imgTag =
                    img != null ?
                        `<img src = "${img.original}" style="width:100% "></img>` :
                        `<img src = "${imgNotAvailable}" style="width:100% "></img>`;

                let result = `<a href="${url != null ? url : 'no url available'}"
                  target="blank"><div class="containers">
                  <div class="card">
                  <div class="container">
                  ${imgTag}
                    <p>${name != null ? name : 'no name available'}</<p>
                    <h4>genre:<span> ${
                    genres != null ? genres : 'no genres available'
                    }</span></h4><br>
                    <h4>rating: <span>${rating != null ? rating : 'no rating available'}</span></h4>
                  </div>
              </div>
            </div></a>`;
                document.getElementById('result-movies').innerHTML += result;
            });
        })
        .catch(err => {
            console.log(err);
        });
}


// ----------------------------- github api ---------------------------------------------

function SearchGithub() {
    const clientId = '95b8920d979c752c2c9e';
    const clientSecret = '06c054768dca81b8d9efde88a50bba2db523a28f';
    const searchApi = document.getElementById('githubSearch').value;
    const urlApi = `https://api.github.com/users/${searchApi}?client_id=${clientId}&client_secret=${clientSecret}`;
    if (searchApi !== '') {
        fetch(urlApi)
            .then(data => {
                return data.json();
            })
            .then(function (data) {    
                document.getElementById('resultApi').innerHTML = '';
                console.log(data);
                Array(data).forEach(repo => {
                    let resultApi = `
                <a href="${repo.html_url}" target="_blank">
                <div class="resultApi">
                <img src="${repo.avatar_url}"/>
                <div class="cards">
                    <h1>Name: ${repo.name}</h1>
                    <h1>Followers: ${repo.followers}</h1>
                    <h1>Location: ${repo.location}</h1>
                  </div>
                </div></a>`;
                    document.getElementById('resultApi').innerHTML += resultApi;
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}