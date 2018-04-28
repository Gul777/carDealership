var carDealership = {
    
   sedan: {
     rentalPrice:50,
     numAvailable:10
    },
   suv: {
    rentalPrice:70,
    numAvailable:0
    },
   sports: {
    rentalPrice:90,
    numAvailable:30
    },

    checkAvailability: function(carType){
        return `We have  ${this[carType].numAvailable} ${carType}'s available`;
    }

};

carDealership.checkAvailability("sedan");