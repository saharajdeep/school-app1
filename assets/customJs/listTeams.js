var names = [
    {
      "id": "1",
      "Name": "LM of 1997",
      "designation": "GoalKeeper-..........",
      "imagelocation":"Defender-.............",
      "AdharNo": "Midfielder-..............",
       "AdmitCard":"Forward-......."
    },
    {
      "id": "2",
      "Name": "VD of 2002",
      "designation": "GoalKeeper-..........",
      "imagelocation":"Defender-.............",
      "AdharNo": "Midfielder-..............",
       "AdmitCard":"Forward-......."
    },
    {
      "id": "3",
      "Name": "GC of 2013",
      "designation": "GoalKeeper-..........",
      "imagelocation":"Defender-.............",
      "AdharNo": "Midfielder-..............",
       "AdmitCard":"Forward-......."
    },
    {
       "id": "4",
      "Name": "FC of 2015",
      "designation": "GoalKeeper-..........",
      "imagelocation":"Defender-.............",
      "AdharNo": "Midfielder-..............",
       "AdmitCard":"Forward-......."
    },
    {
        "id": "5",
       "Name": "XC of 2018",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
      },
     {
        "id": "6",
       "Name": "HC of 2017",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     },
     {
        "id": "7",
       "Name": "CC of 2008",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."   
     },
     {
        "id": "8",
       "Name": "ABC of 2011",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     
     },
     {
        "id": "9",
       "Name": "ABC of 2012",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     
     },
     {
        "id": "10",
       "Name": "DC of 2006",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     
     },
     {
        "id": "11",
       "Name": "AC of 2004",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     
     },
     {
        "id": "12",
       "Name": "ABC of 2003",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     
     },
     {
        "id": "13",
       "Name": "ABC of 2009", 
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     
     },
     {
        "id": "14",
       "Name": "ABC of 1999",
       "designation": "GoalKeeper-..........",
       "imagelocation":"Defender-.............",
       "AdharNo": "Midfielder-..............",
        "AdmitCard":"Forward-......."
     
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
  