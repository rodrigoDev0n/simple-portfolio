
export const getReposData = async () => {

  const repos = []
  const url = 'https://api.github.com/users/rodrigoDev0n/repos'
  const res = await fetch(url)
  const data = await res.json()

  data.map((e) => repos.push(e))

  return {
    repos
  }
}
