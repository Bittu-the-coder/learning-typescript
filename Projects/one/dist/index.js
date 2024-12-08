"use strict";
const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector("#form");
const main_container = document.querySelector(".main-container");
// Reusable fetch function
async function myCostumFecher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network response was not ok - status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
// Function to render user data in UI
const showResultUI = (singleUser) => {
    const { avatar_url, login, url, location } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div class="card">
        <img src="${avatar_url}" alt="${login}" />
        <hr />
        <div class="card-footer">
          
          <p style='text-transform: uppercase;'>${login}</p>
          <a href="${url}" target="_blank">View Profile</a>
        </div>
      </div>`);
};
// Function to fetch and display user data
function fetchUserData(url) {
    myCostumFecher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
        }
    });
}
// Default function call to load all users
fetchUserData("https://api.github.com/users");
// Add event listener for search functionality
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getUsername.value.toLowerCase();
    try {
        const url = `https://api.github.com/users`;
        const allUserData = await myCostumFecher(url, {});
        const matchingUsers = allUserData.filter((user) => user.login.toLowerCase().includes(searchTerm));
        main_container.innerHTML = ""; // Clear previous results
        if (matchingUsers.length === 0) {
            main_container.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching users found.</p>`);
        }
        else {
            for (const singleUser of matchingUsers) {
                showResultUI(singleUser);
            }
        }
    }
    catch (error) {
        console.error("Error fetching user data:", error);
    }
});