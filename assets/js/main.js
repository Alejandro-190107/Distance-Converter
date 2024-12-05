const distanceInput = document.getElementById('distance');
const unitSelect = document.getElementById('unit');
const resultAlert = document.getElementById('resultAlert');
const resultContent = document.getElementById('resultContent');

// Function to update the results
function updateResults() {
    const value = parseFloat(distanceInput.value);
    const unit = unitSelect.value;

    if (!value || !unit) {
        resultAlert.style.display = 'none'; //Hide alert if information is missing
        return;
    }

    resultAlert.style.display = 'block'; // Show alert

    let meters;

    // Convert to meters as base unit
    switch (unit) {
        case 'meters':
            meters = value;
            break;
        case 'kilometers':
            meters = value * 1000;
            break;
        case 'miles':
            meters = value * 1609.34;
            break;
        case 'feet':
            meters = value * 0.3048;
            break;
        default:
            meters = 0;
    }

   // Calculate conversions
    const kilometers = meters / 1000;
    const miles = meters / 1609.34;
    const feet = meters / 0.3048;

   // Update the content of the result
    resultContent.innerHTML = `
        <div class="row">                        
            <div class="col-md-6">
                <div>            
                    <ul>Meters: ${meters.toFixed(2)} <strong class="alert-strong-result">m</strong></ul> 
                    <ul>Kilometers: ${kilometers.toFixed(2)} <strong class="alert-strong-result">km</strong></ul>            
                </div>
            </div>   
            <div class="col-md-6">
                <div>        
                    <ul>Miles: ${miles.toFixed(2)} <strong class="alert-strong-result">mi</strong></ul>
                    <ul>Feet: ${feet.toFixed(2)} <strong class="alert-strong-result">ft</strong></ul>                           
                </div>
            </div>                                                                                   
        </div>
    `;
}

// make changes to the input and select
distanceInput.addEventListener('input', updateResults);
unitSelect.addEventListener('change', updateResults);