document.writeln(" <nav class=\"col-sm-3\"> "); 
document.writeln(" 					<ul class=\"nav nav-pills nav-stacked affix-top\" data-spy=\"affix\" data-offset-top=\"205\"> "); 
document.writeln(" 						<li class=\"dropdown active\"> "); 
document.writeln(" 							<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">Products <span class=\"caret\"></span></a> "); 
if ($(window).width() < 430) {
    document.writeln("<li><a href=\"#\">Cart</a></li> ");
    document.writeln("<li><a href=\"cart.html\">Search</a></li> ");
}
document.writeln(" 							<ul class=\"dropdown-menu\"> ");
document.writeln(" 								<li><a href=\"laptop.html\">Laptops</a></li> "); 
document.writeln(" 								<li><a href=\"printer.html\">Printers</a></li> "); 
document.writeln(" 								<li><a href=\"desktop.html\">Desktops </a></li> "); 
document.writeln(" 							</ul> "); 
document.writeln(" 						</li> "); 
document.writeln(" 						<li><a href=\"contact.html\">Contact</a></li> "); 
document.writeln(" 						<li><a href=\"customer.html\">New Customer</a></li> "); 
document.writeln(" 					</ul> "); 
document.writeln(" 				</nav> ");