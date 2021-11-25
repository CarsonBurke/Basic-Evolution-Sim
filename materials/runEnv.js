let tick = 0

const displayValues = {
    tick: tick,
}

function runTick() {

    console.log(tick)
    tick++

    runBatch()

    display()
}

function runBatch() {

    
}

function display() {

    // Loop through displayValues

    for (const valueName in displayValues) {

        const displayValue = displayValues[valueName]

        // Find element with displayValue as id and set text to displayValue
        
        const el = document.getElementById(valueName)
        el.innerText = displayValue
    }
}