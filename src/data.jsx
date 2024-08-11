const dates = [
  { name: "Feb", uv: 730, pv: 1000, amt: 1000 },
  { name: "Mar", uv: 500, pv: 1000, amt: 1000 },
  { name: "Apr", uv: 770, pv: 1000, amt: 1000 },
  { name: "May", uv: 720, pv: 1000, amt: 1000 },
  { name: "Jun", uv: 500, pv: 1000, amt: 1000 },
  { name: "Jul", uv: 270, pv: 1000, amt: 1000 },
  { name: "Agu", uv: 720, pv: 1000, amt: 1000 },
  { name: "Sep", uv: 500, pv: 1000, amt: 1000 },
  { name: "Oct", uv: 720, pv: 1000, amt: 1000 },
  { name: "Nov", uv: 230, pv: 1000, amt: 1000 },
  { name: "Dec", uv: 720, pv: 1000, amt: 1000 },
  { name: "Aug", uv: 500, pv: 1000, amt: 1000 },
];

const newMembers = [
  {
    name: "Mahnaz Afshar",
    pic: "img/prof-1.jfif",
    isShow: "IsShow",
    job: "Actor",
  },
  {
    name: "Mohsen Namjo",
    pic: "img/prof-2.png",
    isShow: "IsShow",
    job: "athlete",
  },
  {
    name: "Bijan Yavari",
    pic: "img/prof-3.png",
    isShow: "IsShow",
    job: "Singer",
  },
  {
    name: "Ali Dartoomi",
    pic: "img/prof-4.jfif",
    isShow: "IsShow",
    job: "electrician",
  },
  {
    name: "Zahra Mohammadi",
    pic: "img/prof-6.webp",
    isShow: "IsShow",
    job: "housekeeper",
  },
];

const latestTransaction = [
  {
    name: "Mahnaz Afshar",
    pic: "img/prof-1.jfif",
    status: "approved",
    date: "22 Jun 2023",
    amount: "512",
  },
  {
    name: "Mohsen Namjo",
    pic: "img/prof-2.png",
    status: "approved",
    date: "22 Jun 2023",
    amount: "321",
  },
  {
    name: "Bijan Yavari",
    pic: "img/prof-3.png",
    status: "approved",
    date: "22 Jun 2023",
    amount: "698",
  },
  {
    name: "Ali Dartoomi",
    pic: "img/prof-4.jfif",
    status: "approved",
    date: "22 Jun 2023",
    amount: "1254",
  },
  {
    name: "Zahra Mohammadi",
    pic: "img/prof-6.webp",
    status: "approved",
    date: "22 Jun 2023",
    amount: "258",
  },
];

const users = [
  {
    id: 1,
    firstName: "Shahed",
    email: "shahedforooghi@gmail.com",
    status: "Active",
    transaction: "$215",
    img: "img/resumepic.jpg",
  },
  {
    id: 2,
    firstName: "Ali",
    email: "Ali@gmil.com",
    status: "Non-Active",
    transaction: "$654",
    img: "img/prof-2.png",
  },
  {
    id: 3,
    firstName: "Amir",
    email: "amir@gmail.com",
    status: "Active",
    transaction: "$235",
    img: "img/prof-3.png",
  },
  {
    id: 4,
    firstName: "Mohammad",
    email: "mohammad@gmail.com",
    status: "Active",
    transaction: "$957",
    img: "img/prof-4.jfif",
  },
  {
    id: 5,
    firstName: "Sanaz",
    email: "sanaz@gmail.com",
    status: "Active",
    transaction: "$1023",
    img: "img/prof-6.webp",
  },
  {
    id: 6,
    firstName: "Zahra",
    email: "zahra@gmail.com",
    status: "Non-Active",
    transaction: "$658",
    img: "img/prof-1.jfif",
  },
  {
    id: 7,
    firstName: "Mahnaz",
    email: "mahnaz@gmail.com",
    status: "Active",
    transaction: "$746",
    img: "img/prof-6.webp",
  },
  {
    id: 8,
    firstName: "Bijan",
    email: "bijan@gmail.com",
    status: "Active",
    transaction: "$982",
    img: "img/prof-5.png",
  },
  {
    id: 9,
    firstName: "Homayoun",
    email: "homayoun@gmail.com",
    status: "Active",
    transaction: "$326",
    img: "img/prof-4.jfif",
  },
];

const products = [
  {
    id: 1,
    name: "Asus",
    price: "800$",
    img: "img/asus.jfif",
    active : 'Yes',
    inStock : 'No'
  },
  {
    id: 2,
    name: "Acer",
    price: "950$",
    img: "img/acer.jfif",
    active : 'Yes',
    inStock : 'No'
  },
  {
    id: 3,
    name: "Samsung",
    price: "700$",
    img: "img/samsung.jfif",
    active : 'No',
    inStock : 'Yes'
  },
  {
    id: 4,
    name: "Apple",
    price: "1300$",
    img: "img/apple.jfif",
    active : 'Yes',
    inStock : 'No'

  },
  {
    id: 5,
    name: "HP",
    price: "600$",
    img: "img/hp.webp",
    active : 'No',
    inStock : 'No'
  },
];

const productDates = [
  { name: "Aug", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 2400, amt: 2400 },
  { name: "Mar", uv: 400, pv: 2400, amt: 2400 },
];
export { dates, newMembers, latestTransaction, users, products, productDates };
