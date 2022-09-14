let num = prompt("Nhập số");
i=1;
total="";
for (i=1;i<=num;i++){
    total+="Số hiển thị là:" + i + "<br>";
}
document.getElementById("result").innerHTML=total;