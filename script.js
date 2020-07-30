fetch('https://coronavirus-19-api.herokuapp.com/countries')
.then(res=>res.json())	
.then(covid=>{
let size=covid.length;
var i=1;
if(size>0){
	var data="";	
	covid.forEach((covid)=>{
		data +=`<tr class="tra" style="width:100%;overflow:hidden; text-align: center;">`;
		data +=`<td>${i++}</td>`;
		data +=`<td style="background:#00cec9;color:black;font-weight:900;">${covid.country}</td>`;
		data +=`<td>${covid.active}</td>`;
		data +=`<td>${covid.critical}</td>`;
		data +=`<td>${covid.recovered}</td>`;
		data +=`<td style="background: red">${covid.deaths}</td>`;
		data +=`<td style="background: maroon">${covid.todayDeaths}</td>`;
		data +=`<td>${covid.todayCases}</td>`;
		data +=`<td>${covid.totalTests}</td></tr>`;	
		
	})	
	document.getElementById('data').innerHTML=data;	
}
})





var searchInput=document.getElementById('input');

searchInput.addEventListener("keyup",function(e){
	
	
var searchItem=e.target.value.toLowerCase();
var trItem=document.querySelectorAll(".tra");


	trItem.forEach(function(item){
		
		if(item.textContent.toLowerCase().indexOf(searchItem) != -1){
			
			item.closest("tr").style.display="";
			
		}
		
		else {
			item.closest("tr").style.display="none";
			
			
		}
		
		
		
		
	})
	
	
	
});


setTimeout(function(){

location.reload();

},30000);


 

 
 
 





