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
    { name: "Hydrogen Lyα", wavelength: 1216, energy: hc_keV_A / 1216 },   // ≈ 0.0102 keV
    { name: "Hydrogen Lyβ", wavelength: 1026, energy: hc_keV_A / 1026 },   // ≈ 0.0121 keV
    { name: "Hydrogen Lyγ", wavelength: 973,  energy: hc_keV_A / 973 },    // ≈ 0.0127 keV
    { name: "Hydrogen Hα", wavelength: 6563, energy: hc_keV_A / 6563 },    // ≈ 0.00189 keV
    { name: "Hydrogen Hβ", wavelength: 4861, energy: hc_keV_A / 4861 },    // ≈ 0.00255 keV
    { name: "Hydrogen Hγ", wavelength: 4340, energy: hc_keV_A / 4340 },    // ≈ 0.00286 keV
    { name: "Hydrogen Hδ", wavelength: 4102, energy: hc_keV_A / 4102 },    // ≈ 0.00302 keV

    // ================= Helium =================
    { name: "He I 5876", wavelength: 5876, energy: hc_keV_A / 5876 },      // ≈ 0.00211 keV
    { name: "He I 10830", wavelength: 10830, energy: hc_keV_A / 10830 },   // ≈ 0.00114 keV
    { name: "He II 1640", wavelength: 1640, energy: hc_keV_A / 1640 },     // ≈ 0.00756 keV
    { name: "He II 4686", wavelength: 4686, energy: hc_keV_A / 4686 },     // ≈ 0.00265 keV

    // ================= Oxygen =================
    { name: "[O II] 3727", wavelength: 3727, energy: hc_keV_A / 3727 },    // ≈ 0.00333 keV
    { name: "[O III] 4363", wavelength: 4363, energy: hc_keV_A / 4363 },   // ≈ 0.00284 keV
    { name: "[O III] 4959", wavelength: 4959, energy: hc_keV_A / 4959 },   // ≈ 0.00250 keV
    { name: "[O III] 5007", wavelength: 5007, energy: hc_keV_A / 5007 },   // ≈ 0.00248 keV
    { name: "O VI 1032", wavelength: 1032, energy: hc_keV_A / 1032 },      // ≈ 0.0120 keV
    { name: "O VII (res)", wavelength: 21.60, energy: hc_keV_A / 21.60 },  // ≈ 0.574 keV
    { name: "O VII (int)", wavelength: 21.80, energy: hc_keV_A / 21.80 },  // ≈ 0.569 keV
    { name: "O VII (forb)", wavelength: 22.10, energy: hc_keV_A / 22.10 }, // ≈ 0.561 keV
    { name: "O VIII Lyα", wavelength: 18.97, energy: hc_keV_A / 18.97 },   // ≈ 0.653 keV

    // ================= Nitrogen =================
    { name: "[N II] 6548", wavelength: 6548, energy: hc_keV_A / 6548 },    // ≈ 0.00189 keV
    { name: "[N II] 6583", wavelength: 6583, energy: hc_keV_A / 6583 },    // ≈ 0.00188 keV
    { name: "[N V] 1240", wavelength: 1240, energy: hc_keV_A / 1240 },     // ≈ 0.0100 keV

    // ================= Carbon =================
    { name: "C IV 1549", wavelength: 1549, energy: hc_keV_A / 1549 },      // ≈ 0.0080 keV
    { name: "C III] 1909", wavelength: 1909, energy: hc_keV_A / 1909 },    // ≈ 0.0065 keV

    // ================= Neon =================
    { name: "[Ne III] 3869", wavelength: 3869, energy: hc_keV_A / 3869 },  // ≈ 0.00320 keV
    { name: "Ne IX", wavelength: 13.45, energy: hc_keV_A / 13.45 },        // ≈ 0.922 keV
    { name: "Ne X Lyα", wavelength: 12.13, energy: hc_keV_A / 12.13 },     // ≈ 1.022 keV

    // ================= Magnesium =================
    { name: "Mg II 2798", wavelength: 2798, energy: hc_keV_A / 2798 },     // ≈ 0.00443 keV
    { name: "Mg XI", wavelength: 9.17, energy: hc_keV_A / 9.17 },          // ≈ 1.352 keV
    { name: "Mg XII Lyα", wavelength: 8.42, energy: hc_keV_A / 8.42 },     // ≈ 1.472 keV

    // ================= Silicon =================
    // Infrared [Si II]
    { name: "[Si II] 34.8μm", wavelength: 348000, energy: hc_keV_A / 348000 }, // ≈ 3.56e-5 keV

    // UV [Si II]
    { name: "[Si II] 1260", wavelength: 1260, energy: hc_keV_A / 1260 },       // ≈ 0.00984 keV
    { name: "[Si II] 1526", wavelength: 1526, energy: hc_keV_A / 1526 },       // ≈ 0.00813 keV
    { name: "[Si II] 1808", wavelength: 1808, energy: hc_keV_A / 1808 },       // ≈ 0.00686 keV

    // UV Si III]
    { name: "Si III] 1206", wavelength: 1206, energy: hc_keV_A / 1206 },       // ≈ 0.0103 keV

    // UV Si IV doublet
    { name: "Si IV 1394", wavelength: 1394, energy: hc_keV_A / 1394 },         // ≈ 0.00890 keV
    { name: "Si IV 1403", wavelength: 1403, energy: hc_keV_A / 1403 },         // ≈ 0.00884 keV

    // X-ray He-like Si XIII triplet (r, i, f)
    { name: "Si XIII (res)", wavelength: 6.65, energy: hc_keV_A / 6.65 },      // ≈ 1.864 keV
    { name: "Si XIII (int)", wavelength: 6.68, energy: hc_keV_A / 6.68 },      // ≈ 1.856 keV
    { name: "Si XIII (forb)", wavelength: 6.74, energy: hc_keV_A / 6.74 },     // ≈ 1.840 keV

    // X-ray H-like Si XIV Lyman series
    { name: "Si XIV Lyα", wavelength: 6.18, energy: hc_keV_A / 6.18 },         // ≈ 2.006 keV
    { name: "Si XIV Lyβ", wavelength: 5.22, energy: hc_keV_A / 5.22 },         // ≈ 2.38 keV
    { name: "Si XIV Lyγ", wavelength: 4.95, energy: hc_keV_A / 4.95 },         // ≈ 2.50 keV
    { name: "Si XIV Lyδ", wavelength: 4.85, energy: hc_keV_A / 4.85 },         // ≈ 2.56 keV

    // X-ray fluorescence (characteristic lines)
    { name: "Si Kα", wavelength: 7.12, energy: hc_keV_A / 7.12 },              // ≈ 1.74 keV
    { name: "Si Kβ", wavelength: 6.75, energy: hc_keV_A / 6.75 },              // ≈ 1.84 keV
    { name: "Si Kγ", wavelength: 6.64795, energy: hc_keV_A / 6.64795 },        // ≈ 1.865 keV
    { name: "Si Kδ", wavelength: 6.40000, energy: hc_keV_A / 6.40000 },        // ≈ 1.937 keV

    // ================= Sulfur =================
    { name: "[S II] 6716", wavelength: 6716, energy: hc_keV_A / 6716 },    // ≈ 0.00185 keV
    { name: "[S II] 6731", wavelength: 6731, energy: hc_keV_A / 6731 },    // ≈ 0.00184 keV
    { name: "S XV", wavelength: 5.04, energy: hc_keV_A / 5.04 },           // ≈ 2.459 keV
    { name: "S XVI Lyα", wavelength: 4.73, energy: hc_keV_A / 4.73 },      // ≈ 2.620 keV

    // ================= Argon =================
    { name: "Ar XVII", wavelength: 3.95, energy: hc_keV_A / 3.95 },        // ≈ 3.14 keV
    { name: "Ar XVIII Lyα", wavelength: 3.73, energy: hc_keV_A / 3.73 },   // ≈ 3.32 keV

    // ================= Calcium =================
    { name: "[Ca II] 3934 (K)", wavelength: 3934, energy: hc_keV_A / 3934 }, // ≈ 0.00315 keV
    { name: "[Ca II] 3968 (H)", wavelength: 3968, energy: hc_keV_A / 3968 }, // ≈ 0.00312 keV
    { name: "Ca XIX", wavelength: 3.18, energy: hc_keV_A / 3.18 },         // ≈ 3.90 keV
    { name: "Ca XX Lyα", wavelength: 3.02, energy: hc_keV_A / 3.02 },      // ≈ 4.11 keV

    // ================= Iron =================
    { name: "Fe XVII", wavelength: 15.01, energy: hc_keV_A / 15.01 },      // ≈ 0.826 keV
    { name: "Fe XVII", wavelength: 17.05, energy: hc_keV_A / 17.05 },      // ≈ 0.727 keV
    { name: "Fe XVII", wavelength: 17.10, energy: hc_keV_A / 17.10 },      // ≈ 0.725 keV
    { name: "Fe XVIII", wavelength: 14.20, energy: hc_keV_A / 14.20 },     // ≈ 0.873 keV
    { name: "Fe XVIII", wavelength: 93.92, energy: hc_keV_A / 93.92 },     // ≈ 0.132 keV
    { name: "Fe XIX", wavelength: 13.52, energy: hc_keV_A / 13.52 },       // ≈ 0.917 keV
    { name: "Fe XX", wavelength: 12.82, energy: hc_keV_A / 12.82 },        // ≈ 0.967 keV
    { name: "Fe XXI", wavelength: 12.28, energy: hc_keV_A / 12.28 },       // ≈ 1.010 keV
    { name: "Fe XXII", wavelength: 11.77, energy: hc_keV_A / 11.77 },      // ≈ 1.052 keV
    { name: "Fe XXIII", wavelength: 11.00, energy: hc_keV_A / 11.00 },     // ≈ 1.127 keV
    { name: "Fe XXIV", wavelength: 10.62, energy: hc_keV_A / 10.62 },      // ≈ 1.167 keV
    { name: "Fe XXV (He-like)", wavelength: 1.85, energy: hc_keV_A / 1.85 }, // ≈ 6.70 keV
    { name: "Fe XXVI Lyα", wavelength: 1.78, energy: hc_keV_A / 1.78 },    // ≈ 6.96 keV
    { name: "[Fe II]", wavelength: 7155, energy: hc_keV_A / 7155 },        // ≈ 0.00173 keV
    { name: "[Fe III]", wavelength: 4658, energy: hc_keV_A / 4658 },       // ≈ 0.00266 keV
    { name: "[Fe VII]", wavelength: 6087, energy: hc_keV_A / 6087 },       // ≈ 0.00204 keV
    { name: "[Fe X]", wavelength: 6374, energy: hc_keV_A / 6374 },         // ≈ 0.00195 keV
    { name: "[Fe XIV]", wavelength: 5303, energy: hc_keV_A / 5303 }        // ≈ 0.00234 keV

    // More emission lines can be added here...
  ];
})();
