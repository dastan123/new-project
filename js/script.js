class FeatureTab {
      constructor(src, tag, parentSelector, ...rest) {
            this.src = src;
            this.tag = tag;
            this.rest = rest;
            this.parent = document.querySelector(parentSelector);
      }
 
      render() {
            const element = document.createElement('li');
            if (this.rest.length === 0) {
                  element.classList.add('list');
            } else {
                  this.rest.forEach(classes => element.classList.add(classes));
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
      'love.png',
      'CLEAN CODE',
      '.features-list'
).render();


const comment = new FeatureTab(
      'comment.png',
      'FREE SUPPORT',
      '.features-list'
).render();


const idea = new FeatureTab(
      'idea.png',
      'CREATIVE IDEA',
      '.features-list'
).render();

// tab

const listParent = document.querySelector('.features-list'),
      list = document.querySelectorAll('.list'),
      tag = document.querySelectorAll('.features-tag'),
      text = document.querySelectorAll('.features-text'),
      img = document.querySelectorAll('.images');

function showActiveClasses(i = 0) {
      // tag.forEach(tag => tag.classList.add('active-tag'));
      // text.forEach(text => text.classList.add('active-tag'));
      // img.forEach(img => img.classList.add('active-tag'));

      tag[i].classList.add('active-tag');
      text[i].classList.add('active-text');
      img[i].classList.add('active-images');
}


function hideActiveClasses() {
      tag.forEach(tag => tag.classList.remove('active-tag'));
      text.forEach(text => text.classList.remove('active-text'));
      img.forEach(img => img.classList.remove('active-images'));
}

listParent.addEventListener('click', e => {
      const target = e.target;
      if (target.classList.contains('list')) {
            list.forEach((li, i) => {
                  if (target == li) {
                        hideActiveClasses();
                        showActiveClasses(i);
                  }
            console.log('hello');
            });
      } else {
            hideActiveClasses();
      }

      // if (target.classList.contains('active-tag')) {
      //       hideActiveClasses();
      // }
});

// console.log('request data');

// const req = new Promise(function(resolve, reject) {
//       setTimeout(() => {
//             console.log('hello');
      
//             const product = {
//                   name: 'TV',
//                   price: 2000
//             };

//             const hello = {
//                   what: 'hello'
//             };

//             resolve(hello);
//       }, 2000);
// });

// req.then((product) => {
//       return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                   product.status = 'ordered';
//                   resolve(product);
//             }, 2000);
//       });
// }).then((data) => {
//       data.modify = true;
//       return data;
//       // console.log(data);
// }).then((dta) => {
//       dta.result = 'good';
//       return dta;
// }).then(yy => {
//       console.log(yy);
// }).catch(() => {
//       console.error('Error');
// }).finally(() => {
//       console.log('finally');
// });

const test = time => {
      return new Promise(resolve => {
            setTimeout(() => resolve(), time);
      });
};

// test(1000).then(() => console.log('1000sec'));
// test(2000).then(() => console.log('2000sec'));

Promise.all([test(10200), test(2000)]).then(() => {
      console.log('All');
});

Promise.race([test(21000), test (2000)]).then(() => {
      console.log('helllo');
});

const req = new Promise ((resolve, reject) => {
      setTimeout(() => {
            const hello = {
                  hello: 'dimitry'
            };
            // return hello;
      }, 1000);

}).then((data) => {
      console.log(data);
      return data;
}).then(data => {
      data.hello = 'hello';
      console.log(data);
}).catch(() => {
      console.log('something went terribly wrong');
});

