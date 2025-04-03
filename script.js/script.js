
        function buscarImagem() {
            const headers = new Headers({
                "Content-Type": "application/json",
                "x-api-key": "DEMO-API-KEY"
            });

            var requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            };

            fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.length > 0) {
                        document.getElementById("dogImage").src = result[0].url;
                        document.getElementById("dogImage").style.display = "block";
                    }
                })
                .catch(error => console.log('Erro:', error));
        }
         