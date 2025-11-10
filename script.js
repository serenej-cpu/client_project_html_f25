const year = new Date().getFullYear();
const footerText = document.querySelector('footer p');
footerText.innerHTML = `University of Michigan School of Information <span class="year">${year}</span> | <a href="https://umich.instructure.com/courses/137916" alt="Link to University of Michigan School of Information Canvas website">UMSI Career Development Office</a>`;