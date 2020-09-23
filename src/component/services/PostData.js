export function PostData(type, userData){
    let BaseUrl = 'https://5f69b4b9d808b90016bc050d.mockapi.io/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type, {
            method: 'POST',
            // body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson)

        })
        .catch((error) => {
            reject(error);
        });

    });
}