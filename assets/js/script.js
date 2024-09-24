// Function to show/hide relevant options for weapons, armor, and misc items
function updateItemOptions() {
    const itemType = document.getElementById("itemType").value;
    const weaponTypeContainer = document.getElementById("weaponTypeContainer");
    const armorOptionsContainer = document.getElementById("armorOptionsContainer");
    const miscOptionsContainer = document.getElementById("miscOptionsContainer");

    // Show or hide specific dropdowns based on selected item type
    if (itemType === "weapon") {
        weaponTypeContainer.style.display = "block";
        armorOptionsContainer.style.display = "none";
        miscOptionsContainer.style.display = "none";
    } else if (itemType === "armor") {
        weaponTypeContainer.style.display = "none";
        armorOptionsContainer.style.display = "block";
        miscOptionsContainer.style.display = "none";
    } else if (itemType === "misc") {
        weaponTypeContainer.style.display = "none";
        armorOptionsContainer.style.display = "none";
        miscOptionsContainer.style.display = "block";
    } else {
        weaponTypeContainer.style.display = "none";
        armorOptionsContainer.style.display = "none";
        miscOptionsContainer.style.display = "none";
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
    } else if (itemType === "misc") {
        const miscType = document.getElementById("miscType").value;
        itemDetails = `Misc: ${miscType}`;
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

// Function to create a random item
function createRandomItem() {
    const randomNames = ["Mystic", "Shadow", "Flame", "Frost", "Thunder", "Vortex", "Blood", "Spirit", "Void"];
    const itemTypes = ["weapon", "armor", "misc"];
    
    // Arrays for options
    const weaponTypes = ["axe", "club", "short-sword", "long-sword", "staff", "bow", "dagger", "scimitar"];
    const armorTypes = ["helmet", "boots", "shield", "gloves", "chest-plate", "robe"];
    const armorStyles = ["plate", "leather", "chainmail", "cloth", "banded"];
    const miscTypes = ["bean-burrito", "meal", "drink", "book", "ring", "necklace", "door-knob"];
    const bonuses = ["+1", "+2", "+3", "+4", "+5"];
    const magicalEffects = ["fire", "ice", "necrotic", "disguise", "shield", "poison", "stun"];
    const secondaryEffects = ["fire", "ice", "necrotic", "poison", "stun", "light"];

    // Randomly select name and item type
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)] + " " + randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomItemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    
    let itemDetails = '';

    if (randomItemType === "weapon") {
        const randomWeaponType = weaponTypes[Math.floor(Math.random() * weaponTypes.length)];
        itemDetails = `Weapon: ${randomWeaponType}`;
    } else if (randomItemType === "armor") {
        const randomArmorType = armorTypes[Math.floor(Math.random() * armorTypes.length)];
        const randomArmorStyle = armorStyles[Math.floor(Math.random() * armorStyles.length)];
        itemDetails = `Armor: ${randomArmorType} (${randomArmorStyle})`;
    } else if (randomItemType === "misc") {
        const randomMiscType = miscTypes[Math.floor(Math.random() * miscTypes.length)];
        itemDetails = `Misc: ${randomMiscType}`;
    }

    // Randomly select bonuses and effects
    const randomBonus = bonuses[Math.floor(Math.random() * bonuses.length)];
    const randomMagicalEffect = magicalEffects[Math.floor(Math.random() * magicalEffects.length)];
    const randomSecondaryEffect = secondaryEffects[Math.floor(Math.random() * secondaryEffects.length)];

    let result = `Item Name: ${randomName}\n${itemDetails} with ${randomBonus} weapon bonus, ${randomMagicalEffect} magical effect, and ${randomSecondaryEffect} secondary effect.`;

    document.getElementById("output").innerText = result;

    // Show the Notes and Save section after item is created
    document.getElementById("notesSection").style.display = "block";
    document.getElementById("saveSection").style.display = "block";
}

