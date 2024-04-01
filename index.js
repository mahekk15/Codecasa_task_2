const inB = document.getElementById("in");
        const ftc = document.getElementById("ftc");
        const ctf = document.getElementById("ctf");
        const ans = document.getElementById("ans");
        let temp;
        function convt() {
          if (ftc.checked) {
            temp=(inB.value);
            temp= (temp-32)*(5/9) ;
            ans.textContent=temp.toFixed(1) + "°C" ;
          } 
          else if (ctf.checked) {
            temp=(inB.value);
            temp= temp*9/5 + 32 ;
            ans.textContent=temp.toFixed(1) + "°F" ;

          } else {
            ans.textContent = `Select a unit`;
          }
        }