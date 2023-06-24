// open the "data.txt" file an read line by line
const fs = require('fs');
const axios = require('axios').default;
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('data.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  let i = 0;
  let res = [];
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    if (i > 0) {
      let elem = line.split('|');
      let data = {
        code_service_ch: elem[0],
        reference_document: elem[1],
        articles_cgi1: elem[2],
        articles_cgi2: elem[3],
        articles_cgi3: elem[4],
        articles_cgi4: elem[5],
        articles_cgi5: elem[6],
        no_disposition: elem[7],
        date_mutation: elem[8],
        nature_mutation: elem[9],
        valeur_fonciere: elem[10],
        no_voie: elem[11],
        btq: elem[12],
        type_de_voie: elem[13],
        code_voie: elem[14],
        voie: elem[15],
        code_postal: elem[16],
        commune: elem[17],
        code_departement: elem[18],
        code_commune: elem[19],
        prefixe_de_section: elem[20],
        section: elem[21],
        no_plan: elem[22],
        no_volume: elem[23],
        lot_1: elem[24],
        surface_carrez_lot_1: elem[25],
        lot_2: elem[26],
        surface_carrez_lot_2: elem[27],
        lot_3: elem[28],
        surface_carrez_lot_3: elem[29],
        lot_4: elem[30],
        surface_carrez_lot_4: elem[31],
        lot_5: elem[32],
        surface_carrez_lot_5: elem[33],
        nombre_de_lots: elem[34],
        code_type_local: elem[35],
        type_local: elem[36],
        identifiant_local: elem[37],
        surface_reelle_bati: elem[38],
        nombre_pieces_principales: elem[39],
        nature_culture: elem[40],
        nature_culture_speciale: elem[41],
        surface_terrain: elem[42],
        formated_address:
          elem[11].toLowerCase() +
          ' ' +
          elem[13].toLowerCase() +
          ' ' +
          elem[15].toLowerCase(),
      };
      res.push(data);
    }
    i++;
  }

  let y = 0;
  for (let e of res) {
    console.log(y, e.commune);
    y++;
  }

  return res;
}

async function saveData(data) {
  try {
    await axios.post('http://localhost:8080/addresses', data);
  } catch (e) {
    console.log(e.message);
    console.log(e.response.data);
  }
}

processLineByLine();
