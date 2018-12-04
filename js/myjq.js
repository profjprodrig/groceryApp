$(function()
{
	// make all items have the class "toBuy"
	$('li').addClass('toBuy');
	
	//add item to the list
	$('#addButton').on('click', function(e)
	{
		e.preventDefault();
		var $newItem = $('#addItem').val();
		if ($.trim($newItem) != '')
		{
			$('ul').append('<li class="toBuy">' + $newItem + '</li>');
		}
	}); // End of adding the item
	
	// Change the class of the items, when they are clicked
	/*
	$('#groceryList li').on('click', function(e)
	{
		var $item = $(this)
		if ($item.is('.toBuy'))
		{
			$item.removeClass('toBuy');
			$item.addClass('purchased');
		}
		else
		{
			$item.removeClass('purchased');
			$item.addClass('toBuy');
		}
	}); // Ends the changing of class
	*/
	$(document).on('click', '#groceryList li', function(e)
	{
		var $item = $(this)
		if ($item.is('.toBuy'))
		{
			$item.animate(
			{
				opacity: .4,
				paddingLeft: '+=80'
			}, 1000, function()
			{
				$item.removeClass('toBuy');
				$item.addClass('purchased');
				
			});			
		}
		else
		{
			$item.animate(
			{
				opacity: 1,
				paddingLeft: '-=80'
			}, 1000, function()
			{
				$item.removeClass('purchased');
				$item.addClass('toBuy');
			});
		}
	});
	
}); // End of document