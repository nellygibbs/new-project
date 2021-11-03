/* need the button to be able to be able to grab the date of the game when it's 
clicked on*/

$('#btn-search').click(function(){
    let dateOfGame = $('#dateOfGame')
    // the date that the user selects

    const ballDontLieApi = `https://www.balldontlie.io/api/v1/games?start_date=${dateOfGame.val()}&end_date=${dateOfGame.val()}`
    // added in the api url. this api didn't actually require a key
    $.ajax({
        method: 'GET',
        url: ballDontLieApi,
        success: function (response)
        {
        // console.log(response) finally got data in the console


        $('#scores-div').html('');
        /* added this in because at first every time I clicked a date and then chose
        a new date it would add all those games onto the screen, so this helped me to
        only show the results for the latest date that was chosen by the user*/

        for(let i = 0; i < response.data.length; i++){
            $('#scores-div').append(`
            <div class="col-3">
                    <div class="card">
                        <div class="card-header">
                          Final
                        </div>
                        <div class="score-card">
                            <p><small>${response.data[i].visitor_team.city}</small> <b>${response.data[i].visitor_team.name}</b> - ${response.data[i].visitor_team_score}</p>
                            <hr>
                            <p><small>${response.data[i].home_team.city}</small> <b>${response.data[i].home_team.name}</b> - ${response.data[i].home_team_score}</p>
                        </div>
                      </div>
                </div>
            `)
        }
       
        }
    });
})

/* originally had the div inside of my html but when you first load the screen it was
showing with information from the api so I took it out and put it here so that when
it loops through the array in the api, it'll add the the visitors city name and score
to the top of the scorecard and then the home team's name, score and city to the bottom
*/