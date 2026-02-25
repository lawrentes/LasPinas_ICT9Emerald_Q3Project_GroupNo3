  
  
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

    /* so.. this makes it green and makes it lean.. */

    function discountedFare() {
                        const pickup = Number(document.getElementById("distance1").value);
                        const dropoff = Number(document.getElementById("distance2").value);

                        let ops = (Number(pickup) + Number(dropoff)) * Number(0.2)
                        let ops2 = Number(pickup) + Number(dropoff)
                        let total = ops2 - ops;

                        document.getElementById("result").innerHTML = "Transportation Fee: " + total;
                    }

                    function regularFare() {
                        const pickup = Number(document.getElementById("distance1").value);
                        const dropoff = Number(document.getElementById("distance2").value);

                        let total = pickup + dropoff;

                        document.getElementById("result").innerHTML = "Transportation Fee: " + total;
                    }
					
/**
 * Distances based on kilometers from North Avenue .
 * Source: https://www.metrolinemap.com/metro/manila/ 
 */
const mrt3Distances = {
    "North Avenue": 0.0,
    "Quezon Avenue": 1.2,
    "Kamuning": 2.1,
    "Araneta Center-Cubao": 4.0,
    "Santolan-Annapolis": 5.5,
    "Ortigas": 7.8,
    "Shaw Boulevard": 8.6,
    "Boni": 9.6,
    "Guadalupe": 10.4,
    "Buendia": 12.4,
    "Ayala": 13.4,
    "Magallanes": 14.6,
    "Taft Avenue": 16.9
};

/**
 * FARE CALCULATION 
 * Uses variables and operators to perform calculations
 */
function calculateFare(distance, isDiscounted) {
    // Assigning values to variables as per instructions
    const baseFare = 50;     // Minimum fare including first 2KM
    const perKMrate = 15;    // Cost per kilometer beyond 2KM
    const baseKM = 2;        // Distance included in base fare
    
    let totalFare = 0;

    // Use Math.max to compute absolute
    if (distance <= baseKM) {
        totalFare = baseFare;
    } else {
        // Calculate only the distance beyond the first 2KM
        let extraDistance = distance - baseKM;
        totalFare = baseFare + (extraDistance * perKMrate);
    }

    // Apply 20% discount 
    if (isDiscounted) {
        totalFare = totalFare * 0.80; // Regular rate less 20%
    }

    // Return the final value rounded to 2 decimal 
    return totalFare.toFixed(2);
}

/**
 * Displays information when triggered by button actions
 */
function processFare(isDiscounted) {
    // Get station names from the HTML select elements
    const startStation = document.getElementById('pickup').value;
    const endStation = document.getElementById('dropoff').value;

    // Retrieve distances from the mapping object
    const startKM = mrt3Distances[startStation];
    const endKM = mrt3Distances[endStation];

    // Calculate total distance traveled using Math.abs 
    const totalDistance = Math.abs(endKM - startKM);

    // Call the calculation logic
    const finalFare = calculateFare(totalDistance, isDiscounted);

    // Display the result using innerHTML as required 
    document.getElementById('result').innerHTML = "Metrio Fare: " + finalFare;

        /* yay.. now it is all clean... */
}
