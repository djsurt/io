

// Helper function to format URLs
const formatUrl = (url) => {
  return `<a href="${url}" target="_blank">${url.length > 30 ? url.substring(0, 30) + '...' : url}</a>`;
};
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US');
};
function formatKey(str) {
  const allCaps = ['id', 'url', 'lol']; // Words to capitalize entirely
  const allLower = ['a', 'is', 'the', 'and', 'of', 'in', 'on', 'for', 'with']; // Words to keep all lowercase
  
  // Remove underscores and split the string into an array of words
  let words = str.replace(/_/g, ' ').split(' ');

  // Capitalize the first letter of each word
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  // Capitalize entire word if it's in the allCaps array
  words = words.map(word => {
      if (allCaps.includes(word.toLowerCase())) {
          return word.toUpperCase();
      }
      return word;
  });

  // Convert certain words to lowercase if they are in the allLower array
  words = words.map(word => {
      if (allLower.includes(word.toLowerCase())) {
          return word.toLowerCase();
      }
      return word;
  });

  // Join the words back into a string and return
  return words.join(' ');
}
function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true
}

// Loop through yamlData and create divs for each key-value pair
function formatYamlLabel(data,profileContainer) {
  waitForElm('#formatted').then((elm) => {

    const profileDiv = document.createElement('div');
    profileDiv.classList.add('envProfile');

    // Add profile type
    const profileTypeDiv = document.createElement('div');
    profileTypeDiv.classList.add('profileType');
    profileTypeDiv.textContent = 'Product Profile';
    profileDiv.appendChild(profileTypeDiv);

    // Add profile title
    const profileTitleDiv = document.createElement('div');
    profileTitleDiv.classList.add('profileTitle');
    profileTitleDiv.textContent = 'Product Title'; // Hardcoded for now
    profileDiv.appendChild(profileTitleDiv);

    const yamlData = jsyaml.load(data);
    Object.entries(yamlData).forEach(([key, value]) => {
      if (value !== null && typeof value !== 'object') {
        const itemDiv = document.createElement('div');
        const span = document.createElement('span');
        if (key.includes('url') || key == 'ref') {
          span.innerHTML = formatUrl(value);
        } else if (key.includes('date')) {
          span.textContent = formatDate(value);
        } else {
          span.textContent = value;
        }
        itemDiv.innerHTML = `<b>${formatKey(key)}</b> `;
        itemDiv.appendChild(span);
        profileDiv.appendChild(itemDiv);
      } else if (typeof value === 'object' && value !== null && !isEmpty(value)) {
        const itemDiv = document.createElement('div');
        const keyDiv = document.createElement('div');
        keyDiv.innerHTML = `<b>${formatKey(key)}</b> `;
        itemDiv.appendChild(keyDiv);

        // Loop through nested object
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (subValue !== null && typeof subValue !== 'object') {
            const subItemDiv = document.createElement('div');
            const subSpan = document.createElement('span');
            if (subKey.includes('url') || subKey == 'ref') {
              subSpan.innerHTML = formatUrl(subValue);
            } else if (subKey.includes('date')) {
              subSpan.textContent = formatDate(subValue);
            } else {
              subSpan.textContent = subValue;
            }
            subItemDiv.innerHTML = `${formatKey(subKey)} `;
            subItemDiv.appendChild(subSpan);
            itemDiv.appendChild(subItemDiv);
          } else if (typeof subValue === 'object' && subValue !== null)  {
            const subItemDiv = document.createElement('div');
            const subSpan = document.createElement('span');
            subSpan.innerHTML = `<b>${formatKey(key)}</b> `;
            subItemDiv.appendChild(keyDiv);
            Object.entries(subValue).forEach(([subSubKey, subSubValue]) => {
              if (subSubValue !== null) {

                const subSubItemDiv = document.createElement('div');
                const subSubSpan = document.createElement('span');
                if (subSubKey.includes('url') || subSubKey == 'ref') {
                  subSubSpan.innerHTML = formatUrl(subSubValue);
                } else if (subSubKey.includes('date')) {
                  subSubSpan.textContent = formatDate(subSubValue);
                } else {
                  subSubSpan.textContent = subSubValue;
                }
                subSubItemDiv.innerHTML = `${formatKey(subSubKey)} `;
                subSubItemDiv.appendChild(subSubSpan);
                subItemDiv.appendChild(subSubItemDiv);
              }
            });
          }
        });
        profileDiv.appendChild(itemDiv);
      }
    });
    profileContainer.appendChild(profileDiv);
  });
}
