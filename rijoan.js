 // Created by Md Rijoan Maruf
 function agecal()
 {
   var da, mo, ye;
   var dateObj = new Date();
   var date = dateObj.getUTCDate();
   var month = dateObj.getUTCMonth() + 1;
   var year = dateObj.getUTCFullYear();
   var d = document.getElementById("dates").value;
   if (d > 31 || d < 1)
   {
     var node = document.getElementById("invalid");
     node.innerHTML = "You Have Enter Invalid Day";
   }
   else
   {
     var node = document.getElementById("invalid");
     node.innerHTML = "";
   }

   var m = document.getElementById("months").value;
   if (m > 12 || m < 1)
   {
     var node = document.getElementById("invalid month");
     node.innerHTML = "You Have Enter Invalid Month";
   }
   else
   {
     var node = document.getElementById("invalid month");
     node.innerHTML = "";
   }
   var y = document.getElementById("years").value;
   if (y.length > 4 || y.length < 4)
   {
     var node = document.getElementById("invalid year");
     node.innerHTML = "You Have Enter Invalid Year";
   }
   else
   {
     var node = document.getElementById("invalid year");
     node.innerHTML = "";
   }

   if (date < d)
   {
     month = month - 1;
     date = date + 30;
     if (month < m)
     {
       year = year - 1;
       month = month + 12;
       da = date - d;
       mo = month - m;
       ye = year - y;
     } else
     {
       da = date - d;
       mo = month - m;
       ye = year - y;
     }
   } else
   {
     if (month < m)
     {
       year = year - 1;
       month = month + 12;
       da = date - d;
       mo = month - m;
       ye = year - y;
     } else
     {
       da = date - d;
       mo = month - m;
       ye = year - y;
     }
   }
   var node = document.getElementById("age");
   node.innerHTML = ye + " years, " + mo + " months and " + da + " days old";
 }