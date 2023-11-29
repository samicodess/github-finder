function getProfile() {
    const username = document.getElementById('username').value;


    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        const profileDiv = document.getElementById('profile');
        if(data.message === "Not Found" || !username) {
            profileDiv.innerHTML = `<p>User not Found.</p>`;
        } else {
            const profileData = `
            <img src="${data.avatar_url}" width="200" />
            <h2>${data.name}</h2>
            <p>${data.bio || 'No bio available'}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repos: ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">View Profile</a>
            `;
            profileDiv.innerHTML = profileData;
        }
    })
    .catch (error => console.error('Error:', error));
}