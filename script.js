const claimBtn = document.getElementById("claimBtn");
const promoMessage = document.getElementById("promoMessage");

claimBtn.addEventListener("click", function () {
  promoMessage.textContent = "Use code SAVE20 at checkout!";
  promoMessage.classList.remove("hidden");
  claimBtn.textContent = "Code Claimed!";
  claimBtn.disabled = true;
});
