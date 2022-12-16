const { createApp } = Vue

createApp({
  data() {
    return {
      artist1: './img/1.jpg',
      artist2: './img/2.jpg',
      term: null,
      results: [],
      copyRes:[],

     
      

      noResults:false,

      message: "<span>0</span>",

    }
  },
  methods: {
    submit(){
      this.results = [],
      this.copyRes =[],
     
      fetch('https://itunes.apple.com/search?term=' + this.term + '&limit=6&attribute=allArtistTerm')
        .then(res => res.json())
        .then(res => {
        
          this.results = res.results;
          this.copyRes = res.results;
          console.log(this.results);
          
          if(this.results.length==0){
            this.noResults = true;
            this.message =0;
            alert("No Artists found with the keyword");
          }else{
            this.message = this.results.length;



          }
       });
      
    },

    waterParks(){
        this.term="Waterparks";
        this.submit();
    },

    chase(){
        this.term="Chase Atlantic";
        this.submit();
    },

    hood(){
        this.term="The Neighborhood";
        this.submit();
    },

    

    
  }
}).mount('#app')
