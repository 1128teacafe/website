const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle_menu'),
closeMenu = document.getElementById('close_menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})



const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"DRINKS" },' +
		'{ "type":"food", "name":"Wintermelon", "price":"M28 G38" },' +
		'{ "type":"food", "name":"Dark Chocolate", "price":"M28 G38" },' +
		'{ "type":"food", "name":"Okinawa", "price":"M28 G38"  } ]'
);
const mains = JSON.parse(
	"[" +
	'{ "type":"separator", "description":"ADD ONS" },' +
	'{ "type":"food", "name":"Pearl", "price":"10" },' +
	'{ "type":"food", "name":"NATA", "price":"10" },' +
	'{ "type":"food", "name":"Whipped Cream", "price":"1"  } ]'
);
const desserts = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"SERVICES" },' +
		'{ "type":"food", "name":"Walk-in", "description":"You can buy your favorite quickly in your break time!", "price":"" },' +
		'{ "type":"food", "name":"Dine-in", "description":"1128 provides a comfortableplace for you to enjoy your experience!" , "price":"" },' +
		'{ "type":"food", "name":"Delivery", "description":"Anywhere you are in Daet, you can order!" , "price":"" } ]'
);
/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});

function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);





