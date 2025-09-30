// Emission Lines for AstroNotes
window.emissionLines = [
  // ================= Hydrogen Series =================
  { name: "Hydrogen Lyα", wavelength: 1216, energy: 12.39842/1216 },
  { name: "Hydrogen Lyβ", wavelength: 1026, energy: 12.39842/1026 },
  { name: "Hydrogen Lyγ", wavelength: 973,  energy: 12.39842/973 },
  { name: "Hydrogen Hα", wavelength: 6563, energy: 12.39842/6563 },
  { name: "Hydrogen Hβ", wavelength: 4861, energy: 12.39842/4861 },
  { name: "Hydrogen Hγ", wavelength: 4340, energy: 12.39842/4340 },
  { name: "Hydrogen Hδ", wavelength: 4102, energy: 12.39842/4102 },

  // ================= Helium =================
  { name: "He I 5876", wavelength: 5876, energy: 12.39842/5876 },
  { name: "He I 10830", wavelength: 10830, energy: 12.39842/10830 },
  { name: "He II 1640", wavelength: 1640, energy: 12.39842/1640 },
  { name: "He II 4686", wavelength: 4686, energy: 12.39842/4686 },

  // ================= Oxygen =================
  { name: "[O II] 3727", wavelength: 3727, energy: 12.39842/3727 },
  { name: "[O III] 4363", wavelength: 4363, energy: 12.39842/4363 },
  { name: "[O III] 4959", wavelength: 4959, energy: 12.39842/4959 },
  { name: "[O III] 5007", wavelength: 5007, energy: 12.39842/5007 },
  { name: "O VI 1032", wavelength: 1032, energy: 12.39842/1032 },
  { name: "O VII (res)", wavelength: 21.60, energy: 12.39842/21.60 },
  { name: "O VII (int)", wavelength: 21.80, energy: 12.39842/21.80 },
  { name: "O VII (forb)", wavelength: 22.10, energy: 12.39842/22.10 },
  { name: "O VIII Lyα", wavelength: 18.97, energy: 12.39842/18.97 },

  // ================= Nitrogen =================
  { name: "[N II] 6548", wavelength: 6548, energy: 12.39842/6548 },
  { name: "[N II] 6583", wavelength: 6583, energy: 12.39842/6583 },
  { name: "[N V] 1240", wavelength: 1240, energy: 12.39842/1240 },

  // ================= Carbon =================
  { name: "C IV 1549", wavelength: 1549, energy: 12.39842/1549 },
  { name: "C III] 1909", wavelength: 1909, energy: 12.39842/1909 },

  // ================= Neon =================
  { name: "[Ne III] 3869", wavelength: 3869, energy: 12.39842/3869 },
  { name: "Ne IX", wavelength: 13.45, energy: 12.39842/13.45 },
  { name: "Ne X Lyα", wavelength: 12.13, energy: 12.39842/12.13 },

  // ================= Magnesium =================
  { name: "Mg II 2798", wavelength: 2798, energy: 12.39842/2798 },
  { name: "Mg XI", wavelength: 9.17, energy: 12.39842/9.17 },
  { name: "Mg XII Lyα", wavelength: 8.42, energy: 12.39842/8.42 },

  // ================= Silicon =================
  { name: "[Si II] 34.8μm", wavelength: 348000, energy: 12.39842/348000 },
  { name: "Si XIII", wavelength: 6.65, energy: 12.39842/6.65 },
  { name: "Si XIV Lyα", wavelength: 6.18, energy: 12.39842/6.18 },

  // ================= Sulfur =================
  { name: "[S II] 6716", wavelength: 6716, energy: 12.39842/6716 },
  { name: "[S II] 6731", wavelength: 6731, energy: 12.39842/6731 },
  { name: "S XV", wavelength: 5.04, energy: 12.39842/5.04 },
  { name: "S XVI Lyα", wavelength: 4.73, energy: 12.39842/4.73 },

  // ================= Argon =================
  { name: "Ar XVII", wavelength: 3.95, energy: 12.39842/3.95 },
  { name: "Ar XVIII Lyα", wavelength: 3.73, energy: 12.39842/3.73 },

  // ================= Calcium =================
  { name: "[Ca II] 3934 (K)", wavelength: 3934, energy: 12.39842/3934 },
  { name: "[Ca II] 3968 (H)", wavelength: 3968, energy: 12.39842/3968 },
  { name: "Ca XIX", wavelength: 3.18, energy: 12.39842/3.18 },
  { name: "Ca XX Lyα", wavelength: 3.02, energy: 12.39842/3.02 },

  // ================= Iron =================
{ name: "Fe XVII", wavelength: 15.01, energy: 12.39842/15.01 },   // strong soft X-ray line
{ name: "Fe XVII", wavelength: 17.05, energy: 12.39842/17.05 },
{ name: "Fe XVII", wavelength: 17.10, energy: 12.39842/17.10 },

{ name: "Fe XVIII", wavelength: 14.20, energy: 12.39842/14.20 },
{ name: "Fe XVIII", wavelength: 93.92, energy: 12.39842/93.92 },

{ name: "Fe XIX", wavelength: 13.52, energy: 12.39842/13.52 },

{ name: "Fe XX", wavelength: 12.82, energy: 12.39842/12.82 },

{ name: "Fe XXI", wavelength: 12.28, energy: 12.39842/12.28 },

{ name: "Fe XXII", wavelength: 11.77, energy: 12.39842/11.77 },

{ name: "Fe XXIII", wavelength: 11.00, energy: 12.39842/11.00 },

{ name: "Fe XXIV", wavelength: 10.62, energy: 12.39842/10.62 },

{ name: "Fe XXV (He-like)", wavelength: 1.85, energy: 12.39842/1.85 },   // ~6.70 keV
{ name: "Fe XXVI Lyα", wavelength: 1.78, energy: 12.39842/1.78 },       // ~6.97 keV

// Optical forbidden lines
{ name: "[Fe II]", wavelength: 7155, energy: 12.39842/7155 },  // 0.00173 keV
{ name: "[Fe III]", wavelength: 4658, energy: 12.39842/4658 }, // 0.00266 keV
{ name: "[Fe VII]", wavelength: 6087, energy: 12.39842/6087 }, // 0.00204 keV
{ name: "[Fe X]", wavelength: 6374, energy: 12.39842/6374 },   // 0.00194 keV
{ name: "[Fe XIV]", wavelength: 5303, energy: 12.39842/5303 }  // 0.00234 keV

];
