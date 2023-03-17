const { createApp } = Vue

createApp({
  data() {
    return {

        user: {
            name: 'MrWolf.btc',
            avatar: './img/mrwolf.jpg',
            visible: true,
        },

        // Array contatti
        contacts: [
            {
                name: 'carbonara.btc',
                avatar: './img/carbonara.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'lebowskey.btc',
                avatar: './img/lebowskey.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Mr Tweet',
                avatar: './img/mr-tweet.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Noisy',
                avatar: './img/Noisy.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'So Evil',
                avatar: './img/devil.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Anon',
                avatar: './img/anon.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Wen 100k?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Soon',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Wen?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'WAGMI',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'WEN?!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: '1 BTC = 1 BTC',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'The Godfather',
                avatar: './img/godfather.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Snoopy',
                avatar: './img/snoopy.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Mr Police',
                avatar: './img/policeman.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a fare serata?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già fatta ieri, ordiniamo un kebab!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

        activeContactIndex: 0,

        // inizializzo un nuovo messaggio
        newMessage: {
            date: "03:33",
            message: '',
            status: 'sent'
        },

        filteredItems: [],
        searchPayload: '',

    }
  },

  watch: {
    searchPayload: function() {
        console.log("payload", this.searchPayload);

        //contacts.filter((contacts) => this.contacts.name.toLowerCase);
         this.filteredItems = this.contacts.filter(contacts => contacts.name.toLowerCase().includes(this.searchPayload.toLowerCase));
         console.log("filtered", this.filteredItems);


    },
  },

  mounted() {
    this.filteredItems = this.contacts;
    // console.log("data", this.filteredItems);
  },

  methods: {
        // funzione per cambiare activeContactIndex in base al contatto cliccato        
        changeActiveContactIndex(contactIndex) {
                   
        this.activeContactIndex = contactIndex;
        // console.log(this.activeContactIndex);
        },

        // funzione per aggiungere messaggi nella chat
        addMessage() {

            // pusho newMessage nuovo messaggio nell'array dei messaggi
            this.contacts[this.activeContactIndex].messages.push(this.newMessage);
        
            // resetto newMessage
            this.newMessage = {
                date: '03:33',
                message: '',
                status: 'sent'
            };

            // chiamo la funzione autoReply() dopo 1 secondo
            setTimeout(()=>{
                this.autoReply();
            }, 1000);
        },

      // funzione di risposta automatica dopo l'invio di un messaggio
      autoReply() {
        
        // preparo il messaggio di risposta
        this.newMessage = {
              date: '03:33',
              message: 'ok',
              status: 'received'
            };
            
        // lo pusho nell'array dei messaggi
        this.contacts[this.activeContactIndex].messages.push(this.newMessage);

        // lo resetto
        this.newMessage = {
            date: '03:33',
            message: '',
            status: 'sent'
          };
      },

  },



}).mount('#app')