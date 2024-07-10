const baseURL = "https://github.com/princessrichmond/wdd230/";
const linksURL = "https://github.com/princessrichmond/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
  }

function displayLinks(weeks) {
const learningActivities = document.querySelector('.card ul');

weeks.forEach(week => {
    const weekItem = document.createElement('li');
    const weekHeader = document.createElement('strong');
    weekHeader.textContent = week.week;
    weekItem.appendChild(weekHeader);

    week.links.forEach((link, index) => {
    const linkElement = document.createElement('a');
    linkElement.href = resolveURL(link.url);
    linkElement.textContent = link.title;

    if (index < week.links.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = ' | ';
        weekItem.appendChild(separator);
    }

    weekItem.appendChild(linkElement);
    });

    learningActivities.appendChild(weekItem);
});
}

function resolveURL(url) {
// If the URL starts with 'http' assume it's already absolute, otherwise prepend baseURL
return url.startsWith('http') ? url : baseURL + url;
}
  

getLinks();