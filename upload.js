const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const transcriptsDir = path.join(__dirname, 'transcripts');

// Vérifier que le dossier des transcriptions existe
if (fs.existsSync(transcriptsDir)) {
    // Ajouter, commiter et pousser les fichiers de transcription vers GitHub
    exec('git add transcripts/*.json && git commit -m "Ajout de nouvelles transcriptions" && git push origin master', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erreur lors du commit et push: ${err.message}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
} else {
    console.error("Le dossier des transcriptions n'existe pas.");
}
