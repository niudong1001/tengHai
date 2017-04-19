var loc=[
"普陀区",
"静安区",
"杨浦区",
"黄浦区",
"南汇区",
"嘉定区",
"徐汇区",
"奉贤区",
"闸北区",
"卢湾区",
"长宁区",
"闵行区",
"青浦区",
"金山区",
"宝山区",
"虹口区",
"浦东新区",
"崇明岛"];
function regionSelect(idName){
	var s1=document.getElementById(idName);
	var fragment=document.createDocumentFragment();
	for(var i=0;i<loc.length;i++){
		var option=document.createElement("option");
		option.value=i;
		option.textContent=loc[i];
		fragment.appendChild(option);
	}
	s1.appendChild(fragment);
}
regionSelect("region");