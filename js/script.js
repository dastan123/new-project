class FeatureTab {
  constructor(src, tag, parentSelector, ...rest) {
    this.src = src;
    this.tag = tag;
    this.rest = rest;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("li");
    if (this.rest.length === 0) {
      element.classList.add("list");
    } else {
      this.rest.forEach((classes) => element.classList.add(classes));
    }

    element.innerHTML = `
            <p class="images">
             <img class="features-image glasses-image" src="img/${this.src}" alt=""></img>
            </p> 
            <h3 class="features-tag design-tag">${this.tag}</h3>

            <hr class="feature-line">

            <p class="features-text design-text">
             Lorem Ipsum is simply dummy text of the <br>
             printing and typesetting let. Lorem <br>
             Ipsum has been the industry.
            </p>
            `;
    this.parent.append(element);
  }
}

const love = new FeatureTab(
  "love.png",
  "CLEAN CODE",
  ".features-list"
).render();

const comment = new FeatureTab(
  "comment.png",
  "FREE SUPPORT",
  ".features-list"
).render();

const idea = new FeatureTab(
  "idea.png",
  "CREATIVE IDEA",
  ".features-list"
).render();

// tab

const listParent = document.querySelector(".features-list"),
  list = document.querySelectorAll(".list"),
  tag = document.querySelectorAll(".features-tag"),
  text = document.querySelectorAll(".features-text"),
  img = document.querySelectorAll(".images");

function showActiveClasses(i = 0) {
  // tag.forEach(tag => tag.classList.add('active-tag'));
  // text.forEach(text => text.classList.add('active-tag'));
  // img.forEach(img => img.classList.add('active-tag'));

  tag[i].classList.add("active-tag");
  text[i].classList.add("active-text");
  img[i].classList.add("active-images");
}

function hideActiveClasses() {
  tag.forEach((tag) => tag.classList.remove("active-tag"));
  text.forEach((text) => text.classList.remove("active-text"));
  img.forEach((img) => img.classList.remove("active-images"));
}

listParent.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("list")) {
    list.forEach((li, i) => {
      if (target == li) {
        hideActiveClasses();
        showActiveClasses(i);
      }
      console.log("hello");
    });
  } else {
    hideActiveClasses();
  }

  // if (target.classList.contains('active-tag')) {
  //       hideActiveClasses();
  // }
});

// Modal

const btn = document.querySelector(".open-modal"),
  modal = document.querySelector(".modal"),
  modalContent = document.querySelector(".modal-content"),
  modalDialog = document.querySelector(".modal-dialog"),
  closeModal = document.querySelector(".close"),
  form = document.querySelector("form");

function openModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

btn.addEventListener("click", (e) => {
  openModal();
});

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (
    target.classList.contains("modal") ||
    target.classList.contains("close")
  ) {
    hideModal();
  }
});

const message = {
  loading: "img/loading.png",
  success: "Succesfully Loaded",
  failed: "Failed",
};

function modalData(form) {
  modal.addEventListener("submit", (e) => {
    e.preventDefault();
    const statusMessage = document.createElement("img");
    statusMessage.src = message.loading;
    statusMessage.style.cssText = `
            width: 50px;
            height: 50px;
            `;
    modalContent.insertAdjacentElement('beforeend', statusMessage);
    const formData = new FormData(form);
    const object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    });
    fetch('js/index.php', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(data => data.text())
    .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        statusMessage.remove();
        showThanksModal(message.failed);
      }).finally(() => {
        form.reset();
      });
      // req.addEventListener("load", (e) => {
    //   if (req.status === 200) {
    //     console.log(req.response);
    //     showThanksModal(message.success);
    //     statusMessage.remove();
    //     form.reset();
    //   } else {
    //     showThanksModal(message.failed);
    //   }
    // });
  });
}

modalData(form);

function showThanksModal(message) {
  // const prevModalContent = document.querySelector('.modal-dialog');
  modalDialog.classList.add("hide");
  // openModal();
  const div = document.createElement("div");
  div.classList.add("modal-dialog");
  div.innerHTML = `
        <img class="close" src="img/cancel.png" width="20" alt="">
        <h2>${message}</h2>
        `;
  modalContent.append(div);
  setTimeout(() => {
    div.remove();
    modalDialog.classList.add("show");
    modalDialog.classList.remove("hide");
    hideModal();
  }, 4000);
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify({name: 'Alex'}),
//   headers: {
//     'Content-type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

const btnScroll = document.querySelector('.learn-button');

btnScroll.addEventListener('click', e => {
  document.documentElement.scrollTop = 3000;
});

// Tabs 

const tabs = document.querySelector('.tab'),
      tab = document.querySelectorAll('.tabs');

      function deletePages() {
        tab.forEach(list => {
              list.classList.remove('active-tab');
        });
  }
  
  function showPages(i = 1) {
        tab[i].classList.add('active-tab');
  }
  
  deletePages();
  showPages();

tabs.addEventListener('click', e => {
      const target = e.target;
      console.log('hello');

      if (target && target.classList.contains('tabs')) {
        tab.forEach((item, i) => {
          if (target == item) {
            deletePages();
            showPages(i);
          }
        });
      }
});
// const hello = new Promise((resolve, reject) => {
//         const names = [
//           Anna = 'persone',
//           David = 'persone',
//           Mars = 'planet',
//           Earth = 'platet',
//           Earth = 5
//         ];
      
//         resolve(names);
// });
// hello.then((names) => {
//   names.Venus = 'planet';
//   return names;
// })
// .then(data => {
//     data.hello = 5;
//     return data;
// })
// .then((dast) => {
//   console.log(dast);
// }).catch(() => {
//   console.log('Somethink went wrong');
// });
// json-server --host 127.0.0.1  db.json
fetch('http://127.0.0.1:3000/menu')
.then(data => data.json())
.then(data => console.log(data));



















