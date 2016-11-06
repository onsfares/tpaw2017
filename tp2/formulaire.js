function validation(){
	var nom,error, resultat,lang_nom,prénom;
	
	nom= document.getElementById("nom").value;
	prénom= document.getElementById("prénom").value;
	error= document.getElementById("error");
	resultat=document.getElementById("resultat");
	error.innerHTML=="";
	resultat.innerHTML=="";

	
   if(nom.length<=5){ 
		error.innerHTML="le nom doit contenir au moins 5 caractères";
   }else {
	   resultat.innerHTML= "Bienvenue "+prénom;
   }	
}