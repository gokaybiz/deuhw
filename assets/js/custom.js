const navTEMP = `        <div class="container">
<a class="navbar-brand" href="/">e-tic</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="./index.html">Anasayfa</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./about.html">Hakkimizda</a>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdownMenuLink">Kategoriler</a>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Erkek ayakkabilari</a>
                <a href="#" class="dropdown-item">Kadin ayakkabilari</a>
                <a href="#" class="dropdown-item">Cocuk ayakkabilari</a>
            </div>
        </li>
        <li class="nav-item">
            <a href="./checkout.html" class="nav-link">Sepetim</a>
        </li>
    </ul>
</div>
</div>`

const productTEMP = `        <div class="card urun-kart bg-secondary text-white text-center p-3" onclick="prod('product.html?urun=sayi')">
<a class="card-text">Ayakkabi MODEL#sayi</a>
<img src="./assets/img/ayakkabisayi.jpg" class="card-img-top" alt="urun sayi">
<div class="card-body">
    <a class="card-text">₺fiyat</a>
    <a class="btn btn-dark" onclick="added(event)">Sepete ekle</a>
</div>
</div>`

const prod = (n) => {
    window.location = n
}
const added = (e) => {
    e.stopPropagation()
    alert('sepete eklendi!')
}

window.onload = () => {
    console.log('Sayfa yuklendi!')
    const container = document.getElementsByClassName('container')[1] || null
    const navbar = document.getElementsByTagName('nav')[0] || null
    const isHomepage = container.firstElementChild.firstElementChild.children[1].firstChild.nextSibling || null
    const fillHomePage = () => {
        let products = ''
        let idList = new Array(12).fill().map((_, i) => i+1)
        for (let j = 0; j < 12; j++) {
            idList = idList.sort(() => Math.random() - 0.5)
            products += productTEMP.replace('sayi', idList[0])
                .replace('sayi', idList[0]) //model,
                .replace('sayi', idList[0]) //url
                .replace('sayi', idList[0]) //thumbnail
                .replace('fiyat', (Math.floor(Math.random() * (idList[0]) * 50) + 9).toString() + ',99') //price
            delete idList[0]
        }
        container.getElementsByClassName('card-columns justify-content-center')[0].innerHTML = products
    }

    if (navbar != null)
        navbar.innerHTML = navTEMP

    if (container != null && isHomepage != null && isHomepage.innerText.includes('Tum urunler')) {
        fillHomePage()
        setInterval(fillHomePage, 2200)
    }

    if (window.location.pathname.indexOf('product.html') > -1) {
        let query = window.location.search.split('=')
        if (query.length > 1 && typeof (+query[1]) == 'number') {
            let prodImg = document.getElementsByClassName('card-img-top img-fluid')[0]
            prodImg.src = (prodImg.src).replace('1', query[1])
        }
    }
}