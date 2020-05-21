window.onload = () => {
    Smooth_hrefs: {
			$(function () {
			$('a[href*="#"]:not([href="#"])').click(function () {

				var target = $(this.hash);

				if (target.length) {
					$('html, body').animate({ scrollTop: target.offset().top }, 1000);
					return false;
				}

			});
		});
    }

    Botoes_Textos: {
        megaimg.onclick = () =>{
            let megaX = document.getElementById("megatext");
            if (megaX.style.display === "none") {
                megaX.style.display = "block";
                window.location.href = "#megaimg";
                document.getElementById("ryutext").style.display = "none";
                document.getElementById("divisor1").style.display = "none";
                document.getElementById("zerotext").style.display = "none";
                document.getElementById("divisor2").style.display = "none";
                document.getElementById("kentext").style.display = "none";
                document.getElementById("turingtext").style.display = "none";
                document.getElementById("metaltext").style.display = "none";
                document.getElementById("divisor3").style.display = "none";
                document.getElementById("divisor4").style.display = "none";
              } 
              else {
                megaX.style.display = "none";
              }
            
            
        }
        ryuimg.onclick = () =>{
            let ryu = document.getElementById("ryutext");
            let divisor1 = document.getElementById("divisor1");
            window.location.href = "#ryuimg";
            if (ryu.style.display === "none") {
                ryu.style.display = "block";
                divisor1.style.display = "block";
                document.getElementById("megatext").style.display = "none";
                document.getElementById("zerotext").style.display = "none";
                document.getElementById("divisor2").style.display = "none";
                document.getElementById("kentext").style.display = "none";
                document.getElementById("turingtext").style.display = "none";
                document.getElementById("metaltext").style.display = "none";
                document.getElementById("divisor3").style.display = "none";
                document.getElementById("divisor4").style.display = "none";
              } 
              else {
                ryu.style.display = "none";
                divisor1.style.display = "none";
              }
            
            
        }
        zeroimg.onclick = () =>{
            let personagem = document.getElementById("zerotext");
            let divisor = document.getElementById("divisor2");
            window.location.href = "#zeroimg";
            if (personagem.style.display === "none") {
                personagem.style.display = "block";
                divisor.style.display = "block";
                document.getElementById("megatext").style.display = "none";
                document.getElementById("ryutext").style.display = "none";
                document.getElementById("kentext").style.display = "none";
                document.getElementById("turingtext").style.display = "none";
                document.getElementById("metaltext").style.display = "none";
                document.getElementById("divisor3").style.display = "none";
                document.getElementById("divisor4").style.display = "none";
                document.getElementById("divisor1").style.display = "none";
              } 
            else {
                personagem.style.display = "none";
                divisor.style.display = "none";
            }
        }
        kenimg.onclick = () =>{
            let personagem = document.getElementById("kentext");
            window.location.href = "#kenimg";
            if (personagem.style.display === "none") {
                personagem.style.display = "block";
                document.getElementById("megatext").style.display = "none";
                document.getElementById("ryutext").style.display = "none";
                document.getElementById("zerotext").style.display = "none";
                document.getElementById("divisor2").style.display = "none";
                document.getElementById("turingtext").style.display = "none";
                document.getElementById("metaltext").style.display = "none";
                document.getElementById("divisor3").style.display = "none";
                document.getElementById("divisor4").style.display = "none";
                document.getElementById("divisor1").style.display = "none";
              } 
            else {
                personagem.style.display = "none";
            }
        }
        turingimg.onclick = () =>{
            let personagem = document.getElementById("turingtext");
            let divisor = document.getElementById("divisor3");
            window.location.href = "#turingimg";
            if (personagem.style.display === "none") {
                personagem.style.display = "block";
                divisor.style.display = "block";
                document.getElementById("megatext").style.display = "none";
                document.getElementById("divisor1").style.display = "none";
                document.getElementById("kentext").style.display = "none";
                document.getElementById("ryutext").style.display = "none";
                document.getElementById("zerotext").style.display = "none";
                document.getElementById("divisor2").style.display = "none";
                document.getElementById("metaltext").style.display = "none";
                document.getElementById("divisor4").style.display = "none";
              } 
            else {
                personagem.style.display = "none";
                divisor.style.display = "none";
            }
        }
        metalimg.onclick = () =>{
            let personagem = document.getElementById("metaltext");
            let divisor = document.getElementById("divisor4");
            window.location.href = "#metalimg";
            if (personagem.style.display === "none") {
                personagem.style.display = "block";
                divisor.style.display = "block";
                document.getElementById("megatext").style.display = "none";
                document.getElementById("kentext").style.display = "none";
                document.getElementById("ryutext").style.display = "none";
                document.getElementById("zerotext").style.display = "none";
                document.getElementById("divisor2").style.display = "none";
                document.getElementById("turingtext").style.display = "none";
                document.getElementById("divisor3").style.display = "none";
                document.getElementById("divisor1").style.display = "none";
              } 
            else {
                personagem.style.display = "none";
                divisor.style.display = "none";
            }
        }
    }   
}