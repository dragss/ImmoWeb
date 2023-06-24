<template>
  <div>
    <div class="text-xl text-blue-500">Interlocuteur :</div>
    <select
      class="border ml-1"
      id="Chambres-select"
      @change="selectUser"
      v-model="selectedUserIndex"
    >
      <option v-for="(user, index) in users" :key="index" :value="index">
        <img class="w-12" :src="user.img" />
        {{ user.name }}
      </option>
    </select>
    <div class="flex items-center mt-2">
      <img :src="users[selectedUserIndex].img" class="w-24 mr-3 rounded" />
      <div>
        <div class="font-bold">{{ users[selectedUserIndex].name }}</div>
        <div>{{ users[selectedUserIndex].tag }}</div>
        <div>{{ users[selectedUserIndex].phone }}</div>
        <div>{{ users[selectedUserIndex].mail }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    if (this.infoForm && this.infoForm.interlocuteur) {
      let i = this.users.findIndex(
        (e) => e.name === this.infoForm.interlocuteur.name
      );
      if (i !== -1) {
        this.selectedUserIndex = i;
      }
    }

    this.addToInfoForm({
      interlocuteur: this.users[this.selectedUserIndex],
    });
  },
  computed: {
    ...mapGetters(['infoForm']),
  },
  methods: {
    ...mapActions(['addToInfoForm']),
    selectUser() {
      this.selectedUserIndex;
      this.addToInfoForm({
        interlocuteur: this.users[this.selectedUserIndex],
      });
    },
  },
  data() {
    return {
      selectedUserIndex: 0,
      users: [
        {
          name: 'BLANCHARD Léa',
          img: '/user/lea.JPG',
          tag: 'Agent commercial Morbihan',
          phone: '06 62 38 98 93',
          mail: 'lblanchard.terredimmo@outlook.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'BOSSENNEC Alexandre',
          img: '/user/alex.JPG',
          tag: 'Agent commercial Pays Bigouden',
          phone: '06 27 34 19 15',
          mail: 'alexandreterredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'BROUARD Frédéric',
          img: '/user/fred.JPG',
          tag: 'Agent commercial Fouesnant & Alentours',
          phone: '06 15 67 00 75',
          mail: 'fredericterredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'CLOITRE Sophie',
          img: '/user/sophie.JPG',
          tag: 'Agent commercial Quimper Nord & agglomération',
          phone: '06 50 09 18 95',
          mail: 'sophie.terredimmo@hotmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'COPPOLA PERON Perrine',
          img: '/user/perine.JPG',
          tag: 'Agent commercial Pays Bigouden',
          phone: '07 88 15 89 04',
          mail: 'perrine.terredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'DE SERRES Hadrien',
          img: '/user/hadrien.JPG',
          tag: "Agent commercial Presqu'île de Crozon",
          phone: '07 80 69 58 64',
          mail: 'hadrienterredimmo@outlook.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'ESNAULT Nathalie',
          tag: 'Agent commercial Quimper Nord & Agglomération',
          img: '/user/nath.JPG',
          phone: '06 75 85 59 20',
          mail: 'agence@terredimmo.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'FOLLEZOU Soléne',
          img: '/user/solene.JPG',
          tag: 'Agent commercial Quimper Sud',
          phone: '06 31 19 88 21',
          mail: 'solene.terredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'FOUCAUD Chantal',
          img: '/user/chantal.JPG',
          tag: 'Agent commercial Douarnenez & alentours',
          phone: '06 34 05 85 22',
          mail: 'latnahc29@hotmail.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'GUEGUEN Christophe',
          img: '/user/christophe.JPG',
          tag: 'Dirigeant Fondateur de TERRE D’IMMO',
          phone: '02 98 65 13 13',
          mail: 'agence@terredimmo.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'GUEGUEN Nolwenn',
          img: '/user/nol.JPG',
          tag: 'Assistante de direction Service Location / Gestion',
          phone: '02 98 65 13 13',
          mail: 'agence@terredimmo.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'GUIHENNEUC Marc',
          img: '/user/marc.JPG',
          tag: 'Agent commercial Quimper Sud',
          phone: '06 59 03 25 17',
          mail: 'marc.terredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'LE BARS Martine',
          img: '/user/martine.JPG',
          tag: 'Agent commercial Fouesnant & Alentours',
          phone: '06 61 54 97 20',
          mail: 'martineelebarsterredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'LE BOT Pascale Aline',
          img: '/user/pascaline.JPG',
          tag: 'Agent commercial Morbihan - Vannes & Agglomération',
          phone: '06 48 56 85 94s',
          mail: 'pascalineterredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'LE GARREC Jérôme',
          img: '/user/jerome.JPG',
          tag: 'Agent commercial Morbihan',
          phone: '06 50 55 90 52',
          mail: 'jlegarrec.terredimmo@outlook.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'NAOUR Quentin',
          img: '/user/quentin.JPG',
          tag: 'Agent commercial Quimperlé',
          phone: '06 99 70 86 51',
          mail: 'quentin.terredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'PERON Hugo',
          img: '/user/hugo.JPG',
          tag: 'Agent commercial Concarneau & Alentours',
          phone: '06 10 88 11 29',
          mail: 'hugoperron.terredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'QUEFFELEC Patricia',
          img: '/user/patricia.JPG',
          tag: 'Agent commercial secteur Fouesnantais',
          phone: '06 08 35 85 73',
          mail: 'patriciaqueffelec29@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'SIMON Mallaury',
          img: '/user/maullaury.JPG',
          tag: 'Agent commercial Cap-Sizun',
          phone: '06 74 14 88 56',
          mail: 'mallaury.terredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'TOUSSAINT Julie ',
          img: '/user/julie.JPG',
          tag: 'Agent commercial Morbihan',
          phone: '07 56 85 56 82',
          mail: 'jtoussaint.terredimmo@outlook.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'TROADEC Laurent',
          img: '/user/Laurent.jpeg',
          tag: 'Agent Commercial Briec & Landrévarzec',
          phone: '07 65 58 36 60',
          mail: 'laurenttroadecterredimmo@gmail.com',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
        {
          name: 'TUFFIGO Justine',
          img: '/user/justine.JPG',
          tag: "Service juridique et financier de l'ensemble des transactions - Locations - Gestion",
          phone: '02 98 65 13 13',
          mail: 'agence@terredimmo.fr',
          website: 'terredimmo.fr',
          workspace: 'Terre D’Immo',
        },
      ],
    };
  },
};
</script>
