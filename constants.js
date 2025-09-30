// Contains all constants used in AstroNotes

window.constants = {
  h: {
    value: 6.62607015e-34,
    unit: "J·s",
    name: "Planck's constant"
  },
  c: {
    value: 2.99792458e8,
    unit: "m/s",
    name: "Speed of light"
  },
  eV: {
    value: 1.602176634e-19,
    unit: "J",
    name: "electronvolt"
  },
};

// Precompute hc in keV·Å
// hc (keV·Å) = h*c / eV * (1e-10 to convert m→Å) / 1000 to convert eV → keV
window.constants.hc = (window.constants.h.value * window.constants.c.value / window.constants.eV.value) * 1e-10 / 1000;
