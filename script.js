import { allProjects } from "./projects.js";
import { countMonths } from "./countMonths.js";

const firstBox = document.querySelector('.first-box');
const secondBox = document.querySelector('.second-box');
const thirdBox = document.querySelector('.third-box');
const myProject = document.querySelector('.my-project');
const projectGroup = document.querySelectorAll('.project-group');  
const myOtherProject = document.querySelectorAll('.my-other-projects');
const projectsVid = document.querySelector('.projects-demo');


const home_ = document.getElementById('home_');
const about_ = document.getElementById('about_');
const skills_ = document.getElementById('skills_');
const projects_ = document.getElementById('projects_');
const contact_ = document.getElementById('contact_');
const toContact = document.querySelector('.contactme');

const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const activeBar = document.querySelector('.active-bar');

const navLink_ = [home_, about_, skills_, projects_, contact_];
const navLink = [home, about, skills, projects, contact, activeBar];

const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navSkills = document.querySelector('.nav-skills');
const navProjects = document.querySelector('.nav-projects');
const navContact = document.querySelector('.nav-contact');

const toggleNav = document.querySelector('.nav-bar');
const navbar = document.querySelector('.nav-mobile');

const input = {
  client_name   :   document.getElementById('full-name'),
  email         :   document.getElementById('email'),
  subject       :   document.getElementById('subject'),
  message       :   document.getElementById('message'),
}

const navLinkFooter = [navHome, navAbout, navSkills, navProjects, navContact];

toContact.addEventListener('click', goToContact);
function goToContact(){
  contactPage();
  navToContact();
}

let mobileNavClose = false;
toggleNav.addEventListener('click', () => {
  toggleNav.classList.toggle('toggle');
  navbar.classList.toggle('toggle');
  mobileNavClose = !mobileNavClose
  if(mobileNavClose)
    return;
  toggleNav.classList.add('close');
  navbar.classList.add('close');
  navbar.addEventListener('animationend', () => {
    toggleNav.classList.remove('close');
    navbar.classList.remove('close');
  }, {once: true})
})

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
    }, {once: true})
      
    }, {once: true})

    }, {once: true})

  }, 800)
}

function resetAnimation(){
  [firstBox, secondBox, thirdBox].forEach(el => {
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

navLink_.forEach(nav => nav.addEventListener('click', () => {
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
  [about_, skills_, projects_, contact_].forEach(el => el.classList.remove('active'));
  [about, skills, projects, contact].forEach(el => el.classList.remove('active'));
  
  home_.classList.add('active');
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
  [home_, skills_, projects_, contact_].forEach(el => el.classList.remove('active'));
  [home, skills, projects, contact].forEach(el => el.classList.remove('active'));
  
  about_.classList.add('active');
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
  [home_, about_, projects_, contact_].forEach(el => el.classList.remove('active'));
  [home, about, projects, contact].forEach(el => el.classList.remove('active'));

  skills_.classList.add('active');
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
  [home_, skills_, about_, contact_].forEach(el => el.classList.remove('active'));
  [home, skills, about, contact].forEach(el => el.classList.remove('active'));

  projects_.classList.add('active');
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
  [home_, skills_, about_, projects_].forEach(el => el.classList.remove('active'));
  [home, skills, about, projects].forEach(el => el.classList.remove('active'));

  contact_.classList.add('active');
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
  projectGroup.forEach(group => group.innerHTML = toHTML );
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
  myOtherProject.forEach(el => el.innerHTML = toHTML)
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

document.querySelector('.count-projects').innerHTML = allProjects.length;
document.querySelector('.count-experience').innerHTML = countMonths('2025-07-15', Date.now())


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
const contactSection = {
  anim1   :   document.querySelector('.get-in-touch'),
  anim2   :   document.querySelector('.contact-box'),
  anim3   :   document.querySelector('.contact-info'),
  anim4   :   document.querySelector('.send-message'),
}

const aboutSection = {
  anim1   :   document.querySelector('.bio-container'),
  anim2   :   document.querySelector('.picture-box2'),
  anim3   :   document.querySelector('.my-journey'),
}

function addAnimation(){
  for(let a in contactSection){
    contactSection[a].classList.add('anim');
  }
}

function aboutAnimation(){
  for(let a in aboutSection){
    aboutSection[a].classList.remove('close');
    aboutSection[a].classList.add('anim');
  }
}

function resetContactAnimation(){
  for(let a in contactSection){
    contactSection[a].classList.remove('anim');
  }
}

const observer2 = new IntersectionObserver((viewPage) => {
  viewPage.forEach(page => {
    if(page.isIntersecting){
      switch(page.target.className){
        case 'home':
          resetContactAnimation();
          break;
        case 'about':
          aboutAnimation();
          resetContactAnimation();
          break;
        case 'skills':
          resetContactAnimation();
          break;
        case 'projects':
          resetContactAnimation();
          break;
        case 'contact':
          addAnimation();
          break;
        default:
          break;
      }
    }
  });
}, { threshold: 0.25 });

[...body].forEach(child => observer2.observe(child));


/* PROJECTS ANIMATION */
function setAnimationState(state) {
  projectGroup.forEach(el => el.style.animationPlayState = state);
}

myProject.addEventListener('mouseenter', () => setAnimationState("paused"));
myProject.addEventListener('mouseleave', () => setAnimationState("running"));
projectsVid.addEventListener('mouseenter', () => myOtherProject.forEach(el => el.getAnimations().forEach(anim => anim.pause())));
projectsVid.addEventListener('mouseleave', () => myOtherProject.forEach(el => el.getAnimations().forEach(anim => anim.play())));
