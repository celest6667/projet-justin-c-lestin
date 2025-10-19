import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        interstellar: resolve(__dirname, "films/interstellar.html"),
        HarryPotteretlaChambredesSecrets: resolve(__dirname, "films/Harry Potter et la Chambre des Secrets.html"),
        Superman: resolve(__dirname, "films/Superman.html"),
        LeParrain: resolve(__dirname, "films/Le Parrain.html"),
        Conjuring: resolve(__dirname, "films/Conjuring : L'Heure du Jugement.html"),
        ThedarkKnight: resolve(__dirname, "films/The Dark Knight : Le chevalier noir.html"),
        FightClub: resolve(__dirname, "films/Fight Club.html"),
        Lesevades: resolve(__dirname, "films/Les Évadés.html"),
      }
    }
  }
});