const API_KEY = `52d80d55f74f6e0b30baa2e155569cb9
`
const searchTemperature = () => {
    const inputField = document.getElementById('input-field');
    const city = inputField.value;
    inputField.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayDetails = data => {
    setInnerText('city-name', data.name);
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
    //set image
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const setIcon = document.getElementById('img-icon');
    setIcon.setAttribute('src', url);
}