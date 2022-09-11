export async function getCatalogNumbers(url){
    return await fetch(url)
    .then(response => response.json())
    .then(data => data)
}