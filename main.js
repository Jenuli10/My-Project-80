var GuestName = document.getElementById("name1").value;
names_of_people.push(GuestName);

    
function submit()
{
    var display_guest_array = [];

    for (var j = 1; j <= 1; j++) 
    {
        var name_of_the_guest = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    }

    console.log(name_of_the_guest_array);

    var lenght_of_name_of_guest_array = name_of_the_guest_array.length;
    console.log(lenght_of_name_of_guest_array);

    for (var k = 0; k < lenght_of_name_of_guest_array; k++) 
    {
        display_guest_array.push("<h4>NAME - "+ name_of_the_guest_array[k] + "</h4>");
        console.log(display_guest_array);
    }

    console.log(display_guest_array);
    document.getElementById("display_name_with_commas").innerHTML = display_guest_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);

    var display_guest_array_sorting = [];

    var lenght_of_name_of_guest_array = name_of_the_guest_array.length;
    console.log(lenght_of_name_of_guest_array);

    for (var k = 0; k < lenght_of_name_of_guest_array; k++) 
    {
        display_guest_array_sorting.push("<h4>NAME - " + name_of_the_guest_array[k] + "</h4>");
        console.log(display_guest_array_sorting);
    }

    var remove_commas = display_guest_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
names_of_people.sort();

//Additional activity
function searching()
{
   var s=document.getElementById("s1").value;
  var found=0;
  var j;
  for(j=0; j<names_of_people.length; j++) {
    if(s==names_of_people[j]){
      found=found+1;
      
    }
  }
  document.getElementById("p2").innerHTML ="name found" "+found+" "time/s";
  console.log("found name" +found+"time/s");
}
