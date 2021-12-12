function busca() {
    const buscaData = $("#date").val();
    const apiKey = 'qMy05YRJ5FeypNmL9E6DTNKLTLw44vAhxX48i1dV'
    
    $.ajax({
       type: "GET",
       url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${buscaData}`,
 
       success: function (response) {
          const divExplanation = $('<img src="' +response.url +'"><div id="info"><h1>"' +
                response.title +'"</h1><p>"' + response.explanation + '"</p></div>'
          );
 
          $("#info-apod").html(divExplanation);
       },
    });
 }