const links = {
  github: 'Hand-of-Doom',
  youtube: 'channel/UCUL7cqL8QQp487Wef59Q2qQ',
  facebook: 'joo.tega',
  instagram: 'jonastega',
  twitter: 'jonas_tega'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
