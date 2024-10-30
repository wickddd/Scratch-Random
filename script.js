const imagebox = document.getElementById("projecthumb");
const title = document.getElementById("title");
const authpfp = document.getElementById('ap');
const creator = document.getElementById('creator');

const loves = document.getElementById('loves');
const stars = document.getElementById('stars');
const remixes = document.getElementById('remixes');
const views = document.getElementById('views');

let game = null;

function randomnum(min, max) {
  return Math.floor(Math.random() * max + min);
}

async function buttonclick() {
  while (3 === 3) {
    let random = randomnum(1, 1087364782);
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(`https://api.scratch.mit.edu/projects/${random}`);
    let data;

    await fetch(url)
      .then((response) => response.json())
      .then((dataLocal) => {
        data = dataLocal;
        return dataLocal;
      });

    if (!data.code) {
      imagebox.src = data.image;
      title.innerText = data.title;
      authpfp.src = data.author.profile.images['50x50'];
      creator.innerText = 'by ' + data.author.username;

      views.innerText = '👁️ ' + data.stats.views
      loves.innerText = '❤️ ' + data.stats.loves
      stars.innerText = '⭐ ' + data.stats.favorites
      remixes.innerText = '🔄 ' + data.stats.remixes

      game = random;
      break;
    }
  }
}

function OpenGame() {
  window.open(`https://scratch.mit.edu/projects/${game}`, '_blank').focus();
}
