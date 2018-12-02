const cats = [
    {
        name: 'cat1',
        img: 'res/cat1.jpg'
    },
    {
        name: 'cat2',
        img: 'res/cat2.jpg'
    },
    {
        name: 'cat3',
        img: 'res/cat3.jpg'
    },
    {
        name: 'cat4',
        img: 'res/cat4.jpg'

    },
    {
        name: 'cat5',
        img: 'res/cat5.jpg'
    }
];
(() => {
    const catContainer = document.getElementById('catContainer');
    linkCatLayout = (cat, index) => {
        const elememtExist = document.getElementById(`${cat.name}`);
        const catNodes = catContainer.childNodes;
        for (child in catNodes) {
            if (child.length-- && catNodes[child].style) {
                catNodes[child].style.display = 'none';
            }
        }
        if (!elememtExist) {
            const cardNode = document.createElement('div');
            const imgEle = document.createElement('img');
            const counterSpan = document.createElement('span');
            let counter = 0;
            imgEle.src = cat.img;
            imgEle.className = 'cat-image';
            cardNode.className = 'card'
            cardNode.innerHTML = cat.name;
            cardNode.setAttribute('id', cat.name);
            cardNode.style.display = 'block';
            cardNode.addEventListener('click', (e) => {
                e.preventDefault();
                counter++;
                counterSpan.innerHTML = `clicked ${counter}`;
            });
            cardNode.append(imgEle, counterSpan);
            catContainer.appendChild(cardNode);
        }
        else {
            document.getElementById(`${cat.name}`).style.display = 'block';
        }
    }

    createSideMenu = () => {
        const sideMenu = document.getElementById('sidebar');
        cats.map((cat, index) => {
            const SideMenuListitem = document.createElement('a');
            SideMenuListitem.innerHTML = cat.name;
            SideMenuListitem.setAttribute('href', 'javascript:void(0);');
            SideMenuListitem.addEventListener('click', (e) => {
                const active = document.querySelector('.active');
                if (active) {
                    active.classList.remove('active');
                }
                e.currentTarget.classList.add('active');
                e.preventDefault();
                linkCatLayout(cat, index);
            })
            sideMenu.appendChild(SideMenuListitem);
            if(index === 0 ){
                linkCatLayout(cat, index);
                SideMenuListitem.classList.add('active')
            }
        })
    }
    createSideMenu();
})();