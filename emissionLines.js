// Wrap the initialization in a function
(function() {
  // Wait until window.constants is available
  if (!window.constants) {
    console.error("Constants not loaded yet. emissionLines.js requires constants.js to load first.");
    return;
  }

  // Calculated for brevity.
  const hc_keV_A = window.constants.h.values["keV·s"] * window.constants.c.values["Å/s"];

  // Define emission lines
  window.emissionLines = [
    { name: "Hydrogen Lyα", wavelength: 1216, energy: hc_keV_A / 1216 },
    { name: "Hydrogen Lyβ", wavelength: 1026, energy: hc_keV_A / 1026 },
    { name: "Hydrogen Lyγ", wavelength: 973, energy: hc_keV_A / 973 },
    { name: "Hydrogen Hα", wavelength: 6563, energy: hc_keV_A / 6563 },
    { name: "Hydrogen Hβ", wavelength: 4861, energy: hc_keV_A / 4861 },
    { name: "Hydrogen Hγ", wavelength: 4340, energy: hc_keV_A / 4340 },
    { name: "Hydrogen Hδ", wavelength: 4102, energy: hc_keV_A / 4102 },

    { name: "He I 5876", wavelength: 5876, energy: hc_keV_A / 5876 },
    { name: "He II 4686", wavelength: 4686, energy: hc_keV_A / 4686 },
    { name: "[O III] 5007", wavelength: 5007, energy: hc_keV_A / 5007 },
    { name: "C IV 1549", wavelength: 1549, energy: hc_keV_A / 1549 },
    // ...rest of your lines...
  ];

})();

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
  { name: "O VIII Lyα", wavelength: 18.97, energy: hc_keV_A / 18.97 },

  // ================= Nitrogen =================
  { name: "[N II] 6548", wavelength: 6548, energy: hc_keV_A / 6548 },
  { name: "[N II] 6583", wavelength: 6583, energy: hc_keV_A / 6583 },
  { name: "[N V] 1240", wavelength: 1240, energy: hc_keV_A / 1240 },

  // ================= Carbon =================
  { name: "C IV 1549", wavelength: 1549, energy: hc_keV_A / 1549 },
  { name: "C III] 1909", wavelength: 1909, energy: hc_keV_A / 1909 },

  // ================= Neon =================
  { name: "[Ne III] 3869", wavelength: 3869, energy: hc_keV_A / 3869 },
  { name: "Ne IX", wavelength: 13.45, energy: hc_keV_A / 13.45 },
  { name: "Ne X Lyα", wavelength: 12.13, energy: hc_keV_A / 12.13 },

  // ================= Magnesium =================
  { name: "Mg II 2798", wavelength: 2798, energy: hc_keV_A / 2798 },
  { name: "Mg XI", wavelength: 9.17, energy: hc_keV_A / 9.17 },
  { name: "Mg XII Lyα", wavelength: 8.42, energy: hc_keV_A / 8.42 },

  // ================= Silicon =================
  { name: "[Si II] 34.8μm", wavelength: 348000, energy: hc_keV_A / 348000 },
  { name: "Si XIII", wavelength: 6.65, energy: hc_keV_A / 6.65 },
  { name: "Si XIV Lyα", wavelength: 6.18, energy: hc_keV_A / 6.18 },

  // ================= Sulfur =================
  { name: "[S II] 6716", wavelength: 6716, energy: hc_keV_A / 6716 },
  { name: "[S II] 6731", wavelength: 6731, energy: hc_keV_A / 6731 },
  { name: "S XV", wavelength: 5.04, energy: hc_keV_A / 5.04 },
  { name: "S XVI Lyα", wavelength: 4.73, energy: hc_keV_A / 4.73 },

  // ================= Argon =================
  { name: "Ar XVII", wavelength: 3.95, energy: hc_keV_A / 3.95 },
  { name: "Ar XVIII Lyα", wavelength: 3.73, energy: hc_keV_A / 3.73 },

  // ================= Calcium =================
  { name: "[Ca II] 3934 (K)", wavelength: 3934, energy: hc_keV_A / 3934 },
  { name: "[Ca II] 3968 (H)", wavelength: 3968, energy: hc_keV_A / 3968 },
  { name: "Ca XIX", wavelength: 3.18, energy: hc_keV_A / 3.18 },
  { name: "Ca XX Lyα", wavelength: 3.02, energy: hc_keV_A / 3.02 },

  // ================= Iron =================
  { name: "Fe XVII", wavelength: 15.01, energy: hc_keV_A / 15.01 },
  { name: "Fe XVII", wavelength: 17.05, energy: hc_keV_A / 17.05 },
  { name: "Fe XVII", wavelength: 17.10, energy: hc_keV_A / 17.10 },
  { name: "Fe XVIII", wavelength: 14.20, energy: hc_keV_A / 14.20 },
  { name: "Fe XVIII", wavelength: 93.92, energy: hc_keV_A / 93.92 },
  { name: "Fe XIX", wavelength: 13.52, energy: hc_keV_A / 13.52 },
  { name: "Fe XX", wavelength: 12.82, energy: hc_keV_A / 12.82 },
  { name: "Fe XXI", wavelength: 12.28, energy: hc_keV_A / 12.28 },
  { name: "Fe XXII", wavelength: 11.77, energy: hc_keV_A / 11.77 },
  { name: "Fe XXIII", wavelength: 11.00, energy: hc_keV_A / 11.00 },
  { name: "Fe XXIV", wavelength: 10.62, energy: hc_keV_A / 10.62 },
  { name: "Fe XXV (He-like)", wavelength: 1.85, energy: hc_keV_A / 1.85 },
  { name: "Fe XXVI Lyα", wavelength: 1.78, energy: hc_keV_A / 1.78 },
  { name: "[Fe II]", wavelength: 7155, energy: hc_keV_A / 7155 },
  { name: "[Fe III]", wavelength: 4658, energy: hc_keV_A / 4658 },
  { name: "[Fe VII]", wavelength: 6087, energy: hc_keV_A / 6087 },
  { name: "[Fe X]", wavelength: 6374, energy: hc_keV_A / 6374 },
  { name: "[Fe XIV]", wavelength: 5303, energy: hc_keV_A / 5303 }
];
