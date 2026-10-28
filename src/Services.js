export function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw new Error("Gagal mengambil data");
      return res.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
      return [];
    });
}