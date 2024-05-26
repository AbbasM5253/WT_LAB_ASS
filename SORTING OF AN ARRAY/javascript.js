function performIntegerOperations() {
    const inputArray = document.getElementById("integerArray").value.split(',').map(Number);

    // Check if the array is already sorted
    const isSorted = isSortedArray(inputArray);

    if (isSorted) {
        document.getElementById("sortedArray").innerText = `Already Sorted: ${inputArray.join(', ')}`;
    } else {
        const sortedArray = inputArray.slice().sort((a, b) => a - b);
        document.getElementById("sortedArray").innerText = `Sorted Array: ${sortedArray.join(', ')}`;
    }

    // Corrected placement for displaying the number of elements
    document.getElementById("numberOfElements").innerText = `Number of Elements: ${inputArray.length}`;
}

function performEntityOperations() {
    const entityArray = document.getElementById("entityArray").value.split(',').map(entity => entity.trim());
    const isSorted = isSortedArray(entityArray);

    if (isSorted) {
        document.getElementById("sortedEntities").innerText = `Already Sorted: ${entityArray.join(', ')}`;
    } else {
        const sortedEntityArray = entityArray.slice().sort((a, b) => a.localeCompare(b));
        document.getElementById("sortedEntities").innerText = `Sorted Entities: ${sortedEntityArray.join(', ')}`;
    }

    document.getElementById("entityCount").innerText = `Number of Entities: ${entityArray.length}`;
}
function isSortedArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}





