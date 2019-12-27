var names = [
    {
      "id": "1",
      "Name": "Akash Mitra",
      "designation": "Defender",
      "imagelocation":"../assets/img/AG.PNG",
      "Adhar No": "Adhar No-XXX-XXXX-XXXXX",
       "Admit Card":"Admit Card No-852143",
      "contact": "M- 9876543210"
    },
    {
      "id": "2",
      "Name": "Moulika Mukherjee",
      "designation": "Midfielder",
      "imagelocation":"../assets/img/AG.PNG",
      "Adhar No": "Adhar No-XXX-XXXX-XXXXX",
      "Admit Card":"Admit Card No-852143",
     "contact": "M- 9876543210"
    },
    {
      "id": "3",
      "Name": "Abhishek Ghosh",
      "designation": "GoalKeeper",
      "imagelocation":"../assets/img/AG.PNG",
      "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
      "AdmitCard":"Admit Card No-852143",
     "contact": "M- 9876543210"
    },
    {
       "id": "4",
      "Name": "Ashish sarkar",
      "designation": "Striker",
      "imagelocation":"../assets/img/AG.PNG",
      "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
      "AdmitCard":"Admit Card No-852143",
     "contact": "M- 9876543210"
    
    },
    {
        "id": "5",
       "Name": "Somnath Pal",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "6",
       "Name": "Lionel messi",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "7",
       "Name": "Cristiano Rolando",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "8",
       "Name": "Neymar",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "9",
       "Name": "Suarez",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "10",
       "Name": "Salah",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "11",
       "Name": "Rashford",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "Adhar No": "Adhar No-XXX-XXXX-XXXXX",
       "Admit Card":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "12",
       "Name": "Wilson",
       "designation": "Midfielder",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "13",
       "Name": "Aguero",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     },
     {
        "id": "14",
       "Name": "Harry Kane",
       "designation": "Striker",
       "imagelocation":"../assets/img/AG.PNG",
       "AdharNo": "Adhar No-XXX-XXXX-XXXXX",
       "AdmitCard":"Admit Card No-852143",
      "contact": "M- 9876543210"
     
     }

  ]
  
  $(document).ready(function () {
  
    $.each(names, function (key, value) {
      //alert(value.id+""+value.Name);
      $('#namelist').append("<li onclick='showCard(this.id)' id=" + value.id + ">" + "<a href=#>" + value.Name + "</li></a>");
    });
  });
  
  function showCard(selectedData) {
    $('#namelist').one("click", function () {
      $(".containerTab").css({
        display: "inline"
      });
    });
    $.each(names, function (key, value) {
  
      if (selectedData === (value.id)) {
        $('#showName').text(value.Name);
        $('#showdesig').text(value.designation);
        //  $('#showimg').image(value.imagelocation);
        $('#showadhar').text(value.AdharNo);
        $('#showadmit').text(value.AdmitCard);
        $('#showcon').text(value.contact);
      }
    });
  };
  