
fetch('https://api.github.com/licenses').then(
    function (response) {
        return response.json()
    }).then(function (response) {
        for (i = 0; i < response.length; i++) {
            fetch(`https://api.github.com/licenses/${response[i].key}`).then(
                function (response) {
                    return response.json()
                }).then(function (response) {
                    console.log(response)
                })
        }
    })
