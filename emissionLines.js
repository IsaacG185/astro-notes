// Wrap the initialization in a function
(function() {
  // Wait until window.constants is available
  if (!window.constants) {
    console.error("Constants not loaded yet. emissionLines.js requires constants.js to load first.");
    return;
  }

  // Calculated for brevity.
  const hc_keV_A =
    window.constants.planck_constant_h.values["keV*s"] *
    window.constants.speed_of_light_c.values["Å*s^-1"];

  // Emission Lines for AstroNotes
  window.emissionLines = [
    // ================= Hydrogen Series =================
    { name: "Hydrogen Lyα", wavelength: 1216, energy: hc_keV_A / 1216 },
    { name: "Hydrogen Lyβ", wavelength: 1026, energy: hc_keV_A / 1026 },
    { name: "Hydrogen Lyγ", wavelength: 973,  energy: hc_keV_A / 973 },
    { name: "Hydrogen Hα", wavelength: 6563, energy: hc_keV_A / 6563 },
    { name: "Hydrogen Hβ", wavelength: 4861, energy: hc_keV_A / 4861 },
    { name: "Hydrogen Hγ", wavelength: 4340, energy: hc_keV_A / 4340 },
    { name: "Hydrogen Hδ", wavelength: 4102, energy: hc_keV_A / 4102 },

    // ================= Helium =================
    { name: "He I 5876", wavelength: 5876, energy: hc_keV_A / 5876 },
    { name: "He I 10830", wavelength: 10830, energy: hc_keV_A / 10830 },
    { name: "He II 1640", wavelength: 1640, energy: hc_keV_A / 1640 },
    { name: "He II 4686", wavelength: 4686, energy: hc_keV_A / 4686 },

    // ================= Oxygen =================
    { name: "[O II] 3727", wavelength: 3727, energy: hc_keV_A / 3727 },
    { name: "[O III] 4363", wavelength: 4363, energy: hc_keV_A / 4363 },
    { name: "[O III] 4959", wavelength: 4959, energy: hc_keV_A / 4959 },
    { name: "[O III] 5007", wavelength: 5007, energy: hc_keV_A / 5007 },
    { name: "O VI 1032", wavelength: 1032, energy: hc_keV_A / 1032 },
    { name: "O VII (res)", wavelength: 21.60, energy: hc_keV_A / 21.60 },
    { name: "O VII (int)", wavelength: 21.80, energy: hc_keV_A / 21.80 },
    { name: "O VII (forb)", wavelength: 22.10, energy: hc_keV_A / 22.10 },
    { name: "O VIII Lyα", wavelength: 18.97, energy: hc_keV_A / 18.97 }

    // Add more as needed...
  ];
})();
