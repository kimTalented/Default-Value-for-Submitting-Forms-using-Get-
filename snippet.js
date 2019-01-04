/*
I have this form I’m working on for a client which transmits data to another site for scheduling and processing. The form needs to use the “get” method where all of the values are assigned as part of the url.

The sending URL looks like this:

http://kimberleygriffith.com?ZIP=12345&PRODUCT=2&QUANTITY=4

ZIP = 12345
PRODUCT = 2
QUANTITY = 4

The issue is that one value (zip code) when left empty, like this:

http://kimberleygriffith.com?ZIP=&PRODUCT=2&QUANTITY=4

The zip code parameter takes the values next to it.
ZIP = &PRODUCT=2

There is a solution!

It needs just a bit of jquery. Override the form submit event and check for a null value. If null, set to a default value like five zero’s. Then submit the form normally.
*/

jQuery("#myForm").submit(function(e){
	e.preventDefault();
	if(jQuery("#zip").val() == '') {
		jQuery("#zip").val('00000');
	}
	this.submit();
});
