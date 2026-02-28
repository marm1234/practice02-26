<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar title="Курсы" color="#5C6BC0"></v-app-bar>

    <v-navigation-drawer>
      <v-list nav>
        <v-list-item title="Программирование" link></v-list-item>
        <v-list-item title="Вокал" link></v-list-item>
        <v-list-item title="Танцы" link></v-list-item>
        <v-list-item title="Спорт" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        
        <v-row>
          <v-col v-for="card in cards" :key="card.word" cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-card-item>
                <v-card-title>{{ card.word }}</v-card-title>
                <v-card-subtitle>{{ card.partOfSpeech }}</v-card-subtitle>
              </v-card-item>
              
              <v-card-text>
                <div class="text-medium-emphasis">
                  {{ card.definition }}
                </div>
              </v-card-text>
              
              <v-card-actions>
                <v-btn 
                  :color="card.color" 
                  :prepend-icon="card.icon"
                  text="Подробнее" 
                  variant="tonal"
                  block
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
const cards = [
  {
    word: 'Хип-хоп',
    partOfSpeech: 'Танцы',
    definition: 'Занятия в группах по возрасту. Современные танцы для детей и подростков.',
    color: 'deep-purple-accent-4',
    icon: 'mdi-dance-ballroom'
  },
  {
    word: 'Футбол',
    partOfSpeech: 'Спорт',
    definition: 'Занятия в группах по возрасту. Развитие координации и командного духа.',
    color: 'green-accent-4',
    icon: 'mdi-soccer'
  },
  {
    word: 'Волейбол',
    partOfSpeech: 'Спорт',
    definition: 'Занятия в группах по возрасту. Развитие координации и командного духа.',
    color: 'orange-accent-4',
    icon: 'mdi-volleyball'
  }
]
</script>