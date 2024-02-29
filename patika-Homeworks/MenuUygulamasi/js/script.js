const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Kore",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Balık köftesi ile servis edilen baharatlı pirinç kekleri.`,
  },
  {
    id: 2,
    title: "Tavuklu Ramen",
    category: "Japonya",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Soya fasulyesi, yeşil soğan gibi sebzelerle servis edilen tavuk şehriye çorbası. İsteğe bağlı olarak yumurta isteyebilirsiniz. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Kore",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Haşlanmış sebzeler, özel acı sos ile servis edilir.`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "Çin",
    price: 5.99,
    img: "https://omnivorescookbook.com/wp-content/uploads/2017/04/2002_Dan-Dan-Noodles_550.jpg",
    desc: `Dan dan noodle, yeşil soğanla servis ediliyor. `,
  },
  {
    id: 5,
    title: "Yangzhou Kızarmış Pilav",
    category: "Çin",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou usulü kızarmış pilav, fasulye ve turşuyla servis ediliyor. `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japonya",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Soya sosuyla servis edilen Pirinçli Sandviç.`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Kore",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Siyah fasulye soslu erişte, yeşil soğanla servis ediliyor. `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "Çin",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Acı biber soslu erişte, soya fasulyesi ve soğanla servis edilir.`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japonya",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Bal ile servis edilen kırmızı fasulye ezmesi tatlısı.`,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["Menü"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Menü") {
        menuList(menu);
        document.getElementById("asya").innerText = null;
      } else {
        menuList(menuCategory);
        document.getElementById("asya").innerText = category;
      }
    });
  });
};
const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
