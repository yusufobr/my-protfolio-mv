const btnOpen = document.getElementById("hamburger-icon");
const btnClose = document.getElementById("close-btn");
const nav = document.getElementById("mobile-nav");
const mobileMenuLinks = nav.querySelectorAll("a");

btnOpen.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

btnClose.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.add("hidden");
  });
});

//  Cards data

const projects = [
  {
    title: "Tonic XX",
    company: "CANOPY",
    post: "Back End Dev",
    year: "2014",
    image: "./assets/Snapshoot-1.png",
    technologies: ["html", "css", "javascript"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.",
    liveVersion: "/#",
    githubLink: "/#",
  },
  {
    title: "Multi-Post Stories",
    company: "FACEBOOK",
    post: "Full Stack Dev",
    year: "2015",
    image: "./assets/Snapshoot-2.png",
    technologies: ["html", "css", "Ruby on rails", "javascript"],
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.",
    liveVersion: "/#",
    githubLink: "/#",
  },
  {
    title: "Facebook 360",
    company: "FACEBOOK",
    post: "Back End Dev",
    year: "2017",
    image: "./assets/Snapshoot-3.png",
    technologies: ["html", "css", "Ruby on rails", "javascript"],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.",
    liveVersion: "/#",
    githubLink: "/#",
  },
  {
    title: "Uber Navigation",
    company: "UBER",
    post: "Full End Dev",
    year: "2019",
    image: "./assets/Snapshoot-4.png",
    technologies: ["html", "css", "php", "javascript"],
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.",
    liveVersion: "/#",
    githubLink: "/#",
  },
];

// Get the container element
const container = document.getElementById("works-container");

// Loop the cards
for (let i = 0; i < projects.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("card-img");
  image.src = projects[i].image;
  image.alt = `work-${i + 1}`;
  card.appendChild(image);

  const details = document.createElement("div");
  details.classList.add("card-details");
  card.appendChild(details);

  const item = document.createElement("div");
  item.classList.add("card-item-mg");
  details.appendChild(item);

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = projects[i].title;
  item.appendChild(title);

  const info = document.createElement("div");
  info.classList.add("card-info");
  item.appendChild(info);

  const company = document.createElement("span");
  company.classList.add("info-active");
  company.textContent = projects[i].company;
  info.appendChild(company);

  const dot1 = document.createElement("img");
  dot1.src = "./assets/Counter.svg";
  dot1.alt = "dot";
  info.appendChild(dot1);

  const role = document.createElement("span");
  role.textContent = projects[i].role;
  info.appendChild(role);

  const dot2 = document.createElement("img");
  dot2.src = "./assets/Counter.svg";
  dot2.alt = "dot";
  info.appendChild(dot2);

  const year = document.createElement("span");
  year.textContent = projects[i].year;
  info.appendChild(year);

  const description = document.createElement("p");
  description.classList.add("card-descrip", "card-item-mg");
  description.textContent = projects[i].description;
  details.appendChild(description);

  const tags = document.createElement("ul");
  tags.classList.add("card-tags", "card-item-mg");
  details.appendChild(tags);

  for (let j = 0; j < projects[i].technologies.length; j++) {
    const tag = document.createElement("li");
    tag.classList.add("card-tag");
    tag.textContent = projects[i].technologies[j];
    tags.appendChild(tag);
  }

  const action = document.createElement("div");
  action.classList.add("card-action");
  details.appendChild(action);

  const button = document.createElement("button");
  button.classList.add("card-btn");
  button.textContent = "See Project";
  action.appendChild(button);

  container.appendChild(card);
}
