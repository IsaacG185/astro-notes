/**
 * Constants for AstroNotes
 * Each constant has the following properties:
 * - name: plain text used for searching (no HTML tags)
 * - displayName: HTML formatted string for display (can include symbols/subscripts)
 * - definition: textual description of the constant
 * - values: object mapping units to numeric values
 */

window.constants = {

  planck_constant_h: {
    name: "Planck constant h",
    displayName: "Planck constant (h)",
    definition: "Relates the energy of a photon to its frequency.",
    values: {
      "J*s": 6.62607015e-34,
      "erg*s": 6.62607015e-27,
      "eV*s": 4.135667696e-15,
      "keV*s": 4.135667696e-18
    }
  },

  speed_of_light_c: {
    name: "Speed of light c",
    displayName: "Speed of Light (c)",
    definition: "Universal constant for the speed of light in vacuum.",
    values: {
      "m*s^-1": 2.99792458e8,
      "cm*s^-1": 2.99792458e10,
      "km*s^-1": 2.99792458e5,
      "Å*s^-1": 2.99792458e18
    }
  },

  boltzmann_constant_kB: {
    name: "Boltzmann constant kB",
    displayName: "Boltzmann constant (k<sub>B</sub>)",
    definition: "Relates temperature to thermal energy.",
    values: {
      "J*K^-1": 1.380649e-23,
      "erg*K^-1": 1.380649e-16,
      "eV*K^-1": 8.617333262e-5
    }
  },

  stefan_boltzmann_constant_sigma: {
    name: "Stefan-Boltzmann constant sigma",
    displayName: "Stefan–Boltzmann constant (σ)",
    definition: "Constant of proportionality in Stefan–Boltzmann law.",
    values: {
      "W*m^-2*K^-4": 5.670374419e-8
    }
  },

  universal_gravitational_constant_G: {
    name: "Gravitational constant G",
    displayName: "Universal Gravitational Constant (G)",
    definition: "Proportionality factor in Newton’s law of gravitation.",
    values: {
      "m^3*kg^-1*s^-2": 6.67430e-11
    }
  },

  electronvolt_eV: {
    name: "Electronvolt eV",
    displayName: "Electronvolt (eV)",
    definition: "Energy gained by an electron when accelerated through 1 volt.",
    values: {
      "J": 1.602176634e-19,
      "erg": 1.602176634e-12,
      "keV": 1e-3
    }
  },

  earth_radius_R_earth: {
    name: "Earth radius",
    displayName: "Earth radius (R<sub>⊕</sub>)",
    definition: "Mean radius of Earth.",
    values: {
      "m": 6.371e6,
      "km": 6371
    }
  },

  earth_mass_M_earth: {
    name: "Earth mass",
    displayName: "Earth mass (M<sub>⊕</sub>)",
    definition: "Mass of Earth.",
    values: {
      "kg": 5.972e24,
      "g": 5.972e27
    }
  },

  solar_radius_R_sun: {
    name: "Solar radius",
    displayName: "Solar radius (R<sub>⊙</sub>)",
    definition: "Mean radius of the Sun.",
    values: {
      "m": 6.957e8,
      "km": 6.957e5
    }
  },

  solar_mass_M_sun: {
    name: "Solar mass",
    displayName: "Solar mass (M<sub>⊙</sub>)",
    definition: "Mass of the Sun.",
    values: {
      "kg": 1.989e30,
      "g": 1.989e33
    }
  },

  milky_way_mass_M_MW: {
    name: "Milky Way mass",
    displayName: "Milky Way mass (M<sub>MW</sub>)",
    definition: "Estimated total mass of the Milky Way galaxy (stars + gas + dark matter).",
    values: {
      "M<sub>⊙</sub>": 1.5e12,
      "kg": 2.98e42
    }
  },

  reduced_planck_constant_hbar: {
    name: "Reduced Planck constant hbar",
    displayName: "Reduced Planck constant (ℏ)",
    definition: "Planck constant divided by 2π, used in quantum mechanics.",
    values: {
      "J*s": 1.054571817e-34,        // h / 2π
      "erg*s": 1.054571817e-27,      // h / 2π
      "eV*s": 6.582119569e-16,       // h / 2π
      "keV*s": 6.582119569e-19       // h / 2π
    }
  },

  // Luminosity of sun, parsec, ly, 1 J, 1 N, 1 W, density
  // Add more constants as necessary...
};
