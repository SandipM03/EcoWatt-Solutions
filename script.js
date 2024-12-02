// Pop up Section

const messages = [
    "E-waste, the unwanted offspring of our gadget-obsessed world, encompasses discarded electronics like smartphones, laptops, tablets, and televisions. As tech evolves at lightning speed, our outdated devices pile up, creating a growing mountain of e-junk.",

    "Amongst the e-waste, hazardous materials lurk—lead, mercury, cadmium, and a cocktail of toxic chemicals. Improper disposal can turn these substances into environmental time bombs, seeping into the soil, tainting water supplies, and polluting the air, posing grave risks to our health and ecosystems.",

    "Recycling e-waste is a treasure hunt for valuable resources—gold, silver, palladium, copper, and rare earth elements. By reclaiming these materials, we cut down on the need for environmentally destructive mining and resource-intensive extraction.",

    "The e-waste deluge is a global dilemma. With millions of tons generated annually, developed nations often ship their e-waste to developing countries, where it’s processed under dire conditions, endangering both the environment and human health.",

    "Proper e-waste recycling is a regimented affair, carried out in specialized facilities that handle hazardous materials safely. In contrast, informal recycling—common in developing regions—often entails unsafe practices that jeopardize workers' health and the environment."
];

// Pop up Section
const popup = document.getElementById('popup');
const popupc = document.getElementById('popupc');
const close = document.getElementById('close');

let currentMessageIndex = 0;

  function showPopup() {
    const message = messages[currentMessageIndex % messages.length];
    popupc.textContent = message;

    popup.style.display = 'inline-flex';
    currentMessageIndex++
  };

function hidePopup() {
    popup.style.display = 'none';
    setTimeout(showPopup, 50000);
};

setTimeout(showPopup, 3000);





// About Section Counter
document.addEventListener("DOMContentLoaded", function () {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 1000;
  valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
          clearInterval(counter);
      }
      }, duration);
  });
  });
// About Section Counter

const register_form = document.getElementById('Register');
const login_form = document.getElementById('login');
const signup_form = document.getElementById('signup');
const login_btn = document.getElementById('login-btn');
const logout_btn = document.getElementById('logout-btn');
const register_btn = document.getElementById('register-btn');

function register(){
  register_form.style.display = 'block';
  login_form.style.display = 'none';
  signup_form.style.display = 'none';
  login_btn.style.display = 'block';
  register_btn.style.display = 'none';
}

function login(){
  register_form.style.display = 'none';
  login_form.style.display = 'block';
  signup_form.style.display = 'none';
  login_btn.style.display = 'none';
  register_btn.style.display = 'block';
}

function signup(){
  register_form.style.display = 'none';
  login_form.style.display = 'none';
  signup_form.style.display = 'block';
}


function Logout() {
  localStorage.removeItem('token')
  window.location.reload()
}

