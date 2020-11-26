//name_of_menu_array = [];
var name_of_menu_array = ["Paneer","Palak", "Rajma"];
	function view()
	{
        
      

		console.log(name_of_menu_array);
		
        document.getElementById("display_name").innerHTML = name_of_menu_array;
        document.getElementById("view_button").style.display = "none";
       document.getElementById("sort_button").style.display = "inline-block";

	}

function sorting()
{
	name_of_menu_array.sort();
    console.log(name_of_menu_array);
	document.getElementById("display_name").innerHTML = name_of_menu_array;
}