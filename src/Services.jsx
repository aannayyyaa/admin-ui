export const users = [
    {
    name: "Kanaya",
    email: "kanaya@gmail.com",
    street: "Jl. Merdeka",
    city: "Bandung",
    age: 20,
    },
    {
    name: "Kinta",
    email: "kinta@gmail.com",
    street: "Jl. Malioboro",
    city: "Jogja",
    },
    {
    name: "Safitri",
    email: "safitri@gmail.com",
    street: "Jl. Sudirman",
    city: "Jakarta",
    },      
];
const city = "Bandung";
const street = "Jl. Merdeka";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};