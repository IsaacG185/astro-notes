window.constants = {
  planck_constant_h: {
    name: "Planck's constant (h)",
    definition: "Relates the energy of a photon to its frequency.",
    values: {
      "J*s": 6.62607015e-34,
      "erg*s": 6.62607015e-27,
      "eV*s": 4.135667696e-15,
      "keV*s": 4.135667696e-18
    }
  },

  speed_of_light_c: {
    name: "Speed of Light (c)",
    definition: "Universal constant for the speed of light in vacuum.",
    values: {
      "m*s^-1": 2.99792458e8,
      "cm*s^-1": 2.99792458e10,
      "km*s^-1": 2.99792458e5,
      "Å*s^-1": 2.99792458e18
    }
  },

  boltzmann_constant_k_B: {
    name: "Boltzmann constant (k<sub>B</sub>)",
    definition: "Relates temperature to thermal energy.",
    values: {
      "J*K^-1": 1.380649e-23,
      "erg*K^-1": 1.380649e-16,
      "eV*K^-1": 8.617333262e-5
    }
  },

  stefan_boltzmann_constant_σ: {
    name: "Stefan–Boltzmann constant (σ)",
    definition: "Constant of proportionality in Stefan–Boltzmann law.",
    values: {
      "W*m^-2*K^-4": 5.670374419e-8
    }
  },

  universal_gravitational_constant_G: {
    name: "Universal Gravitational constant (G)",
    definition: "Proportionality factor in Newton’s law of gravitation.",
    values: {
      "m^3*kg^-1*s^-2": 6.67430e-11
    }
  },

  electronvolt_eV: {
    name: "Electronvolt (eV)",
    definition: "Energy gained by an electron when accelerated through 1 volt.",
    values: {
      "J": 1.602176634e-19,
      "erg": 1.602176634e-12,
      "keV": 1e-3
    }
  },

  earth_radius_r_⊕: {
    name: "Earth radius (r<sub>⊕</sub>)",
    definition: "Mean radius of Earth.",
    values: {
      "m": 6.371e6,
      "km": 6371
    }
  },

  earth_mass_m_⊕: {
    name: "Earth mass (m<sub>⊕</sub>)",
    definition: "Mass of Earth.",
    values: {
      "kg": 5.972e24,
      "g": 5.972e27
    }
  },

  solar_radius_r_⊙: {
    name: "Solar radius (r<sub>⊙</sub>)",
    definition: "Mean radius of the Sun.",
    values: {
      "m": 6.957e8,
      "km": 6.957e5
    }
  },

 solar_mass_m_⊙: {
    name: "Solar mass (m<sub>⊙</sub>)",
    definition: "Mass of the Sun.",
    values: {
      "kg": 1.989e30,
      "g": 1.989e33
    }
  },

  milky_way_mass_m_MW: {
    name: "Milky Way mass (m<sub>MW</sub>)",
    definition: "Estimated total mass of the Milky Way galaxy (stars + gas + dark matter).",
    values: {
      "M<sub>⊙</sub>": 1.5e12,
      "kg": 2.98e42
    }
  }
};
