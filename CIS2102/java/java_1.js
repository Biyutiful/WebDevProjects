    
    var rIndex,
    table = document.getElementById("table");
        
        // adds a row
        function addRow()
        {
            // get the table by id
            // create a new row and cells
            // get value from input text
            // set the values into row cell's
            var newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),
                fname = document.getElementById("firstname").value,
                lname = document.getElementById("lastname").value,
                email = document.getElementById("email").value,
                number = document.getElementById("number").value;

                    
            cell1.innerHTML = fname;
            cell2.innerHTML = lname;
            cell3.innerHTML = email;
            cell4.innerHTML = number; 
            
            document.getElementById("firstname").value = '';
            document.getElementById("lastname").value = '';
            document.getElementById("email").value = '';
            document.getElementById("number").value = '';
            // call the function to set the event to the new row
            selectedRow();
        }
        
        // display selected row data into input text
        function selectedRow()
        {
            
            for(var i = 0; i < table.rows.length; i++)
            {
                table.rows[i+1].onclick = function()
                {
                  // get the selected row index
                  rIndex = this.rowIndex;
                  document.getElementById("firstname").value = this.cells[0].innerHTML;
                  document.getElementById("lastname").value = this.cells[1].innerHTML;
                  document.getElementById("email").value = this.cells[2].innerHTML;
                  document.getElementById("number").value = this.cells[3].innerHTML;
                };
            }
        }
        selectedRow();
        
        function editRow()
        {
                table.rows[rIndex].cells[0].innerHTML = document.getElementById("firstname").value;
                table.rows[rIndex].cells[1].innerHTML = document.getElementById("lastname").value;
                table.rows[rIndex].cells[2].innerHTML = document.getElementById("email").value;
                table.rows[rIndex].cells[3].innerHTML = document.getElementById("number").value;
        }
        
        function removeRow()
        {
            table.deleteRow(rIndex);
            // clear input text
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
        }

