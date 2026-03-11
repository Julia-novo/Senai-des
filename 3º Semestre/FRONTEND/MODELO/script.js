const productsEl=document.getElementById("products"),
carrinho=document.getElementById("carrinho"),
modal=document.getElementById("modal"),
cartItems=document.getElementById("cartItems"),
totalEl=document.getElementById("total"),
countEl=document.getElementById("count"),
orderBtn=document.getElementById("order");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

fetch("produtos.json")
.then(r=>r.json())
.then(data=>{
  data.forEach(p=>{
    productsEl.innerHTML+=`
    <div class="card">
      <img src="${p.img}">
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco.toFixed(2)}</p>
      <button onclick='add(${JSON.stringify(p)})'>Add ao carrinho</button>
    </div>`
  })
})

function add(p){
  const item=cart.find(i=>i.id===p.id);
  item?item.qtd++:cart.push({...p,qtd:1});
  save();
}

function save(){
  localStorage.setItem("cart",JSON.stringify(cart));
  countEl.textContent=cart.reduce((a,b)=>a+b.qtd,0);
}

function toggleModal(){modal.classList.toggle("hide");renderCart()}

function renderCart(){
  cartItems.innerHTML="";
  let total=0;
  cart.forEach(p=>{
    total+=p.preco*p.qtd;
    cartItems.innerHTML+=`
    <div class="cart-row">
      ${p.nome} (${p.qtd})
      <div>
        <button onclick="change(${p.id},-1)">-</button>
        <button onclick="change(${p.id},1)">+</button>
      </div>
    </div>`
  })
  totalEl.textContent=total.toFixed(2);
}

function change(id,delta){
  const item=cart.find(i=>i.id===id);
  item.qtd+=delta;
  if(item.qtd<=0)cart=cart.filter(i=>i.id!==id);
  save();renderCart();
}

orderBtn.onclick=()=>{
  cart=[];save();toggleModal();
}

carrinho.onclick=toggleModal;

save();