import { allProjects } from "./projects.js";

const firstBox = document.querySelector('.first-box');
const secondBox = document.querySelector('.second-box');
const thirdBox = document.querySelector('.third-box');
const lastBox = document.querySelector('.last-box');
const myProject = document.querySelector('.my-project');
const myOtherProject = document.querySelector('.my-other-projects');

const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const activeBar = document.querySelector('.active-bar');

const navLink = [home, about, skills, projects, contact, activeBar];

const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navSkills = document.querySelector('.nav-skills');
const navProjects = document.querySelector('.nav-projects');
const navContact = document.querySelector('.nav-contact');

const input = {
  client_name   :   document.getElementById('full-name'),
  email         :   document.getElementById('email'),
  subject       :   document.getElementById('subject'),
  message       :   document.getElementById('message'),
}

const navLinkFooter = [navHome, navAbout, navSkills, navProjects, navContact];

function introAnimation(){
  setTimeout(() => {
    firstBox.classList.remove('hide');
    firstBox.classList.toggle('active');

    firstBox.addEventListener('animationend', () => {
    firstBox.classList.toggle('active');
    secondBox.classList.toggle('active');

    secondBox.addEventListener('animationend', () => {
    secondBox.classList.remove('hide');
    secondBox.classList.toggle('active');
    thirdBox.classList.toggle('active');

    thirdBox.addEventListener('animationend', () => {
    thirdBox.classList.remove('hide');
    thirdBox.classList.toggle('active');

    lastBox.classList.remove('hide');
    lastBox.classList.toggle('active');
    }, {once: true})
      
    }, {once: true})

    }, {once: true})

  }, 800)
}

function resetAnimation(){
  [firstBox, secondBox, thirdBox, lastBox].forEach(el => {
    el.classList.remove('active');
    el.classList.add('hide');
  })
}

let active = true;

const observer = new IntersectionObserver((viewPage) => {
  viewPage.forEach(page => {
    if(page.isIntersecting && page.target.classList.contains('home')){
      introAnimation();
    } else if(!page.isIntersecting && !page.target.classList.contains('home')){
      resetAnimation();
    } 
    console.log(page.target.className);
    if(!active) return;
    if(page.isIntersecting){
      switch(page.target.className){
        case 'home':
          navToHome();
          break;
        case 'about':
          navToAbout();
          break;
        case 'skills':
          navToSkills();
          break;
        case 'projects':
          navToProjects();
          break;
        case 'contact':
          navToContact();
          break;
        default:
          break;
      }
    }
  });
}, { threshold: 0.5 });

const body = document.body.children;
[...body].forEach(child => observer.observe(child));

navLink.forEach(nav => nav.addEventListener('click', () => {
  switch (nav.textContent) {
    case 'About':
      aboutPage();
      navToAbout();
      break;
    case 'Skills':
      skillsPage()
      navToSkills();
      break;
    case 'Projects':
      projectsPage()
      navToProjects();
      break;
    case 'Contact':
      contactPage()
      navToContact();
      break;
    default:
      homePage();
      navToHome();
      break;
  }
  })
);

navLinkFooter.forEach(nav => nav.addEventListener('click', () => {
  switch (nav.textContent) {
    case 'About':
      aboutPage();
      navToAbout();
      break;
    case 'Skills':
      skillsPage()
      navToSkills();
      break;
    case 'Projects':
      projectsPage()
      navToProjects();
      break;
    case 'Contact':
      contactPage()
      navToContact();
      break;
    default:
      homePage();
      navToHome();
      break;
  }
}))

function homePage(){
  document.querySelector('.home').scrollIntoView({
    behavior: 'smooth'
  });
  active = false;
  document.addEventListener('scrollend', () => {
    active = true;
  });
}

function aboutPage(){
  document.querySelector('.about').scrollIntoView({
    behavior: 'smooth'
  });
  active = false;
  document.addEventListener('scrollend', () => {
    active = true;
  });
}

function skillsPage(){
  document.querySelector('.skills').scrollIntoView({
    behavior: 'smooth'
  });
  active = false;
  document.addEventListener('scrollend', () => {
    active = true;
  });
}

function projectsPage(){
  document.querySelector('.projects').scrollIntoView({
    behavior: 'smooth'
  });
  active = false;
  document.addEventListener('scrollend', () => {
    active = true;
  });
}

function contactPage(){
  document.querySelector('.contact').scrollIntoView({
    behavior: 'smooth'
  });
  active = false;
  setTimeout(() => {
    active = true;
  }, 1000)
}

function navToHome(){
  [about, skills, projects, contact].forEach(el => el.classList.remove('active'));
  
  home.classList.add('active');
  if(home.classList.contains('active')){
    activeBar.classList.add('home-is-active');
    activeBar.style.display = 'flex';
      [about, skills, projects, contact].forEach(el => {
        activeBar.classList.remove(`${el.textContent.toLowerCase()}-is-active`);
      });
  } 
}

function navToAbout(){
  [home, skills, projects, contact].forEach(el => el.classList.remove('active'));
  about.classList.add('active');
  if(about.classList.contains('active')){
    activeBar.classList.add('about-is-active');
    activeBar.style.display = 'flex';
      [home, skills, projects, contact].forEach(el => {
        activeBar.classList.remove(`${el.textContent.toLowerCase()}-is-active`);
      });
  } 
}

function navToSkills(){
  [home, about, projects, contact].forEach(el => el.classList.remove('active'));
  skills.classList.add('active');
  if(skills.classList.contains('active')){
    activeBar.classList.add('skills-is-active');
    activeBar.style.display = 'flex';
      [home, about, projects, contact].forEach(el => {
        activeBar.classList.remove(`${el.textContent.toLowerCase()}-is-active`);
      });
  } 
}

