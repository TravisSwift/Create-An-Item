// Function to show/hide relevant options for weapons and armor
function updateItemOptions() {
    const itemType = document.getElementById("itemType").value;
    const weaponTypeContainer = document.getElementById("weaponTypeContainer");
    const armorOptionsContainer = document.getElementById("armorOptionsContainer");

    if (itemType === "weapon") {
        weaponTypeContainer.style.display = "block";
        armorOptionsContainer.style.display = "none";
    } else if (itemType === "armor") {
        weaponTypeContainer.style.display = "none";
        armorOptionsContainer.style.display = "block";
    } else {
        weaponTypeContainer.style.display = "none";
        armorOptionsContainer.style.display = "none";
    }
}

// Toggle Weapon Bonus functionality
function toggleWeaponBonus() {
    const weaponBonusToggle = document.getElementById("weaponBonusToggle");
    const weaponBonus = document.getElementById("weaponBonus");
    weaponBonus.disabled = !weaponBonusToggle.checked;
}

// Toggle Magical Effect functionality
function toggleMagicalEffect() {
    const magicalEffectToggle = document.getElementById("magicalEffectToggle");
    const magicalEffect = document.getElementById("magicalEffect");
    magicalEffect.disabled = !magicalEffectToggle.checked;
}

// Toggle Secondary Effect functionality
function toggleSecondaryEffect() {
    const secondaryEffectToggle = document.getElementById("secondaryEffectToggle");
    const secondaryEffect = document.getElementById("secondaryEffect");
    secondaryEffect.disabled = !secondaryEffectToggle.checked;
}

// Function to create the magic item and display the result
function createMagicItem() {
    const itemName = document.getElementById("itemName").value;
    const itemType = document.getElementById("itemType").value;
    let itemDetails = '';

    if (itemType === "weapon") {
        const weaponType = document.getElementById("weaponType").value;
        itemDetails = `Weapon: ${weaponType}`;
    } else if (itemType === "armor") {
        const armorType = document.getElementById("armorType").value;
        const armorStyle = document.getElementById("armorStyle").value;
        itemDetails = `Armor: ${armorType} (${armorStyle})`;
    }

    const weaponBonusToggle = document.getElementById("weaponBonusToggle").checked;
    const weaponBonus = weaponBonusToggle ? document.getElementById("weaponBonus").value : "No Bonus";

    const magicalEffectToggle = document.getElementById("magicalEffectToggle").checked;
    const magicalEffect = magicalEffectToggle ? document.getElementById("magicalEffect").value : "No Effect";

    const secondaryEffectToggle = document.getElementById("secondaryEffectToggle").checked;
    const secondaryEffect = secondaryEffectToggle ? document.getElementById("secondaryEffect").value : "No Secondary Effect";

    let result = `Item Name: ${itemName}\n${itemDetails} with ${weaponBonus} weapon bonus, ${magicalEffect} magical effect, and ${secondaryEffect} secondary effect.`;

    document.getElementById("output").innerText = result;
    
    // Show the Notes and Save section after item is created
    document.getElementById("notesSection").style.display = "block";
    document.getElementById("saveSection").style.display = "block";
}

// Function to create a random item and display the result
function createRandomItem() {
    const randomNames = ["Mystic", "Shadow", "Flame", "Frost", "Thunder", "Vortex", "Blood", "Spirit", "Void"];
    const randomItemTypes = ["weapon", "armor"];
    const randomWeapons = ["axe", "club", "short-sword", "staff", "long-sword", "bow"];
    const randomArmors = ["helmet", "boots", "shield", "gloves", "robe", "chest-plate"];
    const randomArmorStyles = ["plate", "leather", "banded", "chainmail", "cloth"];
    const randomBonuses = ["+1", "+2", "+3", "+4", "+5"];
    const randomEffects = ["fire", "ice", "necrotic", "disguise", "shield", "poison", "stun"];
    const randomSecondaryEffects = ["fire", "ice", "necrotic", "poison", "stun", "light"];

    // Randomize item name, item type, weapon/armor, bonuses, and effects
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)] + " " + randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomItemType = randomItemTypes[Math.floor(Math.random() * randomItemTypes.length)];
    let itemDetails = '';

    if (randomItemType === "weapon") {
        const randomWeapon = randomWeapons[Math.floor(Math.random() * randomWeapons.length)];
        itemDetails = `Weapon: ${randomWeapon}`;
    } else if (randomItemType === "armor") {
        const randomArmor = randomArmors[Math.floor(Math.random() * randomArmors.length)];
        const randomArmorStyle = randomArmorStyles[Math.floor(Math.random() * randomArmorStyles.length)];
        itemDetails = `Armor: ${randomArmor} (${randomArmorStyle})`;
    }

    const randomBonus = randomBonuses[Math.floor(Math.random() * randomBonuses.length)];
    const randomEffect = randomEffects[Math.floor(Math.random() * randomEffects.length)];
    const randomSecondaryEffect = randomSecondaryEffects[Math.floor(Math.random() * randomSecondaryEffects.length)];

    let result = `Item Name: ${randomName}\n${itemDetails} with ${randomBonus} weapon bonus, ${randomEffect} magical effect, and ${randomSecondaryEffect} secondary effect.`;

    document.getElementById("output").innerText = result;

    // Show the Notes and Save section after item is created
    document.getElementById("notesSection").style.display = "block";
    document.getElementById("saveSection").style.display = "block";
}

// Function to save the result as a .doc file
function saveToDoc() {
    const itemName = document.getElementById("itemName").value || "Magic Item";
    const result = document.getElementById("output").innerText;
    const notes = document.getElementById("notes").value;
    
    const content = result + "\n\nNotes:\n" + notes;

    const blob = new Blob([content], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${itemName}.doc`;
    link.click();
}

// Function to save the result as a .pdf file
function saveToPdf() {
    const itemName = document.getElementById("itemName").value || "Magic Item";
    const result = document.getElementById("output").innerText;
    const notes = document.getElementById("notes").value;

    const content = result + "\n\nNotes:\n" + notes;

    const pdfWindow = window.open("");
    pdfWindow.document.write(`<pre>${content}</pre>`);
    pdfWindow.document.close();
    pdfWindow.print();
}
    