var form=document.getElementById('addform');
var itemList=document.getElementById('electronics');
var itemList1=document.getElementById('food');
var itemList2=document.getElementById('skincare');
var itemList3=document.getElementById('total');
form.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
itemList1.addEventListener('click',removeItem1)
itemList2.addEventListener('click',removeItem2)
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newItem1=document.getElementById('item1').value;
    var newItem2=document.getElementById('item2').value;
    let form={};
    form.sellingprice=newItem;
    form.productname=newItem1;
    form.category=newItem2;
    console.log(newItem,newItem1,newItem2)
    axios.post('https://crudcrud.com/api/95e55d25dcfe4aefa85e24c8d31421b0/addPostrequest/',form)
    .then((res)=>{
    console.log(res)
    var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  li.id=res.data._id;
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "));
 // li.appendChild(document.createTextNode(' '));
  li.appendChild(document.createTextNode(newItem1));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(newItem2));
  var spanBtn=document.createElement('span');
  spanBtn.className = 'pull-right';
  li.appendChild(spanBtn);
  //var editBtn = document.createElement('button');
  //editBtn.className = 'btn btn-warning btn-sm float-right delete';
  //editBtn.appendChild(document.createTextNode('Edit Expense'));
  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete item'));
  // Append button to li
  spanBtn.appendChild(deleteBtn);
  //spanBtn.appendChild(editBtn);
    if(newItem2=="Skincare")
    itemList2.appendChild(li);
    if(newItem2=="Food")
    itemList1.appendChild(li);
    if(newItem2=="Electronics")
    itemList.appendChild(li);
    showTotal()
    })
    .catch((err)=>{
      console.log(err)
    }) 
}
window.addEventListener("DOMContentLoaded",()=>{
  axios.get('https://crudcrud.com/api/95e55d25dcfe4aefa85e24c8d31421b0/addPostrequest/')
  .then((response)=>{
    for(var i=0;i<response.data.length;i++){
      console.log(response.data[i]._id)
      var li = document.createElement('li');
      // Add class
      li.className = 'list-group-item';
      li.id=response.data[i]._id;
      // Add text node with input value
      li.appendChild(document.createTextNode(response.data[i].sellingprice));
      li.appendChild(document.createTextNode(" "));
     // li.appendChild(document.createTextNode(' '));
      li.appendChild(document.createTextNode(response.data[i].productname));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode(response.data[i].category));
      var spanBtn=document.createElement('span');
      spanBtn.className = 'pull-right';
      li.appendChild(spanBtn);
      //var editBtn = document.createElement('button');
      //editBtn.className = 'btn btn-warning btn-sm float-right delete';
      //editBtn.appendChild(document.createTextNode('Edit Expense'));
      // Create del button element
      var deleteBtn = document.createElement('button');
      // Add classes to del button
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      // Append text node
      deleteBtn.appendChild(document.createTextNode('Delete Item'));
      // Append button to li
      spanBtn.appendChild(deleteBtn);
      //spanBtn.appendChild(editBtn);
        if(response.data[i].category=="Skincare")
        itemList2.appendChild(li);
        if(response.data[i].category=="Food")
        itemList1.appendChild(li);
        if(response.data[i].category=="Electronics")
        itemList.appendChild(li);
    }
  })
  .catch((err)=>{
    console.log(err)
  })
})
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement.parentElement;
      var idz=li.id;
      console.log(li)
      itemList.removeChild(li);
      axios.delete('https://crudcrud.com/api/95e55d25dcfe4aefa85e24c8d31421b0/addPostrequest/'+idz)
      .then((res)=>{
          console.log(res)
          showTotal()
        })
      .catch((err)=>{
           console.log(err)
      })
      
    }
  }
}
function removeItem1(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement.parentElement;
      var idz=li.id;
      console.log(li)
      itemList1.removeChild(li);
      axios.delete('https://crudcrud.com/api/95e55d25dcfe4aefa85e24c8d31421b0/addPostrequest/'+idz)
      .then((res)=>{
          console.log(res)
          showTotal()
        })
      .catch((err)=>{
           console.log(err)
      })
      
    }
  }
}
function removeItem2(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement.parentElement;
      var idz=li.id;
      console.log(li)
      itemList2.removeChild(li);
      axios.delete('https://crudcrud.com/api/95e55d25dcfe4aefa85e24c8d31421b0/addPostrequest/'+idz)
      .then((res)=>{
          console.log(res)
          showTotal()
        })
      .catch((err)=>{
           console.log(err)
      })
      
    }
  }
}
function showTotal(){
  var sum=0;
  axios.get('https://crudcrud.com/api/95e55d25dcfe4aefa85e24c8d31421b0/addPostrequest/')
  .then((response)=>{
    for(var i=0;i<response.data.length;i++){
       sum+=parseInt(response.data[i].sellingprice)
    }
   
    var h2 = document.createElement('h2');
      h2.id=1;
      // Add text node with input value
      h2.appendChild(document.createTextNode(sum));
      h2.appendChild(document.createTextNode(" "));
      itemList3.appendChild(h2)
    console.log(sum)
  })
  .catch((err)=>{
    console.log(err)
  })
}
showTotal()