
const userProfile = {
  name: "Aidana",
  birthYear: 2007, 
  isDeveloper: true,
  hobbies: ["Horse riding", "Archery", "Volleyball"]
};
 

function showProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;
  const months = age * 12;
  const hobbiesCount = userProfile.hobbies.length;
 
  console.log("Name:", userProfile.name);
  console.log("Age:", age);
  console.log("Months old:", months);
  console.log("Hobbies count:", hobbiesCount);
 
  document.getElementById("profileInfo").textContent =
    userProfile.name + ", age: " + age + ", months: " + months + ", hobbies: " + hobbiesCount;
}
 
showProfile();
 

const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const profileBtn = document.getElementById("profileBtn");
 
profileBtn.addEventListener("click", () => {
  userProfile.name = usernameInput.value;
  userProfile.birthYear = Number(birthYearInput.value); 
  showProfile();
  document.getElementById("profileInfo").style.color = "green"; 
});
 

const hobbyList = document.getElementById("hobbyList");
const newItemInput = document.getElementById("newItem");
 
document.getElementById("addBtn").addEventListener("click", () => {
  if (newItemInput.value === "") {
    return;
  }
  const li = document.createElement("li");
  li.textContent = newItemInput.value;
  hobbyList.appendChild(li);
  newItemInput.value = "";
});
 
document.getElementById("removeBtn").addEventListener("click", () => {
  const last = hobbyList.lastElementChild;
  if (last) {
    last.remove();
  }
});
 