function navToProjects(){
  [home, skills, about, contact].forEach(el => el.classList.remove('active'));
  projects.classList.add('active');
  if(projects.classList.contains('active')){
    activeBar.classList.add('projects-is-active');
    activeBar.style.display = 'flex';
      [home, skills, about, contact].forEach(el => {
        activeBar.classList.remove(`${el.textContent.toLowerCase()}-is-active`);
      });
  } 
}

function navToContact(){
  [home, skills, about, projects].forEach(el => el.classList.remove('active'));
  contact.classList.add('active');
  if(contact.classList.contains('active')){
    activeBar.classList.add('contact-is-active');
    activeBar.style.display = 'flex';
      [home, skills, about, projects].forEach(el => {
        activeBar.classList.remove(`${el.textContent.toLowerCase()}-is-active`);
      });
  } 
}
  

function renderMyProject(){
  const renderMyProjects = allProjects.filter(project => project.myProject);
  const toHTML = renderMyProjects.map(project =>
    `
    <div class="project-container">
        <div class="project-img">
          <img src="${project.image}" alt="" srcset="">
        </div>         
        <div class="description-box">
          <p class="project-name">${project.name}</p>
          <p class="project-description">
            ${project.description}
          </p>
          <div class="see-project">
            <div class="view-code">
              <a href="${project.code}" target="_blank">
                <i class="bi bi-github"></i>
                Code
              </a>
            </div>
            <div class="demo">
              <a href="${project.demo}" target="_blank">
                <i class="bi bi-github"></i>
                Demo
              </a>
            </div>
          </div>
        
        </div> 
      </div>
    `
  ).join('');
  myProject.innerHTML = toHTML;
}

function renderOtherProject(){
  const renderOtherProjects = allProjects.filter(project => project.otherProject);
  const toHTML = renderOtherProjects.map(project => 
    `
      <div class="other-projects">
        <div class="other-project-img">
          <img src="${project.image}" alt="" srcset="">
        </div>         
        <div class="other-description-box">
          <p class="project-name">${project.name}</p>
          <p class="project-description">
            ${project.description}
          </p>
          <div class="see-project">
            <div class="demo">
              <div class="play-video">
                <i class="bi bi-play-circle-fill"></i>
                View Demo
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div class="overlay" id="overlay">
        <div class="video-container">
          <button class="close-video" id="closeVideo">&times;</button>
          <video id="myVideo" class="my-video" controls>
            <source src="${project.vid}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    `
  ).join('');
  myOtherProject.innerHTML = toHTML;
}

function wacthDemo(){
  const playBtn = document.querySelectorAll('.play-video');
  const closeBtn = document.querySelectorAll('.close-video');
  const overlay = document.querySelectorAll('.overlay');
  const video = document.querySelectorAll('.my-video');

  playBtn.forEach((play, index) => {
    play.addEventListener('click', () => {
      overlay[index].style.display = 'flex';
      video[index].play();
    })
  })
  closeBtn.forEach((close, index) => {
    close.addEventListener('click', () => {
      overlay[index].style.display = 'none';
      video[index].pause();
      video[index].currentTime = 0;
    })
  })
}

document.querySelector('.count').innerHTML = allProjects.length;

renderMyProject();
renderOtherProject();
wacthDemo();

document.getElementById('message').addEventListener('input', function(){
  this.style.height = 'auto'; 
  this.style.height = this.scrollHeight + 'px'; 
})

document.querySelector('.send-btn').addEventListener('click', () => {
  let form = {
    client_name   :   document.getElementById('full-name').value,
    email         :   document.getElementById('email').value,
    subject       :   document.getElementById('subject').value,
    message       :   document.getElementById('message').value,
  }

  if(!form.client_name || !form.email || !form.subject || !form.message){
    checkInvalidBox(form);
  } 
  else {
    emailjs.send('service_jff7blh', 'template_ts32kjk', form).then(messageSent(form));
  }
})

function messageSent(form){
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message-sent">
      <div class="thank-you">
        <p>
          Thank you for reaching out. I will respond as soon as possible.
        </p>
      </div>
    </div>
  `)
  const messageOverlay = document.querySelector('.message-sent');
  const textAnim = document.querySelector('.thank-you p');
  textAnim.addEventListener('animationend', () => {
    messageOverlay.classList.add('fadeOut');
    messageOverlay.addEventListener('animationend', () => {
      setTimeout(() => {
        messageOverlay.remove();
      }, 500)
    }, {once: true})
  }, {once: true})
  for(let key in form){
    input[key].value = '';
  }
}

function checkInvalidBox(form){
  for(let key in form){
    if(!form[key].trim()){
      input[key].classList.add('error');
      input[key].focus();
      return
    } else {
      input[key].classList.remove('error');
    }
  }
}

/**---ANIMATION FOR CONTACTS---**/
const add = {
  anim1   :   document.querySelector('.get-in-touch'),
  anim2   :   document.querySelector('.card1'),
  anim3   :   document.querySelector('.card2'),
  anim4   :   document.querySelector('.contact-box'),
}

function addAnimation(){
  for(let a in add){
    console.log('animation added!');
    add[a].classList.add('anim');
  }
}

function resetContactAnim(){
  for(let a in add){
    console.log('animation reset!');
    add[a].classList.remove('anim');
  }
}

const observer2 = new IntersectionObserver((viewPage) => {
  viewPage.forEach(page => {
    if(page.isIntersecting && page.target.className === 'contact'){
      addAnimation();
    } else if(page.isIntersecting && (page.target.className === 'skills' || page.target.className === 'home')){
      resetContactAnim();
    }
  });
}, { threshold: 0.3 });

[...body].forEach(child => observer2.observe(child));
