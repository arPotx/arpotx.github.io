// Erstellen Sie ein Objekt mit den Daten für jedes Element
var elementData = {
    'Hydrogen': {
        'Symbol': 'H',
        'Protons': 1,
        'Neutrons': 0,
        'Electrons': 1,
        'Atomic mass': 1.008
    },
    'Helium': {
        'Symbol': 'He',
        'Protons': 2,
        'Neutrons': 2,
        'Electrons': 2,
        'Atomic mass': 4.0026
    },
    'Lithium': {
        'Symbol': 'Li',
        'Protons': 3,
        'Neutrons': 4,
        'Electrons': 3,
        'Atomic mass': 6.94
    },
    'Beryllium': {
        'Symbol': 'Be',
        'Protons': 4,
        'Neutrons': 5,
        'Electrons': 4,
        'Atomic mass': 9.0122
    },
    'Boron': {
        'Symbol': 'B',
        'Protons': 5,
        'Neutrons': 6,
        'Electrons': 5,
        'Atomic mass': 10.81
    },
    'Carbon': {
        'Symbol': 'C',
        'Protons': 6,
        'Neutrons': 6,
        'Electrons': 6,
        'Atomic mass': 12.011
    },
    'Nitrogen': {
        'Symbol': 'N',
        'Protons': 7,
        'Neutrons': 7,
        'Electrons': 7,
        'Atomic mass': 14.007
    },
    'Oxygen': {
        'Symbol': 'O',
        'Protons': 8,
        'Neutrons': 8,
        'Electrons': 8,
        'Atomic mass': 15.999
    },
    'Fluorine': {
        'Symbol': 'F',
        'Protons': 9,
        'Neutrons': 10,
        'Electrons': 9,
        'Atomic mass': 18.998
    },
    'Neon': {
        'Symbol': 'Ne',
        'Protons': 10,
        'Neutrons': 10,
        'Electrons': 10,
        'Atomic mass': 20.180
    },
    'Sodium': {
        'Symbol': 'Na',
        'Protons': 11,
        'Neutrons': 12,
        'Electrons': 11,
        'Atomic mass': 22.990
    },
    'Magnesium': {
        'Symbol': 'Mg',
        'Protons': 12,
        'Neutrons': 12,
        'Electrons': 12,
        'Atomic mass': 24.305
    },
    'Aluminum': {
        'Symbol': 'Al',
        'Protons': 13,
        'Neutrons': 14,
        'Electrons': 13,
        'Atomic mass': 26.982
    },
    'Silicon': {
        'Symbol': 'Si',
        'Protons': 14,
        'Neutrons': 14,
        'Electrons': 14,
        'Atomic mass': 28.085
    },
    'Phosphorus': {
        'Symbol': 'P',
        'Protons': 15,
        'Neutrons': 16,
        'Electrons': 15,
        'Atomic mass': 30.974
    },
    'Sulfur': {
        'Symbol': 'S',
        'Protons': 16,
        'Neutrons': 16,
        'Electrons': 16,
        'Atomic mass': 32.06
    },
    'Chlorine': {
        'Symbol': 'Cl',
        'Protons': 17,
        'Neutrons': 18,
        'Electrons': 17,
        'Atomic mass': 35.45
    },
    'Argon': {
        'Symbol': 'Ar',
        'Protons': 18,
        'Neutrons': 22,
        'Electrons': 18,
        'Atomic mass': 39.948
    }
    // Fügen Sie hier weitere Elemente hinzu...
};

// Wählen Sie alle Elemente aus
var elements = document.querySelectorAll('.element');

// Fügen Sie jedem Element einen Event-Listener hinzu
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        // Wählen Sie den #element-info-Container aus
        var infoContainer = document.querySelector('.element-info');

        // Holen Sie sich den Namen des angeklickten Elements
        var elementName = this.querySelector('.name').textContent;

        // Holen Sie sich die Daten des angeklickten Elements
        var data = elementData[elementName];

        // Überprüfen Sie, ob Daten für das Element vorhanden sind
        if (data) {
            // Erstellen Sie einen String mit den Daten
            var dataString = data.Symbol + " (" + elementName + ")" + '<br>Protons: ' + data.Protons + '<br>Neutrons: ' + data.Neutrons + '<br>Electrons: ' + data.Electrons + '<br>Atomic mass: ' + data['Atomic mass'];

            // Fügen Sie die Daten in den #element-info-Container ein
            infoContainer.innerHTML = dataString;
        }
    });
});