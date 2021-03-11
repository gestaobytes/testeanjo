<template>
<div>

  <table-one/>

  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>HOME PAGE</h1>
      </div>

    </v-col>
  </v-row>

</div>
</template>

<script>

export default {

    head() {
    return {
      title: 'Inicio - O GIRASSOL',
      meta: [
        { hid: 'description', name: "description", content: 'Portal de notícias de Palmas e Tocantins com os mais variados temas: política, eleições, palmas, concursos, opinião, esporte e demais assuntos no site com mais de 20 anos de atividade.' },
        { hid: 'keywords', name: "keywords", content: 'Jornal Girassol, Palmas, Notícias do Tocantins, Notícias de Palmas, Política, Portal CT, T1 Notícias, Concursos, Vestibular Tocantins, Eleições, Concursos Tocantins, Concurso PM' },
      ],
    };
  },


}
</script>