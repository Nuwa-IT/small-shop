function toggleMode() {
    document.body.classList.toggle('dark');
}

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const btn = document.createElement("button");
    btn.innerText = "Light/Dark Mode";
    btn.onclick = toggleMode;
    footer.appendChild(btn);
});

let cartCount = 0;
let cartTotal = 0;

function addToCart(price) {
    cartCount++;
    cartTotal += price;
    updateCart();
    alert("නිෂ්පාදනය එකක් cart එකට එකතු වුණා! 🛒");
}

function removeFromCart() {
    if (cartCount > 0) {
        const averagePrice = cartTotal / cartCount;
        cartCount--;
        cartTotal -= averagePrice;
        updateCart();
        alert("Item එකක් cart එකෙන් අයින් කළා 🗑️");
    } else {
        alert("Cart එක හිස්යි 😅");
    }
}

function clearCart() {
    cartCount = 0;
    cartTotal = 0;
    updateCart();
    alert("Cart එක හිස් කරා 🔁");
}

function updateCart() {
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);
}

// Dark mode toggle එක
function toggleMode() {
    document.body.classList.toggle('dark');
}

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const btn = document.createElement("button");
    btn.innerText = "Light/Dark Mode";
    btn.onclick = toggleMode;
    footer.appendChild(btn);
});
function submitOrder() {
    if (cartCount === 0) {
        alert("ඔයාගේ cart එක හිස්යි! 🛒");
        return false;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name && email && phone) {
        alert(`🙏 ස්තූතියි ${name}!\nඔයාගේ ඇණවුම සාර්ථකයි.\nමුළු වටිනාකම රු. ${cartTotal.toFixed(2)}\nඅපි ඉක්මනින්ම ඔබ අමතන්නෙමු.`);
        clearCart(); // checkout වෙලා පස්සේ cart එක clear කරයි
        document.getElementById("checkout-form").reset(); // form එක reset වෙනවා
        return false; // form එක reload නොවෙන්න
    } else {
        alert("කරුණාකර සියලු විස්තර පුරවන්න 🙏");
        return false;
    }
}

