class Product
{
    constructor(title, description, price, img)
    {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
    }

    get Image()
    {
        return this.img;
    }

    get Title()
    {
        return this.title;
    }

    get Description()
    {
        return this.description;
    }
    get Price()
    {
        return this.price;
    }
}

function AddOffer(product)
{
    var content = document.getElementById("content");
    var div = document.createElement("div");
    div.id = "element";
    div.className = "offer";
    div.innerHTML = product.Title + 
        "<br><br><img src='" + product.Image + "'><br><br>" +
        product.Description + "<br><br><b>Cena: " + product.Price + 
        "zł";
    content.appendChild(div);
}

function RemoveOffers()
{
    var offers = document.getElementsByClassName("offer");
    var len = offers.length;
    for (var i = 0; i < len; i++)
        offers[0].remove();
}

const products = [
    new Product("Tranzystor BC547 NPN Bipolarny Arduino", "Sprzedawany po 10 sztuk", 3, "img/BC547-NPN.webp"),
    new Product("Zestaw kondensatorów monolitycznych", "1000 sztuk", 99, "img/ZESTAW-KONDENSATOROW-MONOLITYCZNYCH-1000SZT.webp"),
    new Product("Zestaw diód led białych i kolorowych", "Sprzedawane po 100 sztuk", 15, "img/ZESTAW-DIODY-LED-BIALE-I-KOLOROWE-DIP-5mm-100szt.webp"),
    new Product("Mostek prostowniczy KBPC5010", "50A 1000V", 5, "img/Mostek-prostowniczy-50A-1000V-KBPC5010.webp"),
    new Product("Niebieski wyświetlacz", "OLED 3-5V", 19, "img/Niebieski-wyswietlacz-0-96-OLED-I2C-3-5V-SSD1306.webp")
];

function Filter()
{
    RemoveOffers();
    if (document.getElementById("alfa").checked)
    {
        products.sort(function (a, b) {
            return a.Title > b.Title ? 1 : ((b.Title > a.Title) ? -1 : 0);
        })
    }
    else if (document.getElementById("desc").checked)
    {
        products.sort(function (a, b) {
            return a.Price < b.Price ? 1 : ((b.Price < a.Price) ? -1 : 0);
        })
    }
    else if (document.getElementById("asc").checked)
    {
        products.sort(function (a, b) {
            return a.Price > b.Price ? 1 : ((b.Price > a.Price) ? -1 : 0);
        })
    }
    ShowOffers();
}

function ShowOffers(params) {
    products.forEach(p => {
        AddOffer(p);
    });
}

function OnLoad()
{
    products.sort(function (a, b) {
        return a.Title > b.Title ? 1 : ((b.Title > a.Title) ? -1 : 0);
    })
    document.getElementById("alfa").checked = true;
    ShowOffers();
}
