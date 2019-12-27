var room = 1;
var temp=[];
// add dynamic fields
function add_education_fields() {
    temp.push(this.player);
   var marjor = $('#Major').val();
   var Schoolname = $('#Schoolname').val();
   var Degree = $('#Degree').val();
   var educationDate = $('#educationDate option:selected').val();
    room++;
   
    var parentDiv = document.getElementById('education_fields'); // point to the parent Div
    var childDiv = document.createElement("div"); // create child div on the fly
    childDiv.setAttribute("class", "form-group removeclass"+room); // add a dynamic class to the child div
    childDiv.innerHTML = '' +
    '<div class="row register-form">'+

        '<div class="col-sm-3 nopadding">' +
        '<div class="form-group">' +
        ' <input type="text" class="form-control" id="Schoolname" name="firstName" value="'+Schoolname+'" placeholder="First Name">' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-3 nopadding">' +
        '<div class="form-group"> ' +
        '<input  type="text" class="form-control" id="Major" name="lastName" value="'+marjor+'" placeholder="Last Name">' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-3 nopadding">' +
                '<div class="form-group">'+
    '<label id="Degree" for="validationDefault03">Madhyamik/HS result/Pass certificate</label>'+
' <input type="file" id="Degree" value="'+Degree +'" name="pic" accept="image/*" multiple >'+
'</div>'+ 
        '</div>' +
        '<div class="col-sm-3 nopadding">' +
        '<div class="form-group">' +
        '<div class="input-group"> ' +
        '<div class="input-group-btn">' +
        ' <button class="btn btn-danger" type="button" onclick="remove_education_fields('+ room +');"> ' +
        '<span class="glyphicon glyphicon-minus" aria-hidden="true">-</span> ' +
        '</button>' +
        '</div></div></div>' +
        '</div>' +
        '<div class="clear"></div>'+
        '</div>'+
        '</div>';

    parentDiv.appendChild(childDiv); //  append or inject dynamic fields to the parent div
    temp.push();
    var StoredDiv = $('.removeclass'+room).html();
    manage_append(room,StoredDiv,'add'); //  store the dynamic fields to local storage
    $('#Major').val('');  // then reset all fields
    $('#Schoolname').val('');
    $('#Degree').val('');
  $('#educationDate').val(0);

//   room.value();
if(room>=1 && room<=3){
    $('#submitTeamList').prop("disabled", false);
}
else {
    $('#submitTeamList').prop("disabled", true);
}
}
// remove dynamic fields
function remove_education_fields(rid) {
    manage_append(rid,0,'delete');
    $('.removeclass'+rid).remove();
    room--;
}
 // add and remove dynamic fields from local storage
function manage_append(room,html,action){
    if(action === 'add'){
        localStorage.setItem(room,html);//
    }else{
        localStorage.removeItem(room);
    }

}

// restore dynamic fields from local storage
(function () {
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
     $("#education_fields").append( localStorage.getItem( localStorage.key( i ) ) );
    }
});
 
// For counting the submit button

// $(function () {
//     $("#btnGetCountUsingJquery").click(function () {
//     var totalRowCount = $("#tblEmployee tr").length;
//     var rowCount = $("#tblEmployee td").closest("tr").length;
//     var message = "Total Row Count: " + totalRowCount;
//     message += "\nRow Count: " + rowCount;
//     alert(message);
//     });
//     });


    // EXTRACT AND SUBMIT TABLE DATA.
    function submit() {
        var myTab = document.getElementById('empTable');
        var values = new Array();

        // LOOP THROUGH EACH ROW OF THE TABLE.
        for (row = 1; row < myTab.rows.length - 1; row++) {
            for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

                var element = myTab.rows.item(row).cells[c];
                if (element.childNodes[0].getAttribute('type') == 'text' || element.childNodes[0].getAttribute('type') == 'file') {
                    values.push("'" + element.childNodes[0].value + "'");
                }
            }
        }
        
        // SHOW THE RESULT IN THE CONSOLE WINDOW.
        console.log(values);
    }








    // // ARRAY FOR HEADER.
    // var arrHead = new Array();
    // arrHead = ['', 'First Name', 'Last Name', 'ID'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

    // // FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
    // // ADD THE TABLE TO YOUR WEB PAGE.
    // function createTable() {
    //     var empTable = document.createElement('table');
    //     empTable.setAttribute('id', 'empTable');            // SET THE TABLE ID.

    //     var tr = empTable.insertRow(-1);

    //     for (var h = 0; h < arrHead.length; h++) {
    //         var th = document.createElement('th');          // TABLE HEADER.
    //         th.innerHTML = arrHead[h];
    //         tr.appendChild(th);
    //     }

    //     var div = document.getElementById('cont');
    //     div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
    // }

    // // ADD A NEW ROW TO THE TABLE.s
    // function addRow() {
    //     var empTab = document.getElementById('empTable');

    //     var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    //     var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    //     tr = empTab.insertRow(rowCnt);

    //     for (var c = 0; c < arrHead.length; c++) {
    //         var td = document.createElement('td');          // TABLE DEFINITION.
    //         td = tr.insertCell(c);

    //         if (c == 0) {           // FIRST COLUMN.
    //             // ADD A BUTTON.
    //             var button = document.createElement('input');

    //             // SET INPUT ATTRIBUTE.
    //             button.setAttribute('type', 'button');
    //             button.setAttribute('value', 'Remove');

    //             // ADD THE BUTTON's 'onclick' EVENT.
    //             button.setAttribute('onclick', 'removeRow(this)');

    //             td.appendChild(button);
    //         }
    //        else if(c==3){
    //             var ele = document.createElement('input');
    //             ele.setAttribute('type', 'file');
    //             ele.setAttribute('value', '');
    //             ele.setAttribute('name', 'pic');
    //             td.appendChild(ele);
    //         }
    //         else if(c==1){
    //             // CREATE AND ADD TEXTBOX IN EACH CELL.
    //             var ele = document.createElement('input');
    //             ele.setAttribute('type', 'text');
    //             ele.setAttribute('value', '');
    //             ele.setAttribute('name', ' firstName');
    //             td.appendChild(ele);
    //         }
    //         else{
    //             // CREATE AND ADD TEXTBOX IN EACH CELL.
    //             var ele = document.createElement('input');
    //             ele.setAttribute('type', 'text');
    //             ele.setAttribute('value', '');
    //             ele.setAttribute('name', 'lastName');
    //             td.appendChild(ele);
    //         }
    //     }
    // }

    // var values = new Array();
    // // DELETE TABLE ROW.
    // function removeRow(oButton) {
    //     var empTab = document.getElementById('empTable');
    //     empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
    // }

    // // EXTRACT AND SUBMIT TABLE DATA.
    // function submit() {
    //     var myTab = document.getElementById('empTable');
       

    //     // LOOP THROUGH EACH ROW OF THE TABLE.
    //     for (row = 1; row < myTab.rows.length - 1; row++) {
    //         for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

    //             var element = myTab.rows.item(row).cells[c];
    //             if (element.childNodes[0].getAttribute('type') == 'text' || element.childNodes[0].getAttribute('type') == 'file') {
    //                 values.push("'" + element.childNodes[0].value + "'");
    //             }
    //         }
    //     }
        
    //     // SHOW THE RESULT IN THE CONSOLE WINDOW.
    //     console.log(values);
    // }


    // module.exports=values;