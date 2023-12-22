// Erstellen Sie ein Objekt mit den Daten für jedes Element in Englisch
var elementDataEnglish = {
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
    'Flourine': {
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
    'Aluminium': {
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

// Erstellen Sie ein Objekt mit den Daten für jedes Element in Deutsch
var elementDataDeutsch = {
    'Wasserstoff': {
        'Symbol': 'H',
        'Protonen': 1,
        'Neutronen': 0,
        'Elektronen': 1,
        'Atommasse': 1.008
    },
    'Helium': {
        'Symbol': 'He',
        'Protonen': 2,
        'Neutronen': 2,
        'Elektronen': 2,
        'Atommasse': 4.0026
    },
    'Lithium': {
        'Symbol': 'Li',
        'Protonen': 3,
        'Neutronen': 4,
        'Elektronen': 3,
        'Atommasse': 6.94
    },
    'Beryllium': {
        'Symbol': 'Be',
        'Protonen': 4,
        'Neutronen': 5,
        'Elektronen': 4,
        'Atommasse': 9.0122
    },
    'Bor': {
        'Symbol': 'B',
        'Protonen': 5,
        'Neutronen': 6,
        'Elektronen': 5,
        'Atommasse': 10.81
    },
    'Kohlenstoff': {
        'Symbol': 'C',
        'Protonen': 6,
        'Neutronen': 6,
        'Elektronen': 6,
        'Atommasse': 12.011
    },
    'Stickstoff': {
        'Symbol': 'N',
        'Protonen': 7,
        'Neutronen': 7,
        'Elektronen': 7,
        'Atommasse': 14.007
    },
    'Sauerstoff': {
        'Symbol': 'O',
        'Protonen': 8,
        'Neutronen': 8,
        'Elektronen': 8,
        'Atommasse': 15.999
    },
    'Fluor': {
        'Symbol': 'F',
        'Protonen': 9,
        'Neutronen': 10,
        'Elektronen': 9,
        'Atommasse': 18.998
    },
    'Neon': {
        'Symbol': 'Ne',
        'Protonen': 10,
        'Neutronen': 10,
        'Elektronen': 10,
        'Atommasse': 20.180
    },
    'Natrium': {
        'Symbol': 'Na',
        'Protonen': 11,
        'Neutronen': 12,
        'Elektronen': 11,
        'Atommasse': 22.990
    },
    'Magnesium': {
        'Symbol': 'Mg',
        'Protonen': 12,
        'Neutronen': 12,
        'Elektronen': 12,
        'Atommasse': 24.305
    },
    'Aluminium': {
        'Symbol': 'Al',
        'Protonen': 13,
        'Neutronen': 14,
        'Elektronen': 13,
        'Atommasse': 26.982
    },
    'Silizium': {
        'Symbol': 'Si',
        'Protonen': 14,
        'Neutronen': 14,
        'Elektronen': 14,
        'Atommasse': 28.085
    },
    'Phosphor': {
        'Symbol': 'P',
        'Protonen': 15,
        'Neutronen': 16,
        'Elektronen': 15,
        'Atommasse': 30.974
    },
    'Schwefel': {
        'Symbol': 'S',
        'Protonen': 16,
        'Neutronen': 16,
        'Elektronen': 16,
        'Atommasse': 32.06
    },
    'Chlor': {
        'Symbol': 'Cl',
        'Protonen': 17,
        'Neutronen': 18,
        'Elektronen': 17,
        'Atommasse': 35.45
    },
    'Argon': {
        'Symbol': 'Ar',
        'Protonen': 18,
        'Neutronen': 22,
        'Elektronen': 18,
        'Atommasse': 39.948
    },
    // Fügen Sie hier weitere Elemente hinzu...
};

// Setzen Sie die Standardsprache auf Englisch
var language = 'english';

// Wählen Sie alle Elemente aus
var elements = document.querySelectorAll('.element');

// Funktion zum Anzeigen der Elementdaten
function displayElementData() {
    elements.forEach(function(element) {
        element.removeEventListener('click', clickHandler);
        element.addEventListener('click', clickHandler);
    });
}

var lastClickedElement = null;

function clickHandler(event) {
    lastClickedElement = event.target.closest('.element');
    // Wählen Sie den #element-info-Container aus
    var infoContainer = document.querySelector('.element-info');

    // Holen Sie sich den Namen des angeklickten Elements
    var elementName;
    var nameElement = event.target.closest('.element').querySelector('.name');
    if (language === 'english') {
        elementName = nameElement.getAttribute('data-english-name');
    } else {
        elementName = nameElement.getAttribute('data-deutsch-name');
    }

    // Verwenden Sie die language-Variable, um zu bestimmen, welches elementData-Objekt verwendet werden soll
    var elementData = language === 'english' ? elementDataEnglish : elementDataDeutsch;

    // Holen Sie sich die Daten des angeklickten Elements
    var data = elementData[elementName];

    // Überprüfen Sie, ob Daten für das Element vorhanden sind
    if (data) {
        // Erstellen Sie einen String mit den Daten
        var dataString;
        if (language === 'english') {
            dataString = data.Symbol + " (" + elementName + ")" + '<br>Protons: ' + data.Protons + '<br>Neutrons: ' + data.Neutrons + '<br>Electrons: ' + data.Electrons + '<br>Atomic mass: ' + data['Atomic mass'];
        } else {
            dataString = data.Symbol + " (" + elementName + ")" + '<br>Protonen: ' + data.Protonen + '<br>Neutronen: ' + data.Neutronen + '<br>Elektronen: ' + data.Elektronen + '<br>Atommasse: ' + data.Atommasse;
        }

        // Fügen Sie die Daten in den #element-info-Container ein
        infoContainer.innerHTML = dataString;
    }
}

// Führen Sie die Funktion zum ersten Mal aus
displayElementData();

// Ändern Sie die Sprache, wenn eine Schaltfläche geklickt wird
document.getElementById('deutsch').addEventListener('click', function() {
    language = 'deutsch';
    displayElementData();
    var labels = document.querySelectorAll('label');
    labels.forEach(function(label) {
        var deutschName = label.getAttribute('data-deutsch-name');
        if (deutschName) {
            label.textContent = deutschName;
        }
    });
    if (lastClickedElement) {
        lastClickedElement.click();
    }
});

document.getElementById('english').addEventListener('click', function() {
    language = 'english';
    displayElementData();
    var labels = document.querySelectorAll('label');
    labels.forEach(function(label) {
        var englishName = label.getAttribute('data-english-name');
        if (englishName) {
            label.textContent = englishName;
        }
    });
    if (lastClickedElement) {
        lastClickedElement.click();
    }
});