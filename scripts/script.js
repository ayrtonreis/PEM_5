document.addEventListener("deviceready",onDeviceReady,false);
		
		function onDeviceReady(){
		
			StatusBar.backgroundColorByHexString("#ddbe00"); //Set the color of the status bar
			StatusBar.styleBlackTranslucent();
			$.mobile.defaultPageTransition = 'none'; //A try to improve permormance by stopping Jquery Mobile transitions
			
			//alert("Current Page: "+$('.ui-page-active').attr('id'));
			
			var users = [];
			var currentUser;
			var menu = []; //array of 31 different dishes
			
			createUser(8549521,"Ayrton",10.85);
			createUser(8955222,"Andre",87.10);
			createUser(7694619,"Leonardo",1.00);
			createUser(8549643,"Guilherme",20.90);
			createUser(8669348,"Alberto",80.10);
			createUser(8549897, "Icaro", 2.00);
			createUser(9067064, "Isaak", 185.00);
			
			function createUser(uId, uName, uCredits){
				users.push({id: uId, name: uName, credits: uCredits});
			}
			
			function createDish(d1, d2, d3, d4, d5, d6){
				menu.push({pPrincipal: d1, salada: d2, guarnicao: d3, oVegetariana: d4, acompanhamento: d5, sobremesa: d6});
			}
			
			function logInSuccess(){
				createDish("Arroz/Feijão/Arroz Integral", "Alface/Tomate", "Cubos de frango acebolado", "PVT com batata doce", "Acelga ao shoyo", "Doce de leite/Laranja/Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Agrião/Cebola", "Salsicha", "PVT com couve flor", "Purê de batata", "Gelatina de limão/Maçã");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Couve/Pepino", "Kibe de assadeira", "Lasanha de PVT", "Polenta com queijo", "Picolé Banana/ Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Tomate/Reponho", "Bife Grelhado", "PVT gratinado", "Macarrão ao alho e óleo", "Doce de banana/ Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Pepino/Alface", "Salsicha", "PVT com Azeitonas", "Purê de batata", "Doce de coco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Brócolis/Lentinha", "Peixada com leite de coco", "Ovo frito", "Berinjela ao Forno", "Pudim de caramelo/Mamão Minipão/Suco");
				createDish("Arroz/Feijão/Arroz Integral", "Couve/Pepino", "Kibe de assadeira", "PVT com couve flor", "Farofa", "Arroz doce/Laranja/Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Acelga/Tomate", "Bife Grelhado", "Almôndega de PVT", "Macarrão ao alho e óleo", "Gelatina de limão/Maçã");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Tomate/Reponho", "Salsicha", "PVT gratinado", "Purê de batata", "Arroz doce/Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Acelga/Tomate", "Almôndegas ao sugo", "Fricassé de PVT", "Acelga ao shoyo", "Picolé Banana/ Minipão/Suco");
				createDish("Arroz/Feijão/Arroz Integral", "Couve-Flor/Abobrinha", "Linguiça de frango", "Virado de Escarola", "Batata palha", "Pudim de caramelo/Mamão Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Alface/Tomate", "Salsicha", "PVT gratinado", "Purê de batata", "Arroz doce/Minipão/Suco");
				createDish("Arroz/Feijão/Arroz Integral", "Tomate/Reponho", "Bife Grelhado", "Lasanha de PVT", "Cenoura e ervilha sautê", "Picolé/laranja/Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Couve/Pepino", "Kibe de assadeira", "Almôndega de PVT", "Berinjela ao Forno", "Gelatina de limão/Maçã");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Acelga/Tomate", "Peixada com leite de coco", "PVT com couve flor", "Farofa Rica", "Flan de papaya/Melancia Minipão/Suco");
				createDish("Arroz/Feijão/Arroz Integral", "Brócolis/Lentinha", "Almôndegas ao sugo", "Kibe de PVT", "Polenta com queijo", "Goiabada/Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Cebola/Couve-flor", "Linguiça de frango", "Ovo cozido", "Farofa de cenoura", "Picolé Banana/Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Alface/Tomate", "Copa lombo ao molho de mostarda", "PVT gratinado", "Cenoura e ervilha sautê", "Doce de leite/Banana/Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Pepipo/Acelga", "Almôndegas ao sugo", "Kibe de PVT", "Batata palha", "Goiabada/Melancia/Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Espinafre/Ervilha", "Linguiça de frango", "PVT com Azeitonas", "Batata cozida", "Goiabada/Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Couve-Flor/Abobrinha", "Kibe de assadeira", "Lasanha de queijo", "Cenoura cozida", "Flan de papaya/Melancia Minipão/Suco");
				createDish("Arroz/Feijão/Arroz Integral", "Pepipo/Acelga", "Peixada com leite de coco", "PVT com tomate", "Farofa Rica", "Doce de coco/Banana/Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Espinafre/Ervilha", "Copa lombo ao molho de mostarda", "PVT com molho de tomate", "Cenoura e ervilha sautê", "Arroz doce/Laranja/Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Couve/Acelga", "Lasanha de queijo", "lasanha de queijo", "Virado de Escarola", "Doce de banana/Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Lentilha/Tomate", "Bife acebolado", "PVT com batata doce", "Acelga ao shoyo", "Goiabada");
				createDish("Arroz/Feijão/Arroz Integral", "Tomate/Reponho", "Frango grelhado", "Ovo frito", "Batata palha", "Picolé/Melancia/Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Alface/Tomate", "Lasanha de frango", "Fricassé de PVT", "Batata com cebola", "Torrone/Banana Minipão/Suco");
				createDish("Arroz/Feijão Preto/Arroz Integral", "Espinafre/Ervilha", "Coxa de frango", "Ovo cozido", "Farofa de cenoura", "Doce de coco/Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Couve-Flor/Abobrinha", "Frango grelhado", "PVT com Azeitonas", "Batata com cebola", "Pudim de caramelo/Mamão Minipão/Suco");
				createDish("Arroz/Feijão/Arroz Integral", "Brócolis/Lentinha", "Lasanha de queijo", "Fricassé de PVT", "Cenoura e ervilha sautê", "Flan de papaya/Melancia Minipão/Suco");
				createDish("Arroz/Feijão Branco/Arroz Integral", "Pepino/Alface", "Copa lombo ao molho de mostarda", "Almôndega de PVT", "Polenta com queijo", "Torrone/Banana Minipão / Suco");
			} //function logInSuccess
			
			
			$(window).bind('orientationchange', function() {
   				if(window.orientation != 0 && $("#swipeMenu").attr('data-visible') == 'true'){
					$menu.transition({x: '-260px'}, 500,'cubic-bezier(.09,.95,.16,1)').attr('data-visible','false');
				}
			});
			
			function toggleSwipeMenu(){
				var $menu = $("#swipeMenu");
					
				if($menu.attr('data-visible') == 'true' ){
					$menu.transition({x: '-260px'}, 500,'cubic-bezier(.09,.95,.16,1)').attr('data-visible','false');
				}
				else{
					$menu.transition({x: '0px'}, 500, 'cubic-bezier(.09,.95,.16,1)').attr('data-visible','true');
				}
			} //toggleSwipeMenu
			
			var selectedNotes = []; //array which holds the ids of the selected notes
			var counterSelectedImgs = 0; //variable which holds the number of the selected images
			
			$( "body" ).off( "taphold", tapholdHandler ).on( "taphold", tapholdHandler );
 
  			function tapholdHandler( event ){
				event.stopPropagation();
				var $target = $(event.target);
				
				if($target.attr("data-task")){
					navigator.vibrate(10);
					if($target.is("li"))
						toggleSelectNote($target);
					else
						toggleSelectNote($target.closest('li'));	
				}
				else if($target.attr('class') == "thumbNote"){ //an img thumbnail is tapped and held
					navigator.vibrate(10);
					//toggle selected image
					var $targetParent = $target.parent();
					if ($targetParent.attr('data-wrapper-s') == 'true' ){
						$targetParent.attr('data-wrapper-s', 'false');
						counterSelectedImgs--;
						if(counterSelectedImgs == 0){ //the last img was deselected
							changeEditModeMenu();
						}
					}
					else{
						$targetParent.attr('data-wrapper-s', 'true');
						counterSelectedImgs++;
						if(counterSelectedImgs == 1){ //the first img was selected
							changeEditModeMenu();
						}
					}
				}
			} //tapholdHandler
			
			 $( "body" ).off( "click", tapHandler ).on( "click", tapHandler );
 
  			function tapHandler( event ){
				var $target = $(event.target);
				var targetClass = $target.attr('class');
				var targetId = $target.attr('id');
				var currentPage = $('.ui-page-active').attr('id');
				
				if(currentPage == "logIn"){
					if(targetId == "btn_logIn" || $target.parent().attr('id') == "btn_logIn"){
						var login = $("#userLogIn").val();
						var password = $("#password").val();
						
						if(login=="" || login==" " || password=="" || password==" "){
							alert("Preencha o login e a senha");	
						}
						else{
							var isUserValid = false;
							
							for(var i=0; i<users.length; i++){
								var thisUserId = users[i].id;
								if(login == thisUserId){
									isUserValid = true;
									currentUser = users[i];
									logInSuccess();
									break;
								}
							}//for
							
							if(isUserValid){
								updateUser();
								$.mobile.changePage('#notesList', {transition: "fade"} );	
							}
							else{
								alert("Usuário inválido");
								logOut();
							}
							
						}//else
					}
				}
				else if(targetId == "userPic"){
					$.mobile.changePage('#notesList', {transition: "fade"} );
					toggleSwipeMenu();
				}
				else if($target.parent().attr('id') == "classesList"){
					if(targetId == "option_recargas"){
						$.mobile.changePage('#payments', {transition: "fade"} );
					}
					else if(targetId == "option_cardapio"){
						$.mobile.changePage('#menu', {transition: "fade"} );
					}
					else if(targetId == "option_horarios"){
						$.mobile.changePage('#horarios', {transition: "fade"} );
					}
					else if(targetId == "option_ajuda"){
						
					}
					else if(targetId == "option_info"){
						$.mobile.changePage('#info', {transition: "fade"} );
					}
					else if(targetId == "option_sair"){
						
						logOut();
						$.mobile.changePage('#logIn', {transition: "fade"} );
						
					}
					toggleSwipeMenu();
					
					
					
					
					
					
				}
				else if(currentPage == "menu"){
					if($target.parent().attr('class')=="days"){
						$('.active').removeClass("active");
						$target.addClass("active");
						
						number = $target.text();
						
						var dish = menu[number-1];
						var dish2 = menu[31-number-1];
						
						$("#text_principal").html(dish.pPrincipal);
						$("#text_salada").html(dish.salada);
						$("#text_guarnicao").html(dish.guarnicao);
						$("#text_vegetariano").html(dish.oVegetariana);
						$("#text_acompanhamento").html(dish.acompanhamento);
						$("#text_sobremesa").html(dish.sobremesa);
						
						$("#janta_principal").html(dish2.pPrincipal);
						$("#janta_salada").html(dish2.salada);
						$("#janta_guarnicao").html(dish2.guarnicao);
						$("#janta_vegetariano").html(dish2.oVegetariana);
						$("#janta_acompanhamento").html(dish2.acompanhamento);
						$("#janta_sobremesa").html(dish2.sobremesa);
					}
				
				
					
				}
				
				else if( targetClass == "bar_btn" ){
					$target.animate({ backgroundColor: 'rgba(95, 143, 221, 0.86)'}, 10, animateCallback);
					var targetId = $target.attr('id');
					
					if(targetId == "saveChanges"){
						saveEditChanges(selectedNotes[0].slice(1)); //slice() gets rid of the "L" at the beginning of the id
					}
					else if(targetId == "deleteImg"){
						$("[data-wrapper-s='true']").each(function(index, value) {
                            $(this).slideUp("fast", slideUpCallback); //waits until the slideUp animation is completed, then calls slideUpCallback
							function slideUpCallback(){
								$(this).remove(); //removes the img from the DOM
							}
                        });
						changeEditModeMenu();
						counterSelectedImgs = 0; //resets the counter since all of the selected imgs were deleted
					}
				}
				else if( targetClass == "thumbWrapper" || targetClass == "thumbNote"){ //if the user taps any thumbnail (img or +)
					if(targetId == "addNewPic"){
						$target.transition({background: 'orange'}, 100).transition({background: '#E3D2C7'}, 100, 'cubic-bezier(0,0.9,0.3,1)');
                		navigator.camera.getPicture(insertImgDOM, onPhotoFail, {quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.CAMERA, correctOrientation: true});//FILE_URI
					}
					else if(targetClass == "thumbNote"){ //an img thumbnail is tapped
						if ($target.parent().attr('data-wrapper-s') == 'true' ){
							$target.parent().attr('data-wrapper-s', 'false'); //deselects the image	
							counterSelectedImgs--;
							if(counterSelectedImgs == 0){ //the last img was deselected
								changeEditModeMenu();
							}
						}
						else if(counterSelectedImgs > 0){ // one img was already selected, then continue selecting 
							$target.parent().attr('data-wrapper-s', 'true'); //selects the image
							counterSelectedImgs++;	
						}
						else{
							cordova.plugins.disusered.open($target.attr("src")); //opens the img in fullscreen
						}
					}
					
				}
				else if( targetId == "appTitle"){
					if(window.orientation == 0 || window.orientation == 180){//0 and 180 for portrait mode
						var $menu = $("#swipeMenu");
						
						if($menu.attr('data-visible') == 'true' ){
							$menu.transition({x: '-260px'}, 500,'cubic-bezier(.09,.95,.16,1)').attr('data-visible','false');
						}
						else
							$menu.transition({x: '0px'}, 500, 'cubic-bezier(.09,.95,.16,1)').attr('data-visible','true');
					}
					else{
						alert("Vire o seu dispositivo")
					}
				}
				//alert("Id: " + targetId);
				
				function animateCallback(){
					$target.animate({ backgroundColor: 'rgba(255, 255, 255, 0.0)'}, 400);	
				}
				function insertImgDOM(data){
					var $imgDiv = $("<div>", {'id': "picId", 'class': "thumbWrapper"});
					var $img = $("<img />", {'src': data, 'id': "picId",  'data-orientation': "landscape", 'class': "thumbNote"});
						
					$imgDiv.append($img);
					$("#picThumbnails").prepend($imgDiv);	
					
					movePic(data);
				}
			}//tapHandler
			
			function changeEditModeMenu(){
				var $defaultMenu = $("#barOptions"); 
				var $imgMenu = $("#barOptionsImgs");
				
				if( $defaultMenu.is(":visible") ){
					$defaultMenu.hide();
					$imgMenu.css({"visibility":"visible"}).show();
					$("#barOptionsImgs").transition({background: '#FF5F00'}, 100, 'cubic-bezier(.24,1.06,.77,.98)').delay(100).transition({background: '#FFFFFF'}, 800, 'cubic-bezier(.29,.01,.11,.99)');
					
				}
				else {
					$defaultMenu.show();
					$imgMenu.css({"visibility":"hide"}).hide();
				}
			}
			
			function toggleSelectNote($target){ //the parameter $target is a Jquery object
				var targetId = $target.attr('id');
				var $popup = $(".popupContainer");
				
				//if the note is already selected: change its color and delete the its id from the array 
				if ($target.attr('data-s') == 'true' ){
						$target.attr('data-s', 'false');
						for(var i=0; i<selectedNotes.length; i++){
							if(targetId == selectedNotes[i]){ //if the Id is found in the array
								selectedNotes.splice(i,1); //delete the element of index i from the array
								break; //breaks the loop	
							}
						}
						if(selectedNotes.length == 0){ //checks if the LAST element was deselected
							togglePopup($popup); //hides popup	
						}
						else if(selectedNotes.length == 1){ //after deselecting a note, checks if there's only 1 selected note left
							$("#edit").show(); //shows edit and info options
							$("#info").show();
						}
						
				} 
				//if the note is deselect: change its color, push its id into the array
				else{
						$target.attr('data-s', 'true');
						
						if(selectedNotes.length == 0){ //checks if the FIRST element was deselected
							togglePopup($popup); //shows popup	
						}
						else if(selectedNotes.length == 1){ //before selecting a note, checks if there's already 1 note selected
							$("#edit").hide(); //hides edit and info options
							$("#info").hide();	
						}
						selectedNotes.push(targetId); //Pushes the Id of the note into the array
				}
			}
			
			function goToEditMode(targetId){ //targetId which was passed is just a NUMBER. It doesn't have any letter at the beginning of the id
				$.mobile.changePage('#editNote', {transition: "fade"} );
			}//goToEditMode
			
			
			function refreshEditMode(){
				$(".thumbNote").parent().remove();	//removes the old thumbnails (divs which contains an img with the class thumbNote) 
			}
			
			function updateUser(){
				var name = currentUser.name;
				var id = currentUser.id;
				var credits = currentUser.credits.toFixed(2);
				
				//alert("User: "+name+id+credits);
				
				var creditsRoundDown = Math.floor(credits/1.9);
				var change = (credits - creditsRoundDown*1.9).toFixed(2);

				$("#reais").html(credits);	
				$("#total_refeicoes").html(creditsRoundDown+" refeições");
				$("#total_troco").html("+R$ "+ change);
				$("#userName").html(name);
				$("#userPic").attr("src", "users/"+ id +".jpg")
				
			}
			
			function logOut(){
				//document.getElementById("userLogIn");
				//document.getElementById("password");
				$("#userLogIn").val('');
				$("#password").val('');
				menu = [];
				currentUser = null;
			}
		}
		
app.initialize(); //IMPORTANT