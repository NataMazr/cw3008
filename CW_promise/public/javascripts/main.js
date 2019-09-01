function ajaxApi(url, data = null) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open(data === null ? 'GET' : 'POST', url);
        xhr.send();
        // xhr.onerror = (err) => rej(err);
        xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    res(xhr.response)
                } else {
                    rej('ошибка:(')
                }
            })
            // xhr.addEventListener('error', () => rej(xhr.response))
    })

}
ajaxApi('/name')
    .then(data => JSON.parse(data))
    .then(parseData => console.log(parseData))
    .catch(err => console.log(err));


// xhr.open('GET', '/name');
// xhr.send();
// xhr.addEventListener('load', () => {
//     const us = JSON.parse(xhr.response);
//     console.log(xhr.response);
//     console.log(us);
// })