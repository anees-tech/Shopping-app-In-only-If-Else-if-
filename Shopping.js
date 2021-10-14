let name, item, netPrice, quantity, GrosePrice;
        var yourCLass;
        let student, discount, discountPrice;
        name = prompt("Enter your name please.");
        
        item =prompt("Enter Item Please.");
        
            
        
         if ( (item=="T.V") || (item=="t.v" || (item=="tv")) ) {
                quantity= parseInt(prompt("Enter Quantity."));
                GrosePrice = 13000 * quantity;
            
                student =prompt("Are you Student. YES or NOT");

                if ( (student == "yes") || (student=="Yes") || (student=="YES") ){ 
                     yourCLass = prompt("Ok! Please Tell us, In which class do you read?");
                      
                        if( (yourCLass=="primary" || (yourCLass=="middle") ) ){
                            discount = GrosePrice*10/100;
                            netPrice= GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 10%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.13000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                        }
                        else if( (yourCLass =="secondry") || (yourCLass=="higher")){
                            discount = GrosePrice*15/100;
                            netPrice = GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 15%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.13000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                        }
                        else if( (yourCLass == "graduated") || (yourCLass=="BS") ){
                            discount = GrosePrice*20/100/100;
                            netPrice = GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 20%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.13000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                       }
                       else{
                            if((yourCLass=="Phd") || (yourCLass=="M.Phil")){
                                discount = GrosePrice*25/100;
                                netPrice = GrosePrice-discount;
                                discountPrice = document.write( "<b>"+ " you have 20%  discount. Which is "+ discount + "</b>");
                                document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.13000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                            }
             
                        }
                    }
                else{
                    alert(" ok ");
                }
            
               if( !(student == "yes")){
                document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is  RS.13000 " +" <br> " + " Your Total Price is " + "RS. "+ GrosePrice );
               } 
            }
            // this is main item.
        else if ( (item=="LCD") || (item=="lcd") || (item=="LED") ) {
                quantity= parseInt(prompt("Enter Quantity."));
                GrosePrice = 14000 * quantity;
                
              
             student =prompt("Are you Student. YES or NOT");

                if ( (student == "yes") || (student=="Yes") || (student=="YES") ){ 
                     yourCLass = prompt("Ok! Please Tell us, In which class do you read?");
                      
                        if( (yourCLass=="primary" || (yourCLass=="middle") ) ){
                            discount = GrosePrice*10/100;
                            netPrice= GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 10%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is  RS.14000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                        }
                        else if( (yourCLass =="secondry") || (yourCLass=="higher")){
                            discount = GrosePrice*15/100;
                            netPrice = GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 15%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.14000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                        }
                        else if( (yourCLass == "graduated") || (yourCLass=="BS") ){
                            discount = GrosePrice*20/100;
                            netPrice = GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 20%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.14000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                       }
                       else{
                            if((yourCLass=="Phd") || (yourCLass=="M.Phil")){
                                discount = GrosePrice*25/100;
                                netPrice = GrosePrice-discount;
                                discountPrice = document.write( "<b>" + " you have 20%  discount. Which is "+ discount +" </b><br> ");
                                document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.14000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                            }
             
                        }
                    }
                    else{
                    alert(" ok ");
                }
            
               if( !(student == "yes") ){
                document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.14000 "+" <br> " + "Your Total Price is " + "RS. "+ GrosePrice );
               }
            }
        else if ( (item=="Washing Machine") || (item=="washing machine") || (item=="washing") ) {
                quantity= parseInt(prompt("Enter Quantity."));
                GrosePrice = 20000 * quantity;

                
              
             student =prompt("Are you Student. YES or NOT");

                if ( (student == "yes") || (student=="Yes") || (student=="YES") ){ 
                     yourCLass = prompt("Ok! Please Tell us, In which class do you read?");
                      
                        if( (yourCLass=="primary" || (yourCLass=="middle") ) ){
                            discount = GrosePrice*10/100;
                            netPrice= GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 10%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>" + " 1 Item price is RS.20000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                        }
                        else if( (yourCLass =="secondry") || (yourCLass=="higher")){
                            discount = GrosePrice*15/100;
                            netPrice = GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 15%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.20000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                        }
                        else if( (yourCLass == "graduated") || (yourCLass=="BS") ){
                            discount = GrosePrice*20/100;
                            netPrice = GrosePrice-parseInt(discount);
                            discountPrice = document.write( "<b>" + " you have 20%  discount. Which is "+ discount +" </b><br> ");
                            document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is  RS.20000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                       }
                       else{
                            if((yourCLass=="Phd") || (yourCLass=="M.Phil")){
                                discount = GrosePrice*25/100;
                                netPrice = GrosePrice-pasreInt(discount);
                                discountPrice = document.write( "<b>" + " you have 20%  discount. Which is "+ discount +" </b><br> ");
                                document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.20000 " + "<br>" + "Your Grossly Price is " + "RS. "+ GrosePrice + "<br> "+ "And " + "Your Total price is : " +"RS."+ netPrice );
                            }
             
                        }
                    }
                    else{
                    alert(" ok ");
                }
            
               if(  !(student == "yes") ){
                document.write("Hello " + "<b> " +name +"</b>" +" Thanks for shopping. <br>" + "Item : " + item + "<br>"+ " Quantity " + quantity +"<br>"+" 1 Item price is RS.20000 "+" <br> " + "Your Total Price is " + "RS. "+ GrosePrice );
               }
            }
                        
                        

        else {
            document.write(" Hello "+ name +" Sorry this item is not availible in this store.");
        }
        
