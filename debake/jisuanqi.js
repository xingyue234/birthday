function IsDigit(cCheck)
{
 return ((('0'<=cCheck) && (cCheck<='9'))||cCheck=='.');
 }
function CheckNum(charValue,alertValue,obj)
{
	for(var iIndex=0;iIndex<charValue.length;iIndex++)
	{
		var cCheck=charValue.charAt(iIndex);
		if(!IsDigit(cCheck))
		{
		alert(alertValue);
		obj.focus();
		return false;
		}
	}
}
function wall_paper(form)
{
 //检查输入
 if(checkwallpaperInput(form)==false) return;
 var room_long=0,room_width=0,room_height=0,wallpaperpm=0;
 var wallpapernum=0;
 var rate=1.1;
 //给各个变量赋值
 room_long=form.room_long.value;
 room_width=form.room_width.value;
 room_height=form.room_height.value;
// alert("room_width="+room_width);
 wallpaperpm=form.wallpaperpm.value;
 //开始计算
// 壁纸用量(卷)＝房间周长×房间高度×1.1÷每卷平米数
wallpapernum=Math.round(((parseFloat(room_long)+parseFloat(room_width))*2*room_height*rate)/wallpaperpm );
//alert((parseFloat(room_long)+parseFloat(room_width))*2*room_height);
form.wallpapernum.value=wallpapernum;

}
function  checkwallpaperInput(form)
{
	if(form.room_long.value==""){
		alert("请输入房间长度");
		form.room_long.focus();
		return false;
		}
	if(CheckNum(form.room_long.value,"房间长度只能输入数字格式！",form.room_long)==false)
	return false;

	if(form.room_width.value==""){
		alert("请输入房间宽度");
		form.room_width.focus();
		return false;
		}
	if(CheckNum(form.room_width.value,"房间宽度只能输入数字格式！",form.room_width)==false)
	return false;

	if(form.room_height.value==""){
		alert("请输入房间高度");
		form.room_height.focus();
		return false;
		}
	if(CheckNum(form.room_height.value,"房间高度只能输入数字格式！",form.room_height)==false)
	return false;
	if(form.wallpaperpm.value==""){
		alert("请输入每卷壁纸的平米数");
		form.wallpaperpm.focus();
		return false;
		}
	if(CheckNum(form.wallpaperpm.value,"壁纸的平米数只能输入数字格式！",form.wallpaperpm)==false)
	return false;
}