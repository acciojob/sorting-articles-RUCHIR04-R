const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to sort the bands while ignoring 'a', 'an', and 'the'
function sortBands(bands) {
    return bands.sort((a, b) => {
        const strippedA = a.replace(/^(a|an|the)\s+/i, '');
        const strippedB = b.replace(/^(a|an|the)\s+/i, '');
        return strippedA.localeCompare(strippedB);
    });
}

// Insert sorted bands into the unordered list
const sortedBands = sortBands(bands);
const bandList = document.getElementById('band');

sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});