const products = [
  {
    name: "Iphone 12 pro max",
    imageUrl:
      "data:image/jpeg;base64,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",
    description:
      "This is Iphone pro max 12",
    price: 1200,
    countInStock: 20,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://specifications-pro.com/wp-content/uploads/2020/04/iPhone-12-2.jpg",
    description:
      "This is regular iphone 12",
    price: 1099,
    countInStock: 15,
  },
  {
    name: "Iphone XS",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-gold_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1579299532160",
    description:
      "This is iphone xs",
    price: 1000,
    countInStock: 7,
  },
  {
    name: "Iphone 8",
    imageUrl:
      "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/SwappieiPhone864GBkulta-1-1-600x600.jpg",
    description:
      "This is iphone 8",
    price: 700,
    countInStock: 5,
  },
  {
    name: "JBL Speaker Go3",
    imageUrl:
      "https://www.bhphotovideo.com/images/images2500x2500/jbl_jblgo3blkam_go_3_portable_bluetooth_1583006.jpg",
    description:
      "This is portable JBL speaker Go3",
    price: 200,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "This is JBL FLIP 4 speaker",
    price: 140,
    countInStock: 60,
  },
  {
    name: "JBL Storeo",
    imageUrl:
      "https://www.jbl.com/on/demandware.static/-/Sites-JB-US-Library/default/dw92f09ff4/heros/JBL_PRX_Passive_Promo_June2021_1398x1398.jpg",
    description:
      "This is JBL Soreo Speaker",
    price: 700,
    countInStock: 10,
  },
  {
    name: "JBL Portable mini boot ",
    imageUrl:
      "https://static.wixstatic.com/media/87cf57_469e7d237de7443a9cbf702ffce8c974~mv2.jpg/v1/fill/w_656,h_774,al_c,q_85/87cf57_469e7d237de7443a9cbf702ffce8c974~mv2.jpg",
    description:
      "This is JBL portable speaker pink",
    price: 150,
    countInStock: 30,
  },
];

module.exports = products;
