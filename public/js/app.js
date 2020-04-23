console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Loading...';
messageTwo.textContent = '';

const getForecast = async (location) => {
  try {
    const response = await fetch(`/weather?address=${location}`);
    const data = await response.json();
    console.log(data);
    messageOne.textContent = data.location;
    messageTwo.textContent = data.forecast;
  } catch (error) {
    console.log(error);
    messageOne.textContent = data.error;
  }
};

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  getForecast(location);
});
