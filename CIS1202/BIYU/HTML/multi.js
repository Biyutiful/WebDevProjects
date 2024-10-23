function multitable(){
    let x = document.getElementById('multablecol').value
    let y = document.getElementById('multablerow').value
    
    document.write("<table border='1px' align = center>" );
                
    document.write("<tr style='font-size:30px;color:#fff;background-color:#000;'>");
    //print header
    for(i = 1; i <= x; i++)
    {
        document.write("<th> [ " + i + " ]</th>");
    }
    
     document.write("</tr>"); 
    // print rows
    for(k = 1; k<=y; k++)
    {
        var colorCode = "";
        if(k%2 === 0)
        {
            colorCode = "#eee";
        }else{
            colorCode = "#99e265";
        }
        
        document.write("<tr style='background-color:"+ colorCode +"'>");
        // print numbers
        for(j= 1; j<= x; j++)
        {
         document.write("<td style='font-size:23px;'>"+j+" X "+ k + " = " + j*k + "</td>")   
        }
        
         document.write("</tr>"); 
         var url ='BIYU_calc.html'
    }
    
    document.write("</table>");
    }