  
  
    function previewImage(event) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById('user').src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    function showDiv() {
    document.getElementById("confirm").style.display = "block";
    }
   document.getElementById('formation').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('confirm').style.display = "block";
    });
    
    document.getElementById('close').addEventListener('click', function() {
    
    document.getElementById('confirm').style.display = "none";
    });